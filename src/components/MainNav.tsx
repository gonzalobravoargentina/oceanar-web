"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { href, routeKeys, type RouteKey } from "@/i18n/routes";

type Props = {
  lang: Locale;
  labels: Record<RouteKey, string> & {
    label: string;
    openMenu: string;
    closeMenu: string;
  };
};

// "Conversemos" stays visible outside the menu at every screen size.
const menuKeys = routeKeys.filter((key) => key !== "talk");

export function MainNav({ lang, labels }: Props) {
  // Internal folder name (e.g. "projects"), not the localized slug.
  const segment = useSelectedLayoutSegment();
  // The mobile menu remembers the page it was opened on, so it closes by
  // itself after navigating to another page.
  const [openOn, setOpenOn] = useState<string | null | false>(false);
  const open = openOn !== false && openOn === segment;

  const current = (key: RouteKey) => (segment === key ? "page" : undefined);

  return (
    <nav aria-label={labels.label} className="flex items-center gap-2 sm:gap-4">
      <button
        type="button"
        className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-current lg:hidden"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpenOn(open ? false : segment)}
      >
        <span className="sr-only">
          {open ? labels.closeMenu : labels.openMenu}
        </span>
        <span
          aria-hidden="true"
          className={`h-px w-5 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`h-px w-5 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </button>

      <ul
        id="main-menu"
        className={`${open ? "flex" : "hidden"} label border-ink/10 bg-wind absolute inset-x-0 top-full flex-col gap-5 border-b p-6 lg:static lg:flex lg:flex-row lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0`}
      >
        {menuKeys.map((key) => (
          <li key={key}>
            <Link
              href={href(lang, key)}
              aria-current={current(key)}
              className="underline-offset-8 hover:underline aria-[current=page]:underline"
            >
              {labels[key]}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={href(lang, "talk")}
        aria-current={current("talk")}
        className="btn px-3 py-2 text-[0.7rem] whitespace-nowrap sm:px-4 sm:text-[0.85rem]"
      >
        {labels.talk}
      </Link>
    </nav>
  );
}
