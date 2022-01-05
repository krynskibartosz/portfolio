import { Column, Layout } from "components";

import { Experiences } from "domains/home/Experiences";
import { FavorieteProject } from "domains/home/FavorieteProject";
import { Skills } from "domains/home/Skills";
import SwiperCore, { EffectCards } from "swiper";
import useTranslation from "next-translate/useTranslation";

SwiperCore.use([EffectCards]);

// todo: digitalu logo on mobile
const Home = () => {
  const { t } = useTranslation("home");
  return (
    <Layout
      pageTitle="Bartosz Portfolio Home"
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
          <Column className="gap-y-5">
            <div className="w-full "></div>
          </Column>
        </section>
      </Column>
    </Layout>
  );
};

export default Home;
