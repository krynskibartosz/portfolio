import { Column } from "components";

import { SwiperSlide, Swiper } from "swiper/react";
import { UmengoIcon } from "components/base/Icons/Umengo";

export const CarouselMobile = ({ t, className }: any) => (
  <Swiper
    effect={"cards"}
    grabCursor={true}
    pagination={{
      type: "fraction",
    }}
    className={`w-full  mt-5 relative mySwiper h-[400px] ${className}`}
  >
    {/* UMENGO */}
    <SwiperSlide className="relative z-10 border border-gray-200 cursor-pointer dark:border-gray-900 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black">
      <Column positionX="center" className="justify-center w-full h-full ">
        <h2 className="mb-8 text-5xl font-semibold text-center text-gray-900 dark:text-white">
          Umengo
        </h2>
        <UmengoIcon className="w-24 h-24 ml-10 " />
      </Column>
    </SwiperSlide>
    {/* DESCRIPTION */}
    <SwiperSlide className="relative z-10 border border-gray-200 cursor-pointer dark:border-gray-900 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black ">
      <Column className="w-full h-full p-10 pt-20">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
          {t("WhatsUmengo")}
        </h2>
        <p className="text-xs font-light text-gray-800 dark:text-gray-400">
          {t("UmengoDescription")}
        </p>
        <UmengoIcon className="absolute w-10 h-10 m left-5 top-5 " />
        <span className="absolute text-xs text-gray-600 right-5 bottom-5 dark:text-gray-500">
          2
        </span>
      </Column>
    </SwiperSlide>
    {/* AUTH */}
    <SwiperSlide className="relative z-10 border border-gray-200 cursor-pointer dark:border-gray-900 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black ">
      <Column positionX="center" className="justify-center w-full h-full ">
        <h2 className="mb-5 text-4xl font-semibold text-gray-900 dark:text-white">
          {t("Authentification")}
        </h2>

        <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
        <span className="absolute text-xs text-gray-600 right-5 bottom-5 dark:text-gray-500">
          3
        </span>
      </Column>
    </SwiperSlide>
  </Swiper>
);
