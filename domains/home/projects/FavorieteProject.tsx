import { Section, Blob } from "components";

import useTranslation from "next-translate/useTranslation";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards } from "swiper";
import { CarouselDesktop } from "./CarouselDesktop";
import { CarouselMobile } from "./CarouselMobile";

SwiperCore.use([EffectCards]);

export const FavorieteProject = ({ className, ...rest }: any) => {
  const { t } = useTranslation("home");

  return (
    <Section
      title={`${t("BiggestProject")} 😍`}
      className={`max-md:px-5 ${className}`}
      {...rest}
    >
      <>
        <div className="relative w-full h-full ">
          {/* animation need to be outisde of the swipper */}
          <Blob className="max-md:hidden bg-[#38BCF8] w-[550px] h-[400px] -left-32  dark:opacity-40 -top-5" />
          <Blob className="max-md:hidden bg-purple-400  w-[550px] h-[500px] top-24 -left-28  dark:opacity-40 animation-delay-1000" />
          <Blob className="max-md:hidden bg-blue-400  w-[550px] h-[500px] top-32 left-64  dark:opacity-40 animation-delay-1000" />
          <Blob className="max-md:hidden bg-pink-300 w-[550px] h-[400px] -top-5 left-1/2  dark:opacity-40 animation-delay-4000" />

          <CarouselDesktop className="max-md:hidden" t={t} />
          <CarouselMobile className="md:hidden" t={t} />
        </div>
      </>
    </Section>
  );
};
