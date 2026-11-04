import Link from "next/link";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import {
  Formats,
  Method,
  OceanCulture,
  VerbEntry,
} from "@/components/OceanContent";
import { Photo } from "@/components/Photo";
import { RevealText } from "@/components/RevealText";
import { Section } from "@/components/Section";
import { Sketch } from "@/components/Sketch";
import { Tide } from "@/components/Tide";
import { resolveLang } from "@/i18n/page";
import { href } from "@/i18n/routes";

// Photo for each project category card.
const categoryPhotos = {
  see: { name: "jellyfish", alt: "jellyfish" },
  listen: { name: "whale-under-surface", alt: "whaleUnderSurface" },
  inhabit: { name: "diver-reef", alt: "diverReef" },
} as const;

// Home: an immersive dive, designed mobile first. The page goes down from
// the surface to the deep sea (the flagship project, listening in silence)
// and comes back up to the light for the invitation to talk.
// PROVISIONAL visual prototype.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang, dict } = await resolveLang(params);
  const { home } = dict;
  const alt = dict.media.photos;

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
          className="label mx-auto flex flex-col items-center gap-3 py-2 opacity-90"
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
        <RevealText
          text={home.intro.body}
          className="font-serif text-3xl leading-tight md:text-5xl"
        />
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <Link href={href(lang, "oceanar")} className="btn w-fit">
            {home.intro.cta} <span aria-hidden="true">→</span>
          </Link>
          <Photo
            name="surface-diver"
            alt={alt.surfaceDiver}
            sizes="(min-width: 768px) 55vw, 100vw"
            className="rise relative aspect-[4/5] rounded-2xl sm:aspect-[3/2]"
          />
        </div>
      </Section>

      {/* 3. The verb, with the kelp forest drawn beside it. */}
      <div className="relative overflow-x-clip">
        <VerbEntry dict={dict} tone="sand" eyebrow={home.depth.m3} />
        <Sketch
          name="kelp-forest"
          alt=""
          displayWidth={450}
          className="pointer-events-none absolute top-24 -right-16 w-56 opacity-60 sm:w-80 md:top-32 md:right-0 md:w-[28rem]"
        />
      </div>

      {/* 4. Ocean culture, with Cande's drawings. */}
      <OceanCulture dict={dict} tone="kelp" eyebrow={home.depth.m8} />

      {/* Image band: entering the kelp forest. */}
      <Photo
        name="kelp-forest-light"
        alt={alt.kelpForestLight}
        drift
        className="relative h-[70svh] md:h-[90svh]"
      />

      {/* 5. The method. */}
      <Method dict={dict} tone="olive" eyebrow={home.depth.m15} />

      {/* 6. Flagship project: the deepest point, where we listen. */}
      <section
        id="flagship"
        aria-labelledby="flagship-title"
        className="text-foam relative isolate flex min-h-svh flex-col justify-end"
      >
        <Photo
          name="southern-right-whale"
          alt={alt.southernRightWhale}
          drift
          className="absolute inset-0 -z-10"
        />
        <div className="from-ink via-ink/50 to-sea-grey/40 absolute inset-0 -z-10 bg-linear-to-t" />
        <div className="mx-auto w-full max-w-6xl space-y-6 px-5 pt-40 pb-20 md:pb-32">
          <p className="label flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {home.depth.m20} · {home.flagship.eyebrow}
          </p>
          <h2
            id="flagship-title"
            className="display rise text-5xl sm:text-7xl lg:text-8xl"
          >
            {home.flagship.title}
          </h2>
          <p className="rise max-w-xl text-lg leading-relaxed md:text-xl">
            {home.flagship.body}
          </p>
          <Link href={href(lang, "listen")} className="btn btn-light">
            <span aria-hidden="true">▶</span> {home.flagship.cta}
          </Link>
        </div>
      </section>

      {/* 7. Projects: three ways of bonding with the sea. On phones the
          cards slide sideways; on wider screens they sit in a row. */}
      <Section
        id="projects"
        tone="abyss"
        eyebrow={dict.categories.title}
        title={home.projects.title}
      >
        <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          {dict.categories.items.map((category) => {
            const photo =
              categoryPhotos[category.id as keyof typeof categoryPhotos];
            return (
              <li
                key={category.id}
                className="rise w-[78%] shrink-0 snap-start space-y-4 sm:w-auto"
              >
                <Link
                  href={href(lang, "projects")}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <Photo
                    name={photo.name}
                    alt={alt[photo.alt]}
                    sizes="(min-width: 640px) 33vw, 80vw"
                    className="ease-tide relative aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="from-ink/70 absolute inset-0 bg-linear-to-t to-transparent" />
                  <span className="display text-foam absolute inset-x-0 bottom-6 text-center text-4xl md:text-5xl">
                    {category.name}
                  </span>
                </Link>
                <p className="leading-relaxed opacity-90">{category.text}</p>
              </li>
            );
          })}
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

      {/* 9. The support network: a school of fish, a current of names. */}
      <section id="allies" aria-labelledby="allies-title">
        <div className="text-foam relative isolate flex min-h-[70svh] items-end">
          <Photo
            name="fish-school"
            alt={alt.fishSchool}
            drift
            className="absolute inset-0 -z-10"
          />
          <div className="from-ink/80 absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
          <div className="mx-auto w-full max-w-6xl space-y-5 px-5 pb-16">
            <h2 id="allies-title" className="display rise text-5xl sm:text-7xl">
              {home.allies.title}
            </h2>
            <p className="rise max-w-2xl text-xl">{home.allies.body}</p>
          </div>
        </div>
        <div className="from-sky to-sky/60 text-ink space-y-8 bg-linear-to-b py-16">
          <Tide items={home.allies.names} label={home.allies.title} />
          <div className="mx-auto max-w-6xl px-5">
            <Sketch
              name="fish-school"
              alt=""
              displayWidth={384}
              className="ml-auto w-64 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* 10. Closing: back at the surface, an invitation to talk. */}
      <section
        id="closing"
        aria-labelledby="closing-title"
        className="text-foam relative isolate"
      >
        <Photo
          name="wave"
          alt={alt.wave}
          drift
          className="absolute inset-0 -z-10"
        />
        <div className="bg-ink/45 absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[85svh] max-w-6xl flex-col items-start justify-center gap-8 px-5 py-28">
          <p className="label flex items-center gap-3">
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
          <Link href={href(lang, "talk")} className="btn btn-light">
            {home.closing.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
