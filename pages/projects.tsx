import { Layout } from "components";

const Home = () => {
  return (
    <Layout
      pageTitle="Bartosz Home"
      seoTitle="Front-end Développeur Bartosz"
      seoDescription="" // todo:
      title="Projects"
      description="A Selection of projects that I'm not too ashamed of"
    >
      <p className="h-20 text-gray-900 dark:text-white">Projects</p>
    </Layout>
  );
};

export default Home;
