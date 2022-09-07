import { Column, Layout } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from 'next-i18next.config';

import { Skills } from 'domains/home/skills/Skills';
import { Experiences } from 'domains/home/experiences/Experiences';
import { FavorieteProject } from 'domains/home/projects/FavorieteProject';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
};

const Home = () => {
  const { t } = useTranslation('');

  return (
    <Layout
      headTitle="Bartek Portfolio"
      seoTitle="Frontend Développeur"
      seoDescription="" // todo:
      title={`${t('home.Hey')}! 👋🏻 ${t('home.Iam')} Bartek`}
      description={t(
        'home.AFrontEndDeveloperThatllBuildYourNextDreamWebAndMobileApplication'
      )}
    >
      <Column className="w-full gap-y-20 max-md:gap-y-5">
        <Experiences />
        <FavorieteProject className="my-20 xl:mb-56" />
        <Skills />
      </Column>
    </Layout>
  );
};

export default Home;
