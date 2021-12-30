import "../styles/globals.css";

import i18nConfig from "../i18n";
import appWithI18n from "next-translate/appWithI18n";
import { NavBar } from "components/layout/NavBar";
import { Row } from "components";

function App({ Component, pageProps }: any) {
  i18nConfig.defaultLocale = "fr";
  // todo: define max-width
  return (
    <div className="relative ">
      <Component id="root" {...pageProps} />
      <Row
        positionX="right"
        className="absolute top-0 left-0 w-screen mt-10 max-lg:hidden"
      >
        <div className="relative w-full " style={{ height: 450, width: 410 }}>
          <div className="absolute top-0 w-64 h-64 bg-pink-300 rounded-full -left-4 filter blur-xl opacity-70 animate-blob dark:mix-blend-color dark:opacity-40" />
          <div className="absolute top-0 w-64 h-64 bg-indigo-400 rounded-full -right-4 filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-color dark:opacity-40" />
          <div className="absolute  bg-[#38BCF8] rounded-full -bottom-8 left-20 w-64 h-64 filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-color dark:opacity-90" />
        </div>
      </Row>

      <NavBar />
    </div>
  );
}

export default appWithI18n(App, {
  ...i18nConfig,
});
