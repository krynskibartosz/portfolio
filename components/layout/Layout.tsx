import Head from 'next/head';

import { NextSeo } from 'next-seo';
import { Column } from 'components';

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
      {/* #111111 */}
      <div className="relative w-screen min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#111111] dark:to-[#010101] ">
        <div className="h-full  pb-28 pt-28 max-md:pt-10 max-md:mx-0">
          <Column as="section" className="max-w-3xl mx-auto max-md:px-5">
            <h1
              className="mb-2  dark:!z-0 md:text-4xl xl:text-5xl font-bold text-gray-900 text-2xl dark:text-white"
              style={{ zIndex: 9999 }}
            >
              {title}
            </h1>
            <p
              className="max-w-2xl  dark:!z-0 pb-3 md:text-lg xl:text-2xl text-gray-800 text-sm dark:text-gray-300"
              style={{ zIndex: 9999 }}
            >
              {description}
            </p>
            <div className="w-full h-px bg-gray-300 dark:bg-gray-600 "></div>
          </Column>
          <div className="pt-10 xl:pt-12 max-md:pt-7  ">{children}</div>
        </div>
      </div>
    </>
  );
};
