import Link from "next/link";
import {
  Categories,
  Formats,
  Method,
  OceanCulture,
  VerbEntry,
} from "@/components/OceanContent";
import { Section } from "@/components/Section";
import { resolveLang } from "@/i18n/page";
import { href } from "@/i18n/routes";

// Home: the immersive scroll sequence. Stage 1 only lays out its ten
// steps in order; motion and visuals arrive in stage 2.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang, dict } = await resolveLang(params);
  const { home } = dict;

  return (
    <>
      {/* 1. Hero: the question, over the Patagonian sea (stage 2). */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          {home.hero.question}
        </h1>
        <p className="text-sm opacity-70">{home.hero.scrollHint}</p>
      </section>

      {/* 2. The clear answer. */}
      <Section id="intro">
        <p className="text-xl">{home.intro.body}</p>
        <Link href={href(lang, "oceanar")} className="underline">
          {home.intro.cta}
        </Link>
      </Section>

      {/* 3–5. The verb, ocean culture and the method. */}
      <VerbEntry dict={dict} />
      <OceanCulture dict={dict} />
      <Method dict={dict} />

      {/* 6. Flagship project. */}
      <Section
        id="flagship"
        eyebrow={home.flagship.eyebrow}
        title={home.flagship.title}
      >
        <p>{home.flagship.body}</p>
        <Link href={href(lang, "listen")} className="underline">
          {home.flagship.cta}
        </Link>
      </Section>

      {/* 7. A selection of projects. */}
      <Section id="projects" title={home.projects.title}>
        <p>{home.projects.body}</p>
        <Link href={href(lang, "projects")} className="underline">
          {home.projects.cta}
        </Link>
      </Section>
      <Categories dict={dict} />

      {/* 8. Work with us: the five formats. */}
      <Formats dict={dict} />
      <div className="mx-auto w-full max-w-3xl px-4">
        <Link href={href(lang, "work")} className="underline">
          {home.work.cta}
        </Link>
      </div>

      {/* 9. Network of allies. */}
      <Section id="allies" title={home.allies.title}>
        <p>{home.allies.body}</p>
      </Section>

      {/* 10. Closing: book a conversation. */}
      <Section id="closing" title={home.closing.title}>
        <p>{home.closing.body}</p>
        <Link
          href={href(lang, "talk")}
          className="inline-block rounded-full border border-current px-5 py-2 font-semibold"
        >
          {home.closing.cta}
        </Link>
      </Section>
    </>
  );
}
