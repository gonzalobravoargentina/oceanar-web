import type { ReactNode } from "react";

// Section backgrounds follow a dive: from the surface (wind, sand) through
// the kelp forest (amber, olive) down to the deep sea (grey, deep, ink), and
// back up to the light. Each tone starts where the previous one ends.
const tones = {
  wind: "bg-wind text-ink",
  sand: "bg-linear-to-b from-wind to-sand text-ink",
  kelp: "bg-linear-to-b from-sand to-[#dcc18a] text-ink",
  olive:
    "bg-[linear-gradient(to_bottom,#dcc18a,var(--color-kelp-olive)_22%,var(--color-sea-grey))] text-foam",
  deep: "bg-linear-to-b from-sea-grey to-sea-deep text-foam",
  abyss: "bg-linear-to-b from-sea-deep to-ink text-foam",
  rising: "bg-linear-to-b from-ink via-sea-deep to-sea-grey text-foam",
  sky: "bg-[linear-gradient(to_bottom,var(--color-sea-grey),var(--color-sky)_30%)] text-ink",
  surface: "bg-linear-to-b from-sky to-wind text-ink",
} as const;

export type Tone = keyof typeof tones;

type Props = {
  title?: string;
  /** Small label above the title, e.g. a depth marker. */
  eyebrow?: string;
  id?: string;
  tone?: Tone;
  children?: ReactNode;
};

export function Section({
  title,
  eyebrow,
  id,
  tone = "wind",
  children,
}: Props) {
  const headingId = id && title ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative ${tones[tone]}`}
    >
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-24 md:py-36">
        {(eyebrow || title) && (
          <header className="rise space-y-5">
            {eyebrow && (
              <p className="label flex items-center gap-3 opacity-80">
                <span aria-hidden="true" className="h-px w-10 bg-current" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="display text-4xl text-balance sm:text-6xl lg:text-7xl"
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
