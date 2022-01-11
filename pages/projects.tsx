import { Layout, Section } from "components";

const Home = () => {
  return (
    <Layout
      headTitle="Bartosz Home"
      seoTitle="Front-end Développeur Bartosz"
      seoDescription="" // todo:
      title="Projects"
      description="A Selection of projects that I'm not too ashamed of"
    >
      <Section>
        <p className="text-3xl text-center text-gray-900 dark:text-white">
          Coming soon
        </p>
      </Section>
    </Layout>
  );
};

export default Home;
