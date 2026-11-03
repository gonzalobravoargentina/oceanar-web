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
    <nav aria-label={labels.label} className="flex items-center gap-4">
      <button
        type="button"
        className="rounded border border-current px-3 py-1 text-sm md:hidden"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpenOn(open ? false : segment)}
      >
        {open ? labels.closeMenu : labels.openMenu}
      </button>

      <ul
        id="main-menu"
        className={`${open ? "flex" : "hidden"} bg-background absolute inset-x-0 top-full flex-col gap-3 border-b border-current/20 p-4 md:static md:flex md:flex-row md:gap-5 md:border-0 md:p-0`}
      >
        {menuKeys.map((key) => (
          <li key={key}>
            <Link
              href={href(lang, key)}
              aria-current={current(key)}
              className="hover:underline aria-[current=page]:font-semibold aria-[current=page]:underline"
            >
              {labels[key]}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={href(lang, "talk")}
        aria-current={current("talk")}
        className="rounded-full border border-current px-4 py-1 font-semibold whitespace-nowrap"
      >
        {labels.talk}
      </Link>
    </nav>
  );
}
