import Head from "next/head";

import { NextSeo } from "next-seo";

export type LayoutType = {
  children: JSX.Element | JSX.Element[];
  pageTitle: string;
  seoTitle: string;
  seoDescription: string;
};

export const Layout = ({
  children,
  pageTitle,
  seoTitle,
  seoDescription,
}: LayoutType): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <NextSeo title={seoTitle} description={seoDescription} />
        <link rel="shortcut icon" href="/vercel.svg" />
      </Head>
      <div id="portal" className="relative" />

      <div className={``}>{children}</div>
    </>
  );
};
