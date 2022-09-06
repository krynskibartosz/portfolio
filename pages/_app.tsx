import '../styles/globals.css';
import '../styles/theme-toggle.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/bundle';

// import i18nConfig from '../i18n';
// import appWithI18n from 'next-translate/appWithI18n';
import { NavBar } from 'components/layout/NavBar';
import { Row, Image, Blob } from 'components';
import { NextWebVitalsMetric } from 'next/dist/shared/lib/utils';

import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

function App({ Component, pageProps }: any) {
  // i18nConfig.defaultLocale = 'fr';
  // const router = useRouter();
  // useEffect(() => {
  //   if (router.locale !== 'fr') {
  //     router.push(router.asPath, undefined, {
  //       locale: 'en',
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   const dark = localStorage.theme === 'dark';

  //   if (
  //     dark ||
  //     (!('theme' in localStorage) &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   ) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'light';
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = 'dark';
  //   }
  // }, []);

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden ">
        <Component id="root" {...pageProps} />
        <div className="absolute top-0 left-0 w-screen h-0 mt-10 max-lg:hidden ">
          <div className="w-full mx-auto max-w-7xl">
            <Row positionX="right" className="w-full">
              <div className="relative h-[450px] w-[410px]">
                <Blob className="top-0 z-20 w-64 h-64 bg-[#9abe36] -left-12 dark:opacity-80" />
                <Blob className="top-0 z-10 w-64 h-64 bg-gradient-to-br from-[#448FFF] to-[#F81444]  -right-4 animation-delay-2000 dark:opacity-60" />
                <Blob className="w-64 h-64 z-0 bg-[#5ABEC9] dark:opacity-90 animation-delay-4000 -bottom-8 left-20" />
              </div>
            </Row>
          </div>
        </div>
        <div className="fixed left-10 top-10 max-md:hidden z-50">
          <Row positionY="center">
            <Avatar size={12} src="/img/bartosz-transparent.png" />
            <p
              className={`ml-2 text-lg text-transparent bg-clip-text font-bold text-color-animation  `}
            >
              Krynski Bartek
            </p>
          </Row>
        </div>

        <NavBar />
      </div>
    </ThemeProvider>
  );
}

const Avatar = ({
  bg,
  src,
  border,
}: {
  size: string;
  src: `/${string}`;
  border: string;
}) => {
  return (
    <div
      className={`grid border-color-animation   w-[60px] h-[60px] rounded-full   place-items-center border  `}
    >
      <div
        className={`relative transition-all duration-1000 ease-in-out m-0.5 background-color-animation overflow-hidden rounded-full cursor-pointer w-12 h-12 `}
      >
        <Image
          className="translate-y-1.5"
          layout="fill"
          alt="my head"
          objectFit="contain"
          src={src}
        />
      </div>
    </div>
  );
};

// export default appWithI18n(App, {
//   ...i18nConfig,
// });
export default appWithTranslation(App, nextI18NextConfig);

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
