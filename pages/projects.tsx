import { Layout, Section } from 'components';
import { useTranslation } from 'next-i18next';

import nextI18NextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
};

const Projects = () => {
  const { t } = useTranslation('');
  return (
    <Layout
      headTitle="Bartek Projects"
      seoTitle="Frontend Développeur Bartek"
      seoDescription="" // todo:
      title={t('projects.Projects')}
      description={t('projects.ASelectionOfProjectsThatImNotTooAshamedOf')}
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
