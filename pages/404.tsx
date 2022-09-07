import { Layout, Link, Section, Image } from 'components';
import { useTranslation } from 'next-i18next';
import useNextBlurhash from 'use-next-blurhash';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from 'next-i18next.config';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
};

const Page404 = () => {
  const { t } = useTranslation('');

  const config = [
    {
      name: t('global.Home'),
      url: '/',
      img: '/img/home-1.jpeg',
      blur: 'LFLg^YQlM|x]~W4TtSZ~pd.9DiWq',
    },
    {
      name: t('global.Projects'),
      url: '/projects',
      img: '/img/project-work.jpeg',
      blur: 'LbL|$P~qMw9H.TxtNGe=r=IUWFWB',
    },
    {
      name: t('global.Contact'),
      url: '/contact',
      img: '/img/contact-1.jpeg',
      blur: 'L6FO$5~q0e?b0000?aIU.m^*iw-;',
    },
  ];

  return (
    <Layout
      headTitle="Bartek Home"
      seoTitle="Frontend Développeur Bartek"
      seoDescription="" // todo:
      title={t('404.404Page')}
      description={`${t('404.OopsYouGotTheWrongLink')} 💩`}
    >
      <Section className="max-md:px-5">
        <>
          <p className="mb-5 text-xl font-semibold text-gray-800 dark:text-gray-400">
            {t('404.HereIsAListOfLinksYouMightWantToCheckOut')}
          </p>
          <ul className="grid grid-cols-12 gap-5">
            {config.map((el, i) => (
              <Card key={i} el={el} />
            ))}
          </ul>
        </>
      </Section>
    </Layout>
  );
};

export default Page404;

const Card = ({
  el: { img, name, url, blur },
}: {
  el: {
    img: string;
    url: string;
    name: string;
    blur: string;
  };
}) => {
  const [blurDataUrl] = useNextBlurhash(blur);

  return (
    <Link href={url}>
      <div
        className={`z-10 cursor-pointer grid col-span-6 overflow-hidden  max-md:col-span-full brightness-95 hover:brightness-105 h-[350px] max-md:w-full place-items-center  group card transition-all duration-300 relative ease-in-out `}
      >
        <p className="absolute z-30 text-xl font-bold text-white uppercase -translate-x-1/2 bottom-14 left-1/2">
          {name}
        </p>
        <div className="w-1/2 h-1/2">
          <Image
            placeholder="blur"
            blurDataURL={blurDataUrl ?? blur}
            alt=""
            objectFit="cover"
            layout="fill"
            src={img}
          />
        </div>
        <div className="absolute rounded-xl bottom-0 h-full bg-gray-900 bg-opacity-20  z-20 w-full"></div>
      </div>
    </Link>
  );
};
