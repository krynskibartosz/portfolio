import { Layout } from "components";
import { useState } from "react";

const Home = () => {
  return (
    <Layout
      pageTitle="Bartosz Home"
      seoTitle="Front-end Développeur Bartosz"
      seoDescription="" // todo:
      title="Contact"
      description="You want to trust me with a mission or recruit me, everything happens here!"
    >
      <p className="h-20 text-gray-900 dark:text-white">Contact</p>
    </Layout>
  );
};

export default Home;
