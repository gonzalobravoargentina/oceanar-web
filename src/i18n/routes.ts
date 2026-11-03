// Single source of truth for the site's bilingual URLs.
//
// Each page lives in a folder named after its internal key
// (`src/app/[lang]/<key>/`). The public URL uses the localized slug below;
// `next.config.ts` turns this map into rewrites (slug → folder) and
// redirects (folder name → slug), so every page has exactly one URL per
// language. Change a slug here and everything else follows.
//
// Only relative imports here: this file is also loaded by next.config.ts.
import { locales, type Locale } from "./config";

export const routes = {
  oceanar: { es: "oceanar", en: "oceanar" },
  projects: { es: "proyectos", en: "projects" },
  listen: { es: "escuchar", en: "listen" },
  work: { es: "trabajemos", en: "work-with-us" },
  team: { es: "quienes-somos", en: "who-we-are" },
  talk: { es: "conversemos", en: "lets-talk" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export const routeKeys = Object.keys(routes) as RouteKey[];

export const isRouteKey = (value: string | null): value is RouteKey =>
  value !== null && value in routes;

/** Public URL of a page, e.g. href("es", "projects") → "/es/proyectos". */
export function href(lang: Locale, key?: RouteKey, ...rest: string[]) {
  const parts = [lang, ...(key ? [routes[key][lang]] : []), ...rest];
  return `/${parts.join("/")}`;
}

/** Locale whose slugs include `slug`, when only one locale uses it. */
export function localeForSlug(slug: string): Locale | undefined {
  const matches = locales.filter((locale) =>
    routeKeys.some((key) => routes[key][locale] === slug),
  );
  return matches.length === 1 ? matches[0] : undefined;
}

type PathRule = { source: string; destination: string };

/** Rules for next.config.ts. Only slugs that differ from the folder name need them. */
export function routeRules() {
  const rewrites: PathRule[] = [];
  const redirects: (PathRule & { permanent: boolean })[] = [];

  for (const locale of locales) {
    for (const key of routeKeys) {
      const slug = routes[key][locale];
      if (slug === key) continue;
      rewrites.push({
        source: `/${locale}/${slug}/:path*`,
        destination: `/${locale}/${key}/:path*`,
      });
      // Temporary (307) while slugs may still change; make permanent at launch.
      redirects.push({
        source: `/${locale}/${key}/:path*`,
        destination: `/${locale}/${slug}/:path*`,
        permanent: false,
      });
    }
  }

  return { rewrites, redirects };
}
