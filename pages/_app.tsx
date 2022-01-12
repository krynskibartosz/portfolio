import "../styles/globals.css";
import "../styles/theme-toggle.scss";
import "swiper/css/bundle";

import i18nConfig from "../i18n";
import appWithI18n from "next-translate/appWithI18n";
import { NavBar } from "components/layout/NavBar";
import { Row, Image, Blob } from "components";
import { useEffect } from "react";

function App({ Component, pageProps }: any) {
  i18nConfig.defaultLocale = "fr";

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const dark = localStorage.theme === "dark";

    if (
      dark ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "dark";
    }
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Component id="root" {...pageProps} />
      <Row
        positionX="right"
        className="absolute top-0 left-0 w-screen h-0 mt-10 max-lg:hidden "
      >
        <div className="relative h-[450px] w-[410px]">
          <Blob className="top-0 w-64 h-64 bg-pink-300 -left-4 dark:opacity-40" />
          <Blob className="top-0 w-64 h-64 bg-indigo-400 -right-4 animation-delay-2000 dark:opacity-40" />
          <Blob className="w-64 h-64 bg-[#38BCF8] dark:opacity-90 animation-delay-4000 -bottom-8 left-20" />
        </div>
      </Row>
      <div className="fixed left-10 top-10 max-md:hidden">
        <Row positionY="center">
          <Avatar size={12} src="/img/Peeegs.jpg" />
          <p className="ml-2 font-bold text-gray-900 dark:text-white ">
            Krynski Bartosz
          </p>
        </Row>
      </div>

      <NavBar />
    </div>
  );
}

const Avatar = ({ size, src }: { size: number; src: `/${string}` }) => {
  return (
    <div
      className={`grid  w-${size + 2} h-${
        size + 2
      } border-2 rounded-full border-gray-800 dark:border-yellow-400 place-items-center`}
    >
      <div
        className={`relative m-0.5 overflow-hidden rounded-full cursor-pointer w-${size} h-${size} `}
      >
        <Image layout="fill" alt="my head" objectFit="cover" src={src} />
      </div>
    </div>
  );
};

export default appWithI18n(App, {
  ...i18nConfig,
});
