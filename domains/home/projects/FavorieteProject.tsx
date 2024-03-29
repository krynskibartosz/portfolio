import { Section, Blob } from 'components';

import { useTranslation } from 'next-i18next';
import 'swiper/css';
import 'swiper/css/effect-cards';
import SwiperCore, { EffectCards, Pagination } from 'swiper';
import { CarouselDesktop } from './CarouselDesktop';
import { CarouselMobile } from './CarouselMobile';

SwiperCore.use([EffectCards, Pagination]);

// todo: create different component of the carousel

// 1: ProjectCard (image + name)
// 2: Presentation (logo top + text)
// 3: Feature (theme = 'light' | 'dark)
// 4: create a config handler

export const FavorieteProject = ({
  className,
  ...rest
}: {
  className?: string;
}) => {
  const { t } = useTranslation('');

  return (
    <Section
      // title={`${t('home.BiggestProject')}  💯`}
      className={`max-md:px-5   ${className}`}
      {...rest}
    >
      <>
        <h2 className="mb-5 md:text-3xl xl:text-4xl font-semibold  max-md:mb-5 whitespace-nowrap text-xl text-white ">
          {t('home.BiggestProject')} 💯
        </h2>
        <div className="relative w-full h-full ">
          {/* animation need to be outisde of the swipper */}
          <Blob className="max-md:hidden  bg-[#FE6B6A] w-[550px] h-[400px] -left-32  dark:opacity-80 -top-5" />
          <Blob className="max-md:hidden  bg-[#50CBC3]  w-[550px] h-[500px] top-24 -left-28  dark:opacity-80 animation-delay-1000" />
          <Blob className="max-md:hidden  bg-[#FE6B6A]  w-[550px] h-[500px] top-32 left-64  dark:opacity-80 animation-delay-1000" />
          <Blob className="max-md:hidden  bg-[#50CBC3] w-[550px] h-[400px] dark:-top-20 -top-5 left-1/2  dark:opacity-80 animation-delay-4000" />

          <CarouselDesktop className="max-md:hidden" />
          <CarouselMobile className="md:hidden" />
        </div>
      </>
    </Section>
  );
};
