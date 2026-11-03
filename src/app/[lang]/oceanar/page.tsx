import {
  Method,
  NotTaken,
  OceanCulture,
  VerbEntry,
} from "@/components/OceanContent";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/oceanar">) {
  return pageMetadata(await resolveLocale(params), "oceanar");
}

export default async function OceanarPage({
  params,
}: PageProps<"/[lang]/oceanar">) {
  const { dict } = await resolveLang(params);
  const { oceanarPage } = dict;

  return (
    <>
      <PageHeader title={oceanarPage.title} />
      <VerbEntry dict={dict} />
      <OceanCulture dict={dict} />
      <Method dict={dict} />
      <Section id="positioning" title={oceanarPage.positioning.title}>
        <p>{oceanarPage.positioning.body}</p>
      </Section>
      <NotTaken dict={dict} />
    </>
  );
}
