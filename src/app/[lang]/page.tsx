import Link from "next/link";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { ImageSlot } from "@/components/ImageSlot";
import {
  Formats,
  Method,
  OceanCulture,
  VerbEntry,
} from "@/components/OceanContent";
import { RevealText } from "@/components/RevealText";
import { Section } from "@/components/Section";
import { Tide } from "@/components/Tide";
import { resolveLang } from "@/i18n/page";
import { href } from "@/i18n/routes";

const categoryTones = { see: "sea", listen: "night", inhabit: "kelp" } as const;

// Home: an immersive dive. The page goes down from the surface to the deep
// sea (the flagship project, listening in silence) and comes back up to the
// light for the invitation to talk. PROVISIONAL visual prototype.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang, dict } = await resolveLang(params);
  const { home } = dict;

  return (
    <>
      {/* 1. The question, over the Patagonian sea. */}
      <section className="text-foam relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-between px-5 py-8">
        <BackgroundVideo />
        <div className="label flex justify-between opacity-90">
          <span>{home.hero.place}</span>
          <span className="hidden sm:inline">{home.hero.water}</span>
        </div>
        <h1 className="display mx-auto max-w-6xl text-center text-[clamp(2.25rem,9.5vw,8.5rem)] text-balance">
          {home.hero.question}
        </h1>
        <a
          href="#intro"
          className="label mx-auto flex flex-col items-center gap-3 opacity-90"
        >
          {home.hero.scrollHint}
          <span
            aria-hidden="true"
            className="h-12 w-px bg-current motion-safe:animate-pulse"
          />
        </a>
      </section>

      {/* 2. The clear answer: words surface as you scroll. */}
      <Section id="intro" tone="wind" eyebrow={home.depth.surface}>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <RevealText
            text={home.intro.body}
            className="font-serif text-3xl leading-tight md:text-5xl"
          />
          <ImageSlot
            pending={home.photo.pending}
            description={home.photo.intro}
            tone="kelp"
            className="rise aspect-[4/5] rounded-2xl"
          />
        </div>
        <Link href={href(lang, "oceanar")} className="btn">
          {home.intro.cta} <span aria-hidden="true">→</span>
        </Link>
      </Section>

      {/* 3–5. The verb, ocean culture and the method: going down. */}
      <VerbEntry dict={dict} tone="sand" eyebrow={home.depth.m3} />
      <OceanCulture dict={dict} tone="kelp" eyebrow={home.depth.m8} />
      <Method dict={dict} tone="olive" eyebrow={home.depth.m15} />

      {/* 6. Flagship project: the deepest point, where we listen. */}
      <section
        id="flagship"
        aria-labelledby="flagship-title"
        className="from-sea-grey to-sea-deep text-foam bg-linear-to-b"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="relative overflow-hidden rounded-3xl">
            <ImageSlot
              pending={home.photo.pending}
              description={home.photo.flagship}
              tone="sea"
              captionTop
              className="aspect-[4/5] sm:aspect-[16/9]"
            />
            <div className="from-ink/85 via-ink/30 absolute inset-0 flex flex-col justify-end gap-6 bg-linear-to-t to-transparent p-6 md:p-12">
              <p className="label flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-current" />
                {home.depth.m20} · {home.flagship.eyebrow}
              </p>
              <h2
                id="flagship-title"
                className="display text-4xl sm:text-6xl lg:text-8xl"
              >
                {home.flagship.title}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed md:text-xl">
                {home.flagship.body}
              </p>
              <Link href={href(lang, "listen")} className="btn btn-light w-fit">
                <span aria-hidden="true">▶</span> {home.flagship.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Projects: three ways of bonding with the sea. */}
      <Section
        id="projects"
        tone="abyss"
        eyebrow={dict.categories.title}
        title={home.projects.title}
      >
        <ul className="grid gap-6 sm:grid-cols-3">
          {dict.categories.items.map((category) => (
            <li key={category.id} className="rise space-y-4">
              <Link
                href={href(lang, "projects")}
                className="group relative block overflow-hidden rounded-2xl"
              >
                <ImageSlot
                  pending={home.photo.pending}
                  description={
                    home.photo[category.id as keyof typeof categoryTones]
                  }
                  tone={
                    categoryTones[category.id as keyof typeof categoryTones]
                  }
                  className="ease-tide aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="display text-foam absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-4xl drop-shadow-lg md:text-5xl">
                  {category.name}
                </span>
              </Link>
              <p className="leading-relaxed opacity-90">{category.text}</p>
            </li>
          ))}
        </ul>
        <Link href={href(lang, "projects")} className="btn btn-light">
          {home.projects.cta} <span aria-hidden="true">→</span>
        </Link>
      </Section>

      {/* 8. Work with us: coming back up. */}
      <Formats dict={dict} tone="rising" />
      <div className="bg-sea-grey text-foam px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <Link href={href(lang, "work")} className="btn btn-light">
            {home.work.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* 9. The support network, flowing like a current. */}
      <section
        id="allies"
        aria-labelledby="allies-title"
        className="text-ink space-y-10 bg-[linear-gradient(to_bottom,var(--color-sea-grey),var(--color-sky)_30%)] py-24 md:py-36"
      >
        <div className="mx-auto max-w-6xl space-y-5 px-5">
          <h2 id="allies-title" className="display rise text-4xl sm:text-6xl">
            {home.allies.title}
          </h2>
          <p className="rise max-w-2xl text-xl">{home.allies.body}</p>
        </div>
        <Tide items={home.allies.names} label={home.allies.title} />
      </section>

      {/* 10. Closing: back at the surface, an invitation to talk. */}
      <section
        id="closing"
        aria-labelledby="closing-title"
        className="from-sky to-wind text-ink bg-linear-to-b"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-28 md:py-44">
          <p className="label flex items-center gap-3 opacity-80">
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {home.depth.up}
          </p>
          <h2
            id="closing-title"
            className="display rise text-5xl text-balance sm:text-7xl lg:text-8xl"
          >
            {home.closing.title}
          </h2>
          <p className="rise max-w-xl text-xl">{home.closing.body}</p>
          <Link href={href(lang, "talk")} className="btn">
            {home.closing.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
