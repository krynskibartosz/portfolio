import { Column, Layout } from "components";

import useTranslation from "next-translate/useTranslation";
import { Skills } from "domains/home/skills/Skills";
import { Experiences } from "domains/home/experiences/Experiences";
import { FavorieteProject } from "domains/home/projects/FavorieteProject";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <Layout
      headTitle="Bartosz Portfolio Home"
      seoTitle="Front-end Développeur"
      seoDescription="" // todo:
      title={`${t("Hey")}! 👋🏻 ${t("Iam")} Bartosz`}
      description={t(
        "AFrontEndDeveloperThatllBuildYourNextDreamWebAndMobileApplication"
      )}
    >
      <Column className="w-full gap-y-20 max-md:gap-y-5">
        <Experiences />
        <FavorieteProject className="my-20 " />
        <Skills />
        <section className="relative w-full max-md:mt-10 ">
          <div className="max-w-2xl mx-auto max-md:px-5">
            <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
              {t("WhoIam")} ? 🧐
            </h2>
            {/* // todo: rajouter le polonais anglais et francais comme langue connu */}
          </div>
        </section>
      </Column>
    </Layout>
  );
};

export default Home;
