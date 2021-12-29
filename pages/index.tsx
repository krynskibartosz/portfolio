import { Layout } from "components";
import useTranslation from "next-translate/useTranslation";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <Layout
      pageTitle="Bartosz Home"
      seoTitle="Front-end Développeur"
      seoDescription="" // todo:
    >
      <section className="h-full max-w-5xl mx-auto ">
        <h1 className="h-20 text-gray-900 dark:text-white">{t("Home")}</h1>
      </section>
    </Layout>
  );
};

export default Home;
