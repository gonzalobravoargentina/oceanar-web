import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { href, routeKeys } from "@/i18n/routes";

type Props = { lang: Locale; dict: Dictionary };

export function SiteFooter({ lang, dict }: Props) {
  return (
    <footer className="bg-ink text-foam">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="display text-4xl md:text-6xl">{dict.meta.siteName}</p>
          <p className="label opacity-80">{dict.footer.place}</p>
        </div>
        <nav aria-label={dict.footer.navLabel}>
          <ul className="label grid grid-cols-2 gap-x-8 gap-y-3">
            {routeKeys.map((key) => (
              <li key={key}>
                <Link href={href(lang, key)} className="hover:text-kelp-amber">
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
