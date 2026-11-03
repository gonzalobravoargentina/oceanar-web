import type { Metadata } from "next";
import { locales, type Locale } from "./config";
import { getDictionary } from "./dictionaries";
import { href, type RouteKey } from "./routes";

/** Title, description and language alternates for one page. */
export async function pageMetadata(
  lang: Locale,
  key?: RouteKey,
): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const page = key ? dict.meta.pages[key] : undefined;

  return {
    ...(page && { title: page.title }),
    description: page?.description ?? dict.meta.description,
    alternates: {
      canonical: href(lang, key),
      languages: Object.fromEntries(locales.map((l) => [l, href(l, key)])),
    },
  };
}
