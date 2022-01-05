import { Column, Layout } from "components";

import { FavorieteProject } from "domains/home/FavorieteProject";
import SwiperCore, { EffectCards } from "swiper";
import useTranslation from "next-translate/useTranslation";
import { Experiences } from "domains/home/experiences/Experiences";
import { Skills } from "domains/home/skills/Skills";

SwiperCore.use([EffectCards]);

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <Layout
      headTitle="Bartosz Portfolio Home"
      seoTitle="Front-end Développeur"
      seoDescription="" // todo:
      // title="Hey! 👋 I'm Bartosz"
      title={`${t("Hey")}! 👋 ${t("Iam")} Bartosz`}
      description={t(
        "AFrontEndDeveloperThatllBuildYourNextDreamWebAndMobileApplication"
      )}
    >
      <Column className="w-full gap-y-20">
        <Experiences />
        <FavorieteProject className="my-20" />
        <Skills />
        <section className="w-full ">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
            {t("AboutMe")}
          </h2>
        </section>
      </Column>
    </Layout>
  );
};

export default Home;
