import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/team">) {
  return pageMetadata(await resolveLocale(params), "team");
}

export default async function TeamPage({ params }: PageProps<"/[lang]/team">) {
  const { dict } = await resolveLang(params);
  const { teamPage } = dict;

  return (
    <>
      <PageHeader title={teamPage.title} lead={teamPage.lead} />
      <Section>
        <ul className="grid gap-6 sm:grid-cols-2">
          {teamPage.people.map((person) => (
            <li key={person.name}>
              <h2 className="text-xl font-semibold">{person.name}</h2>
              <p>{person.role}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="network" title={teamPage.network.title}>
        <p>{teamPage.network.body}</p>
      </Section>
    </>
  );
}
