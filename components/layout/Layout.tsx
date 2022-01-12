import Head from "next/head";

import { NextSeo } from "next-seo";
import { Column } from "components";

export type LAYOUT = {
  children: JSX.Element | JSX.Element[];
  headTitle: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
};

export const Layout = ({
  children,
  headTitle,
  seoTitle,
  seoDescription,
  title,
  description,
}: LAYOUT): JSX.Element => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <NextSeo title={seoTitle} description={seoDescription} />
        <link rel="shortcut icon" href="/vercel.svg" />
      </Head>

      <div className="relative w-screen min-h-screen bg-white dark:bg-gray-900">
        <div className="h-full  pb-28 pt-28 max-md:pt-10 max-md:mx-0">
          <Column as="section" className="max-w-2xl mx-auto max-md:px-5">
            <h1 className="mb-2 text-4xl font-bold text-gray-900 max-md:text-2xl dark:text-white">
              {title}
            </h1>
            <p className="max-w-xl pb-5 text-lg text-gray-800 max-md:text-sm dark:text-gray-400">
              {description}
            </p>
            <div className="w-full h-px bg-gray-100 "></div>
          </Column>
          <div className="pt-10 max-md:pt-7 ">{children}</div>
        </div>
      </div>
    </>
  );
};
