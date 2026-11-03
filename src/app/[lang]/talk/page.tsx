import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/talk">) {
  return pageMetadata(await resolveLocale(params), "talk");
}

export default async function TalkPage({ params }: PageProps<"/[lang]/talk">) {
  const { dict } = await resolveLang(params);
  const { talkPage } = dict;

  return (
    <>
      <PageHeader title={talkPage.title} lead={talkPage.lead} />
      <Section>
        <p className="text-sm opacity-70">{talkPage.note}</p>
      </Section>
    </>
  );
}
