import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

// One entry per language, each pointing to its translations so search engines
// show the right one to each visitor.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    alternates: { languages },
  }));
}
