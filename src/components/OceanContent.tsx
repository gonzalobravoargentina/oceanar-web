// Content blocks shared by the home page and the inner pages.
import type { Dictionary } from "@/i18n/dictionaries";
import { Drawing } from "./Drawing";
import { Section } from "./Section";

type Props = { dict: Dictionary };

export function VerbEntry({ dict }: Props) {
  const { verb } = dict;
  return (
    <Section id="verb" title={verb.title}>
      {/* Dictionary entry: word, grammar, etymology and numbered senses. */}
      <dl className="space-y-3">
        <dt>
          <dfn className="text-3xl font-semibold not-italic">{verb.word}</dfn>{" "}
          <span className="italic opacity-70">{verb.grammar}</span>
        </dt>
        <dd className="text-sm opacity-80">{verb.etymology}</dd>
        <dd>
          <ol className="list-decimal space-y-1 pl-6">
            {verb.senses.map((sense) => (
              <li key={sense}>{sense}</li>
            ))}
          </ol>
        </dd>
      </dl>
    </Section>
  );
}

export function OceanCulture({ dict }: Props) {
  const { culture } = dict;
  return (
    <Section id="culture" title={culture.title}>
      <p>{culture.body}</p>
      <p>{culture.conditionsLead}</p>
      <ol className="grid gap-6 sm:grid-cols-3">
        {culture.conditions.map((condition) => (
          <li key={condition.drawing} className="space-y-2">
            <Drawing
              name={condition.drawing}
              label={
                dict.drawing[condition.drawing as keyof Dictionary["drawing"]]
              }
              className="size-16"
            />
            <p>{condition.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Method({ dict }: Props) {
  const { method } = dict;
  return (
    <Section id="method" title={method.title}>
      <p className="text-lg">{method.lead}</p>
      <dl className="grid gap-6 sm:grid-cols-2">
        {method.behaviors.map((behavior) => (
          <div key={behavior.name}>
            <dt className="font-semibold">{behavior.name}</dt>
            <dd>{behavior.text}</dd>
          </div>
        ))}
      </dl>
      <p className="text-sm opacity-70">{method.note}</p>
    </Section>
  );
}

export function Formats({ dict, title }: Props & { title?: string }) {
  const { formats } = dict;
  return (
    <Section id="formats" title={title ?? formats.title}>
      <ol className="list-decimal space-y-3 pl-6">
        {formats.items.map((format) => (
          <li key={format.name}>
            <strong>{format.name}.</strong> {format.text}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function NotTaken({ dict }: Props) {
  const { notTaken } = dict;
  return (
    <Section id="not-taken" title={notTaken.title}>
      <p>{notTaken.lead}</p>
      <ul className="list-disc space-y-1 pl-6">
        {notTaken.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

export function Categories({ dict }: Props) {
  const { categories } = dict;
  return (
    <Section id="categories" title={categories.title}>
      <dl className="grid gap-6 sm:grid-cols-3">
        {categories.items.map((category) => (
          <div key={category.id}>
            <dt className="font-semibold tracking-widest">{category.name}</dt>
            <dd>{category.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
