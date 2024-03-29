import { Column, Layout } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from 'next-i18next.config';

import { Skills } from 'domains/home/skills/Skills';
import { Experiences } from 'domains/home/experiences/Experiences';
import { FavorieteProject } from 'domains/home/projects/FavorieteProject';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
};

const Home = () => {
  const { t } = useTranslation('');
  const { locale } = useRouter();

  // `${t('home.Hey')}! 👋🏻 ${t('home.Iam')} Bartek`
  return (
    <Layout
      headTitle="Bartek Portfolio"
      seoTitle="Frontend Développeur"
      seoDescription="" // todo:
      title={
        <h1 className="mb-2 text-gray-900 dark:text-white dark:!z-0 md:text-4xl xl:text-5xl font-bold text-2xl">
          {t('home.Hey')}! 👋🏻 {t('home.Iam')}{' '}
          <span className=" font-semibold text-center from-[#ffb6ff] to-[#b344ff]  bg-clip-text bg-gradient-to-tr text-transparent ">
            Bartek
          </span>{' '}
        </h1>
      }
      // description={t(
      //   'home.AFrontEndDeveloperThatllBuildYourNextDreamWebAndMobileApplication'
      // )}
      description={
        <p className="max-w-2xl  dark:!z-0 pb-3 md:text-lg xl:text-2xl text-gray-800 text-sm dark:text-gray-300">
          {locale !== 'pl' && t('home.One')}{' '}
          <span
            className={
              ' font-semibold text-center from-[#ffb6ff] to-[#b344ff]  bg-clip-text bg-gradient-to-tr text-transparent '
            }
          >
            {t('home.frontendDeveloper')}
          </span>{' '}
          {t('home.and')}{' '}
          <span className=" font-semibold text-center from-[#ffb6ff] to-[#b344ff]  bg-clip-text bg-gradient-to-tr text-transparent ">
            {t('home.designer')}
          </span>{' '}
          {t('home.whoWillBuildYourNextWebAndMobileApplication')}{' '}
          <span className=" font-semibold text-center from-[#ffb6ff] to-[#b344ff]  bg-clip-text bg-gradient-to-tr text-transparent ">
            {t('home.ofYourDreams')}
          </span>
        </p>
      }
    >
      <Column className="w-full gap-y-20 max-md:gap-y-5">
        <Experiences />
        <div className="bg-gradient-to-br max-md:hidden pt-12 pb-14 from-[#141414] to-[#100F15] w-full">
          <FavorieteProject className="my-20 xl:mb-56" />
        </div>
        <Skills />
      </Column>
    </Layout>
  );
};

export default Home;
