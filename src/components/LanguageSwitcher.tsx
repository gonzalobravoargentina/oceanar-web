"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { href, isRouteKey } from "@/i18n/routes";

type Props = {
  lang: Locale;
  labels: Record<Locale, string> & { label: string };
};

// Links to the same page in each language, using the localized slugs.
export function LanguageSwitcher({ lang, labels }: Props) {
  // Internal segments below [lang], e.g. ["projects"].
  const [segment = null, ...rest] = useSelectedLayoutSegments();
  const target = (locale: Locale) =>
    isRouteKey(segment) ? href(locale, segment, ...rest) : href(locale);

  return (
    <nav aria-label={labels.label}>
      <ul className="flex gap-3 text-sm">
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={target(locale)}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === lang ? "true" : undefined}
              className="uppercase hover:underline aria-[current=true]:font-semibold aria-[current=true]:underline"
            >
              <span aria-hidden="true">{locale}</span>
              <span className="sr-only">{labels[locale]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
