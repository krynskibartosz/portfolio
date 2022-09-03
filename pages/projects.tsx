import { Layout, Section } from 'components';
import { useTranslation } from 'next-i18next';

const Projects = () => {
  const { t } = useTranslation('');
  return (
    <Layout
      headTitle="Bartek Projects"
      seoTitle="Frontend Développeur Bartek"
      seoDescription="" // todo:
      title={t('Projects')}
      description={t('ASelectionOfProjectsThatImNotTooAshamedOf')}
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
