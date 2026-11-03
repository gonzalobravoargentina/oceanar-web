import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config";
import { localeForSlug } from "@/i18n/routes";

// Picks the best supported locale from the Accept-Language header.
function getLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const requested = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return {
        language: tag.toLowerCase().split("-")[0],
        q: q ? Number(q) : 1,
      };
    })
    .filter(({ language }) => language)
    .sort((a, b) => b.q - a.q);

  return (
    (requested.find(({ language }) => hasLocale(language))
      ?.language as Locale) ?? defaultLocale
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  // A slug that belongs to one language decides it (/proyectos → /es/proyectos).
  const firstSegment = pathname.split("/")[1] ?? "";
  const locale = localeForSlug(firstSegment) ?? getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals, API routes and any path with a file extension (favicon, images, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
