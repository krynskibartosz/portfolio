import { Column, Image, Row } from 'components';

import { SwiperSlide, Swiper } from 'swiper/react';
import { UmengoIcon } from 'components/base/Icons/Umengo';
import { TypeScriptIcon } from 'components/base/Icons/TypeScript';
import { NextJSIcon } from 'components/base/Icons/NextJS';
import { SassIcon } from 'components/base/Icons/Sass';
import { SocketIOIcon } from 'components/base/Icons/SocketIO';
import { ReduxIcon } from 'components/base/Icons/Redux';
import { TailwindIcon } from 'components/base/Icons/Tailwind';
import { ReactNativeIcon } from 'components/base/Icons/ReactNative';
import { Navigation } from 'swiper';
import { useTranslation } from 'next-i18next';

export const CarouselDesktop = ({ className }: { className?: string }) => {
  const { t } = useTranslation('');
  // todo: rajouter un lien sur l'icone d'Umengo
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      className={`w-full  mt-24 relative mySwiper h-[500px] ${className}`}
      modules={[Navigation]}
      navigation={true}
    >
      {/* UMENGO */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256]">
        <Column positionX="center" className="justify-center w-full h-full ">
          <h2 className="mb-8 font-semibold text-center  text-7xl text-white">
            Umengo
          </h2>
          <UmengoIcon className="h-56 ml-10 w-60 " />
        </Column>
      </SwiperSlide>

      {/* AUTH */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256]">
        <Column positionX="center" className="justify-center w-full h-full ">
          <h2 className="mb-5 text-4xl font-semibold  text-white">
            {t('home.Authentification')}
          </h2>

          <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
          <span className="absolute text-xs text-white right-5 bottom-5 ">
            1
          </span>
        </Column>
      </SwiperSlide>
      {/* SIGNUP */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-50"
        >
          <p className="text-lg font-semibold text-center bg-clip-text bg-gradient-to-r text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256]">
            {t('home.Signup')}
          </p>
        </Column>
        <div className="relative w-full h-full">
          <Image
            objectFit="cover"
            layout="fill"
            src="/img/umengo/auth-signup.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs bg-clip-text bg-gradient-to-r text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] right-5 bottom-5 ">
          2
        </span>
      </SwiperSlide>
      {/* CRUD */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] ">
        <Column positionX="center" className="justify-center w-full h-full ">
          <h2 className="text-4xl font-semibold text-white">CRUD</h2>

          <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
          <span className="absolute text-xs text-white right-5 bottom-5 ">
            3
          </span>
        </Column>
      </SwiperSlide>

      {/* CREATE */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-50"
        >
          <p className="text-lg font-semibold text-center from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent ">
            {/* //TODO: traduire  */}
            Création
          </p>
        </Column>
        <div className="relative w-full h-full">
          <Image
            objectFit="cover"
            layout="fill"
            src="/img/umengo/create-mission.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr right-5 bottom-5">
          4
        </span>
      </SwiperSlide>
      {/* READ */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-50"
        >
          <p className="text-lg font-semibold text-center from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent ">
            Lecture
          </p>
        </Column>
        <div className="relative w-full h-full">
          <Image
            objectFit="cover"
            layout="fill"
            src="/img/umengo/lecture.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr right-5 bottom-5 ">
          5
        </span>
      </SwiperSlide>

      {/* UPDATE */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 "
        >
          <p className="text-lg font-semibold text-center text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr ">
            Modification
          </p>
        </Column>
        <div className="relative w-full h-full">
          <Image
            objectFit="cover"
            layout="fill"
            src="/img/umengo/user-edit-profile.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr right-5 bottom-5 ">
          6
        </span>
      </SwiperSlide>
      {/* DELETE */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 "
        >
          <p className="text-lg font-semibold text-center text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr ">
            Suppression
          </p>
        </Column>
        <div className="relative w-full h-full">
          <Image objectFit="cover" layout="fill" src="/img/umengo/delete.jpg" />
        </div>
        <span className="absolute z-10 text-xs text-transparent from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr right-5 bottom-5 ">
          7
        </span>
      </SwiperSlide>
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] ">
        <Column positionX="center" className="justify-center w-full h-full ">
          <h2 className="mb-5 text-4xl font-semibold text-white">WebSocket</h2>

          <UmengoIcon className="absolute w-10 h-10 left-5 top-5 " />
          <span className="absolute text-xs  right-5 bottom-5 text-white">
            8
          </span>
        </Column>
      </SwiperSlide>
      {/* MESSENGER */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-50"
        >
          <p className="text-lg font-semibold text-center from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent ">
            Messenger
          </p>
        </Column>
        <div className="relative w-full h-full bg-white">
          <Image
            objectFit="contain"
            layout="fill"
            src="/img/umengo/messenger.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent  right-5 bottom-5 ">
          9
        </span>
      </SwiperSlide>
      {/* NOTIFICATION */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-50"
        >
          <p className="text-lg font-semibold text-center from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent ">
            {t('home.Notification')}
          </p>
        </Column>
        <div className="relative w-full h-full bg-white">
          <Image
            objectFit="contain"
            layout="fill"
            src="/img/umengo/notification.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent  right-5 bottom-5 ">
          10
        </span>
      </SwiperSlide>
      {/* MOBILE */}
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br -black rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] group">
        <Column
          positionX="center"
          className="absolute bottom-0 left-0 z-10 justify-center w-full h-14 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-50"
        >
          <p className="text-lg font-semibold text-center from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent ">
            {"Et bien sûr, c'est totalement réactive"}
          </p>
        </Column>
        <div className="relative w-full h-full bg-white">
          <Image
            objectFit="contain"
            layout="fill"
            src="/img/umengo/responsive.jpg"
          />
        </div>
        <span className="absolute z-10 text-xs from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] bg-clip-text bg-gradient-to-tr text-transparent  right-5 bottom-5 ">
          11
        </span>
      </SwiperSlide>
      <SwiperSlide className="relative z-10 cursor-pointer bg-gradient-to-br  rounded-[20px] shadow-main  from-[#FE6B6A] via-[#50CBC3] to-[#4A5256] ">
        <Column className=" w-full h-full p-6 pt-8 gap-y-5">
          <Column className="w-full">
            <h2 className=" md:text-3xl pt-5 w-full text-center mb-4 font-semibold text-white">
              Technologies utilisées
            </h2>
            <ul className="dark:text-white pl-5 flex flex-wrap gap-3 justify-center">
              <div className="px-4  border-2 border-[#010001] hover:bg-[#010001] bg-white group  rounded-[20px] transition-colors duration-500 ease-in-out ">
                <NextJSIcon
                  className="w-20 h-10 "
                  pathClassName="fill-[#010001] transition-colors duration-500 ease-in-out group-hover:fill-white"
                />
              </div>
              <div className="px-4 transition-colors duration-500 ease-in-out hover:bg-[#1D1F21] group  border-2 flex items-center border-[#1D1F21] bg-white  rounded-[20px] ">
                <Row className="items-center">
                  <SocketIOIcon
                    circleClassName="group-hover:stroke-white transition-colors duration-500 ease-in-out"
                    pathClassName="group-hover:fill-white transition-colors duration-500 ease-in-out"
                    className=" h-8 mr-1 "
                  />
                  <p className="text-[#1D1F21] group-hover:text-white font-semibold transition-colors duration-500 ease-in-out">
                    Socket.IO
                  </p>
                </Row>
              </div>
              <div className="px-4  border-2 hover:bg-[#774BBC] transition-colors duration-500 ease-in-out border-[#774BBC] bg-white group  rounded-[20px] ">
                <Row className="items-center">
                  <ReduxIcon
                    colorClassName="group-hover:fill-white transition-colors duration-500 ease-in-out"
                    className=" h-10 mr-1 "
                  />
                  <p className="text-[#774BBC] font-semibold group-hover:text-white transition-colors duration-500 ease-in-out">
                    Redux
                  </p>
                </Row>
              </div>

              <div className="group px-4  border-2 border-[#027ACC] hover:bg-[#027ACC] transition-colors duration-500 ease-in-out bg-white  rounded-[20px] ">
                <TypeScriptIcon
                  colorClassName="group-hover:fill-white fill-[#027ACC] transition-colors duration-500 ease-in-out"
                  className="w-20 h-10"
                />
              </div>
              <div className="group px-4 flex items-center  border-2 border-[#63DAFA] hover:bg-[#63DAFA] transition-colors duration-500 ease-in-out bg-white  rounded-[20px] ">
                <ReactNativeIcon
                  groupClassName="group-hover:stroke-white dark:group-hover:stroke-white transition-colors duration-500 ease-in-out"
                  circleClassName="group-hover:fill-white dark:group-hover:fill-white transition-colors duration-500 ease-in-out"
                  className="h-7 mr-1 dark:fill-[#63DAFA]"
                />
                <p className="text-[#63DAFA] font-semibold whitespace-nowrap group-hover:text-white transition-colors duration-500 ease-in-out">
                  React Native
                </p>
              </div>
              <div className="px-4 group  border-2 hover:bg-[#38bdf8] transition-colors duration-500 ease-in-out border-[#38bdf8] bg-white  rounded-[20px] ">
                <TailwindIcon
                  pathClassName="fill-[#38bdf8] group-hover:fill-white transition-colors duration-500  ease-in-out"
                  className="w-28 text-[#38bdf8] h-10  group-hover:text-white transition-colors duration-500  ease-in-out"
                />
              </div>
              <div className="px-4 group h-10 flex items-center  border-2 border-[#CE649A] bg-white hover:bg-[#CE649A] transition-colors duration-500 ease-in-out  rounded-[20px] ">
                <SassIcon
                  pathClassName="fill-[#CF649A] group-hover:fill-white transition-colors duration-500  ease-in-out"
                  className="w-20 h-7"
                />
              </div>
            </ul>
          </Column>
          <Column className="w-full">
            <h2 className=" md:text-2xl  w-full text-center mb-4 font-semibold text-white">
              {"Vous voulez visiter le site web ou l'application mobile ?"}
            </h2>

            {/* //todo: Changer le liens du site web par une image de l'accueil de umengo */}
            {/* //todo: + img du qrcode */}
            <Row positionX="between" className="w-full px-16">
              <div className="border-2 p-1 rounded-[20px]">
                <div className="relative  w-[192px] h-48 rounded-[20px] hover:scale-110 transition-transform duration-500 ease-in-out  overflow-hidden">
                  <Image
                    layout="fill"
                    className="rounded-[20px]"
                    objectFit="contain"
                    src="/img/umengo/qrcode.png"
                  />
                </div>
              </div>
              {/* //todo: add an overlay that say open the link */}
              <div className="border-2 p-1 rounded-[20px]">
                <div className="relative hover:scale-110 transition-transform duration-500 ease-in-out  w-[305px] h-48 rounded-[20px] shadow-main overflow-hidden">
                  <Image
                    layout="fill"
                    className="rounded-[20px]"
                    objectFit="contain"
                    src="/img/umengo/umengo-home.jpg"
                  />
                </div>
              </div>
            </Row>
            {/* <a
              className="dark:text-white underline"
              href="https://www.umengo.org/"
            >
              https://www.umengo.org
            </a> */}
          </Column>
        </Column>
      </SwiperSlide>
    </Swiper>
  );
};
