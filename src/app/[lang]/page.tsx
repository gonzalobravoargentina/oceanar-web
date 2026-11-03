import { notFound } from "next/navigation";
import Link from "next/link";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="relative isolate flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center text-white">
      <BackgroundVideo />
      <span className="rounded-full border border-current px-4 py-1 text-sm tracking-widest uppercase opacity-70">
        {dict.construction.badge}
      </span>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {dict.construction.title}
      </h1>
      <p className="max-w-xl text-lg opacity-80">{dict.construction.body}</p>
      <p className="text-sm opacity-60">{dict.construction.footer}</p>

      <nav
        aria-label={dict.languageSwitcher.label}
        className="mt-6 flex gap-4 text-sm"
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            aria-current={locale === lang ? "page" : undefined}
            className={
              locale === lang
                ? "font-semibold underline underline-offset-4"
                : "opacity-70 hover:opacity-100"
            }
          >
            {dict.languageSwitcher[locale]}
          </Link>
        ))}
      </nav>
    </main>
  );
}
