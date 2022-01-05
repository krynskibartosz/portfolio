import { Column, Section, Image, Blob } from "components";

import { Swiper, SwiperSlide } from "swiper/react";
import { UmengoIcon } from "components/base/Icons/Umengo";
import useTranslation from "next-translate/useTranslation";

export const FavorieteProject = ({ ...rest }) => {
  const { t } = useTranslation("home");

  // todo: bottom text position
  return (
    <Section title={`${t("BiggestProject")} 😍`} {...rest}>
      <>
        <div className="relative w-full h-full">
          {/* animation need to be outisde of the swipper */}
          <Blob className="bg-[#38BCF8] w-[550px] h-[400px] -left-32  dark:opacity-40 -top-5" />
          <Blob className="bg-purple-400  w-[550px] h-[500px] top-24 -left-28  dark:opacity-40 animation-delay-2000" />
          <Blob className="bg-blue-400  w-[550px] h-[500px] top-32 left-64  dark:opacity-40 animation-delay-4000" />
          <Blob className="bg-pink-300 w-[550px] h-[400px] -top-5 left-1/2  dark:opacity-40 animation-delay-6000" />

          <Swiper
            effect={"cards"}
            grabCursor={true}
            className="w-full mt-24 relative mySwiper h-[500px]"
          >
            {/* UMENGO */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black">
              <Column
                positionX="center"
                className="justify-center w-full h-full "
              >
                <h2 className="mb-8 font-semibold text-center text-gray-900 text-7xl dark:text-white">
                  Umengo
                </h2>
                <UmengoIcon className="h-56 ml-10 w-60 " />
              </Column>
            </SwiperSlide>
            {/* DESCRIPTION */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black ">
              <Column className="w-full h-full p-10 pt-24">
                <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-white">
                  {t("WhatsUmengo")}
                </h2>
                <p className="text-sm font-light text-gray-800 dark:text-gray-400">
                  {t("UmengoDescription")}
                </p>
                <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
                <span className="absolute text-xs text-gray-600 right-5 bottom-5 dark:text-gray-500">
                  1
                </span>
              </Column>
            </SwiperSlide>
            {/* AUTH */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black ">
              <Column
                positionX="center"
                className="justify-center w-full h-full "
              >
                <h2 className="mb-5 text-4xl font-semibold text-gray-900 dark:text-white">
                  {t("Authentification")}
                </h2>

                <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
                <span className="absolute text-xs text-gray-600 right-5 bottom-5 dark:text-gray-500">
                  2
                </span>
              </Column>
            </SwiperSlide>
            {/* SIGNUP */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  {t("Signup")}
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/auth-signup.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5 ">
                3
              </span>
            </SwiperSlide>
            {/* SIGNIN */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  {t("Signin")}
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/auth-signin.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5 ">
                4
              </span>
            </SwiperSlide>
            {/* USER PROFILE */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  {t("UserProfile")}
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/user-profile.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5 ">
                5
              </span>
            </SwiperSlide>
            {/* CRUD */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black ">
              <Column
                positionX="center"
                className="justify-center w-full h-full "
              >
                <h2 className="mb-5 text-4xl font-semibold text-gray-900 dark:text-white">
                  CRUD
                </h2>

                <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
                <span className="absolute text-xs text-gray-600 right-5 bottom-5 dark:text-gray-500">
                  6
                </span>
              </Column>
            </SwiperSlide>

            {/* CREATE */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  CREATE
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/create-mission.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5">
                7
              </span>
            </SwiperSlide>
            {/* READ */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  READ
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/applications.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5 ">
                8
              </span>
            </SwiperSlide>

            {/* UPDATE */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-20 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-white ">
                  UPDATE
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/user-edit-profile.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-white right-5 bottom-5 ">
                9
              </span>
            </SwiperSlide>
            {/* DELETE */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-white ">
                  DELETE
                </p>
              </Column>
              <div className="relative w-full h-full">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/img/umengo/delete.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-white right-5 bottom-5 ">
                10
              </span>
            </SwiperSlide>
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black ">
              <Column
                positionX="center"
                className="justify-center w-full h-full "
              >
                <h2 className="mb-5 text-4xl font-semibold text-gray-900 dark:text-white">
                  Socket
                </h2>

                <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
                <span className="absolute text-xs text-gray-600 right-5 bottom-5 dark:text-gray-500">
                  11
                </span>
              </Column>
            </SwiperSlide>
            {/* MESSENGER */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-20 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  Messenger
                </p>
              </Column>
              <div className="relative w-full h-full bg-white">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/img/umengo/messenger2.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5 ">
                12
              </span>
            </SwiperSlide>
            {/* NOTIFICATION */}
            <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black group">
              <Column
                positionX="center"
                className="absolute bottom-0 left-0 z-10 justify-center w-full h-20 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              >
                <p className="text-lg font-semibold text-center text-gray-800 ">
                  {t("Notification")}
                </p>
              </Column>
              <div className="relative w-full h-full bg-white">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/img/umengo/socket.jpg"
                />
              </div>
              <span className="absolute z-20 text-xs text-gray-500 right-5 bottom-5 ">
                13
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </Section>
  );
};
