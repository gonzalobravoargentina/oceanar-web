// Content blocks shared by the home page and the inner pages.
import type { Dictionary } from "@/i18n/dictionaries";
import { isSketchName, Sketch } from "./Sketch";
import { Section, type Tone } from "./Section";

type Props = { dict: Dictionary; tone?: Tone; eyebrow?: string };

const pad = (n: number) => String(n).padStart(2, "0");

export function VerbEntry({ dict, tone = "sand", eyebrow }: Props) {
  const { verb } = dict;
  return (
    <Section id="verb" title={verb.title} tone={tone} eyebrow={eyebrow}>
      {/* Dictionary entry: word, grammar, etymology and numbered senses. */}
      <dl className="rise grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <dt className="space-y-4">
          <dfn className="block font-serif text-7xl leading-none italic sm:text-8xl lg:text-9xl">
            {verb.word}
          </dfn>
          <span className="label opacity-70">{verb.grammar}</span>
        </dt>
        <dd className="space-y-8">
          <p className="border-l border-current/30 pl-4 text-sm leading-relaxed opacity-80">
            {verb.etymology}
          </p>
          <ol className="space-y-5">
            {verb.senses.map((sense, index) => (
              <li
                key={sense}
                className="flex gap-4 text-xl leading-snug md:text-2xl"
              >
                <span className="label pt-2 opacity-60">{index + 1}.</span>
                <span>{sense}</span>
              </li>
            ))}
          </ol>
        </dd>
      </dl>
    </Section>
  );
}

export function OceanCulture({ dict, tone = "kelp", eyebrow }: Props) {
  const { culture } = dict;
  return (
    <Section id="culture" title={culture.title} tone={tone} eyebrow={eyebrow}>
      <p className="rise max-w-3xl text-2xl leading-snug md:text-3xl">
        {culture.body}
      </p>
      <p className="label rise opacity-80">{culture.conditionsLead}</p>
      <ol className="grid gap-12 sm:grid-cols-3">
        {culture.conditions.map((condition) => (
          <li key={condition.drawing} className="rise space-y-5">
            {isSketchName(condition.drawing) && (
              <Sketch
                name={condition.drawing}
                alt={
                  dict.drawing[condition.drawing as keyof Dictionary["drawing"]]
                }
                displayWidth={240}
                className="h-28 w-auto max-w-full md:h-36"
              />
            )}
            <p className="text-xl leading-snug">{condition.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Method({ dict, tone = "olive", eyebrow }: Props) {
  const { method } = dict;
  return (
    <Section id="method" title={method.title} tone={tone} eyebrow={eyebrow}>
      <p className="rise max-w-4xl font-serif text-3xl leading-tight italic md:text-5xl">
        {method.lead}
      </p>
      <dl className="grid gap-x-10 gap-y-12 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {method.behaviors.map((behavior, index) => (
          <div
            key={behavior.name}
            className="rise space-y-3 border-t border-current/30 pt-5"
          >
            <span className="font-serif text-5xl leading-none opacity-60">
              {pad(index + 1)}
            </span>
            <dt className="display text-xl">{behavior.name}</dt>
            <dd className="leading-relaxed opacity-90">{behavior.text}</dd>
          </div>
        ))}
      </dl>
      <p className="label opacity-70">{method.note}</p>
    </Section>
  );
}

export function Formats({
  dict,
  title,
  tone = "rising",
  eyebrow,
}: Props & { title?: string }) {
  const { formats } = dict;
  return (
    <Section
      id="formats"
      title={title ?? formats.title}
      tone={tone}
      eyebrow={eyebrow}
    >
      <ol className="divide-y divide-current/20 border-y border-current/20">
        {formats.items.map((format, index) => (
          <li
            key={format.name}
            className="rise grid gap-2 py-6 md:grid-cols-[6rem_1fr_1fr] md:items-baseline md:gap-8"
          >
            <span className="font-serif text-3xl opacity-60">
              {pad(index + 1)}
            </span>
            <strong className="display text-2xl md:text-3xl">
              {format.name}
            </strong>
            <span className="leading-relaxed opacity-90">{format.text}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function NotTaken({ dict, tone = "wind", eyebrow }: Props) {
  const { notTaken } = dict;
  return (
    <Section
      id="not-taken"
      title={notTaken.title}
      tone={tone}
      eyebrow={eyebrow}
    >
      <p className="rise max-w-3xl text-2xl leading-snug">{notTaken.lead}</p>
      <ul className="grid gap-6 sm:grid-cols-2">
        {notTaken.items.map((item) => (
          <li
            key={item}
            className="rise border-t border-current/30 pt-4 text-xl leading-snug"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Categories({ dict, tone = "sand", eyebrow }: Props) {
  const { categories } = dict;
  return (
    <Section
      id="categories"
      title={categories.title}
      tone={tone}
      eyebrow={eyebrow}
    >
      <dl className="grid gap-10 sm:grid-cols-3">
        {categories.items.map((category) => (
          <div
            key={category.id}
            className="rise space-y-3 border-t border-current/30 pt-5"
          >
            <dt className="display text-3xl">{category.name}</dt>
            <dd className="leading-relaxed">{category.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
