import { Column, Layout } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from 'next-i18next.config';

// import { useTranslation } from 'next-i18next';
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
      title={`${t('Hey')}! 👋🏻 ${t('Iam')} Bartek`}
      description={t(
        'AFrontEndDeveloperThatllBuildYourNextDreamWebAndMobileApplication'
      )}
    >
      <Column className="w-full gap-y-20 max-md:gap-y-5">
        <Experiences />
        <FavorieteProject className="my-20 " />
        <Skills />
        {/* //todo: rajouter le polonais anglais et francais comme langue connu */}
        {/* <section className="relative w-full max-md:mt-10 ">
          <div className="max-w-2xl mx-auto max-md:px-5">
            <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
              {t('WhoIam')} ? 🧐
            </h2>
          </div>
        </section> */}
      </Column>
    </Layout>
  );
};

export default Home;
