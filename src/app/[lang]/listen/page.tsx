import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/listen">) {
  return pageMetadata(await resolveLocale(params), "listen");
}

export default async function ListenPage({
  params,
}: PageProps<"/[lang]/listen">) {
  const { dict } = await resolveLang(params);
  const { listenPage } = dict;

  return (
    <>
      <PageHeader title={listenPage.title} lead={listenPage.lead} />
      <Section>
        <p className="text-sm opacity-70">{listenPage.note}</p>
      </Section>
    </>
  );
}
