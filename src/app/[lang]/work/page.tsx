import Link from "next/link";
import { Formats, NotTaken } from "@/components/OceanContent";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";
import { href } from "@/i18n/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/work">) {
  return pageMetadata(await resolveLocale(params), "work");
}

export default async function WorkPage({ params }: PageProps<"/[lang]/work">) {
  const { lang, dict } = await resolveLang(params);
  const { workPage } = dict;

  return (
    <>
      <PageHeader title={workPage.title} lead={workPage.lead} />
      <Formats dict={dict} title={dict.nav.work} />
      <NotTaken dict={dict} />
      <Section>
        <Link
          href={href(lang, "talk")}
          className="inline-block rounded-full border border-current px-5 py-2 font-semibold"
        >
          {workPage.cta}
        </Link>
      </Section>
    </>
  );
}
