import { notFound } from "next/navigation";
import Link from "next/link";
import { ActionText } from "@/components/ActionText";
import { Hero } from "@/components/Hero";
import { HeadlinePanel } from "@/components/HeadlinePanel";
import { VideoDebug } from "@/components/VideoDebug";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";
import { SITE_URL, SOCIAL_URLS } from "@/lib/site";

// Opens a WhatsApp chat with Oceanar (number in international format).
const WHATSAPP_URL = "https://wa.me/5492804557665";

// One clip per headline, in the same order as `headlines` in the dictionaries.
const headlineClips = [
  "experiencias-inmersivas",
  "ecologia-sonora",
  "tecnologia-social",
  "historias-de-mar",
];

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  // Tells search engines who Oceanar is.
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oceanar",
    url: SITE_URL,
    description: dict.meta.description,
    sameAs: SOCIAL_URLS,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Madryn",
      addressRegion: "Chubut",
      addressCountry: "AR",
    },
  };

  return (
    <main className="flex-1">
      <VideoDebug />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between gap-4 px-6 py-5 text-sm">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.nav.contactLabel}
          className="font-heading tracking-[0.2em] uppercase opacity-80 transition-opacity hover:opacity-100"
        >
          {dict.nav.contact}
        </a>
        <div
          role="group"
          aria-label={dict.nav.languageLabel}
          className="flex gap-4"
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}`}
              hrefLang={locale}
              aria-current={locale === lang ? "page" : undefined}
              className={
                locale === lang
                  ? "underline underline-offset-4"
                  : "opacity-70 transition-opacity hover:opacity-100"
              }
            >
              {dict.nav[locale]}
            </Link>
          ))}
        </div>
      </nav>

      <Hero
        wordmark={dict.hero.wordmark}
        partOfSpeech={dict.hero.partOfSpeech}
        tagline={dict.hero.tagline}
        conjugations={dict.hero.conjugations}
        scrollLabel={dict.hero.scrollLabel}
      />

      <ActionText text={dict.action} parts={dict.actionParts} />

      {dict.headlines.map((headline, i) => (
        <HeadlinePanel
          key={headline}
          index={i}
          headline={headline}
          clip={headlineClips[i]}
          openLabel={dict.panel.open}
          closeLabel={dict.panel.close}
          section={dict.sections[i]}
        />
      ))}
    </main>
  );
}
