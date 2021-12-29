import Head from "next/head";

import { NextSeo } from "next-seo";
import { Nav } from "./Nav";

export type LAYOUT = {
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
}: LAYOUT): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <NextSeo title={seoTitle} description={seoDescription} />
        <link rel="shortcut icon" href="/vercel.svg" />
      </Head>
      <div id="portal" className="relative" />

      <div className="relative w-screen h-screen bg-white dark:bg-gray-900">
        <section className="h-full max-w-5xl mx-auto max-md:mx-0 ">
          {children}
        </section>
        <Nav />
      </div>
    </>
  );
};
