import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";
import "../globals.css";

// PROVISIONAL typography (not the final identity): a wide grotesque for
// display and a soft serif for reading, after the references Cande chose.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return {
    ...(await pageMetadata(lang)),
    title: {
      default: dict.meta.siteName,
      template: `%s · ${dict.meta.siteName}`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang, dict } = await resolveLang(params);

  return (
    <html
      lang={lang}
      className={`${archivo.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="label focus:bg-wind sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-70 focus:p-3"
        >
          {dict.nav.skipToContent}
        </a>
        <SiteHeader lang={lang} dict={dict} />
        <main id="content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter lang={lang} dict={dict} />
      </body>
    </html>
  );
}
