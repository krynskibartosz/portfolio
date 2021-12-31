import "../styles/globals.css";

import i18nConfig from "../i18n";
import appWithI18n from "next-translate/appWithI18n";
import { NavBar } from "components/layout/NavBar";
import { Row, Image } from "components";

function App({ Component, pageProps }: any) {
  i18nConfig.defaultLocale = "fr";

  return (
    <div className="relative overflow-x-hidden">
      <Component id="root" {...pageProps} />
      <Row
        positionX="right"
        className="absolute top-0 left-0 w-screen h-0 mt-10 max-lg:hidden "
      >
        <div className="relative h-[450px] w-[410px]">
          <AnimatedCircle className="top-0 bg-pink-300 -left-4 dark:opacity-40" />
          <AnimatedCircle className="top-0 bg-indigo-400 -right-4 animation-delay-2000 dark:opacity-40" />
          <AnimatedCircle className="bg-[#38BCF8] dark:opacity-90 animation-delay-4000 -bottom-8 left-20" />
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

export const Avatar = ({ size, src }: { size: number; src: any }) => {
  return (
    <div
      className={`grid  w-${size + 2} h-${
        size + 2
      } border-2 rounded-full border-[#38BCF8] dark:border-yellow-400 place-items-center`}
    >
      <div
        className={`relative m-0.5 overflow-hidden rounded-full cursor-pointer w-${size} h-${size} `}
      >
        <Image layout="fill" objectFit="cover" src={src} />
      </div>
    </div>
  );
};

const AnimatedCircle = ({ className }: any) => {
  return (
    <div
      className={`absolute w-64 h-64 rounded-full filter blur-xl opacity-70 animate-blob dark:mix-blend-color ${className}`}
    />
  );
};

export default appWithI18n(App, {
  ...i18nConfig,
});
