import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { href, routeKeys } from "@/i18n/routes";

type Props = { lang: Locale; dict: Dictionary };

export function SiteFooter({ lang, dict }: Props) {
  return (
    <footer className="mt-auto border-t border-current/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm md:flex-row md:justify-between">
        <p>
          {dict.meta.siteName} · {dict.footer.place}
        </p>
        <nav aria-label={dict.footer.navLabel}>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {routeKeys.map((key) => (
              <li key={key}>
                <Link href={href(lang, key)} className="hover:underline">
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
