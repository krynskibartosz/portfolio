import { Layout, Section } from "components";
import useTranslation from "next-translate/useTranslation";

// todo: start by Startup World
const Projects = () => {
  const { t } = useTranslation("projects");
  return (
    <Layout
      headTitle="Bartosz Projects"
      seoTitle="Front-end Développeur Bartosz"
      seoDescription="" // todo:
      title={t("Projects")}
      description={t("ASelectionOfProjectsThatImNotTooAshamedOf")}
    >
      <Section>
        <p className="text-3xl text-center text-gray-900 dark:text-white">
          Coming soon
        </p>
      </Section>
    </Layout>
  );
};

export default Projects;
