import Head from "next/head";

import { NextSeo } from "next-seo";
import { Column } from "components";

export type LAYOUT = {
  children: JSX.Element | JSX.Element[];
  pageTitle: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
};

export const Layout = ({
  children,
  pageTitle,
  seoTitle,
  seoDescription,
  title,
  description,
}: LAYOUT): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <NextSeo title={seoTitle} description={seoDescription} />
        <link rel="shortcut icon" href="/vercel.svg" />
      </Head>

      <div className="relative w-screen min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full max-w-2xl mx-auto pb-28 pt-28 max-md:pt-10 max-md:mx-0 ">
          <Column className="max-md:px-5">
            <h1 className="mb-2 text-4xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="pb-5 text-lg text-gray-800 dark:text-gray-400">
              {description}
            </p>
            <div className="w-full h-px bg-gray-100 "></div>
          </Column>
          <div className="mt-5 max-md:pt-10">{children}</div>
        </section>
      </div>
    </>
  );
};
