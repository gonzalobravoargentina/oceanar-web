import { Categories } from "@/components/OceanContent";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLang, resolveLocale } from "@/i18n/page";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects">) {
  return pageMetadata(await resolveLocale(params), "projects");
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[lang]/projects">) {
  const { dict } = await resolveLang(params);
  const { projectsPage } = dict;

  return (
    <>
      <PageHeader title={projectsPage.title} lead={projectsPage.lead} />
      <Categories dict={dict} />
      <Section id="index" title={projectsPage.listTitle}>
        <p className="text-sm opacity-70">{projectsPage.filtersNote}</p>
        <ul className="list-disc space-y-1 pl-6">
          {projectsPage.list.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
