import { Layout, Link, Section, Image } from 'components';
import { useTranslation } from 'next-i18next';

const Page404 = () => {
  const { t: globalTranslation } = useTranslation('');

  const config = [
    {
      name: globalTranslation('Home'),
      url: '/',
      img: '/img/illustration/CV.svg',
    },
    {
      name: globalTranslation('Projects'),
      url: '/projects',
      img: '/img/illustration/folder.svg',
    },
    {
      name: globalTranslation('Contact'),
      url: '/contact',
      img: '/img/illustration/contact.svg',
    },
  ];

  const { t } = useTranslation('');

  return (
    <Layout
      headTitle="Bartek Home"
      seoTitle="Frontend Développeur Bartek"
      seoDescription="" // todo:
      title={t('404Page')}
      description={`${t('OopsYouGotTheWrongLink')} 💩`}
    >
      <Section className="max-md:px-5">
        <>
          <p className="mb-5 text-xl font-semibold text-gray-800 dark:text-gray-400">
            {t('HereIsAListOfLinksYouMightWantToCheckOut')}
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

const Card = ({ el: { img, name, url } }: any) => {
  return (
    <Link href={url}>
      <div
        className={`z-10 cursor-pointer grid col-span-6 overflow-hidden  max-md:col-span-full brightness-95 hover:brightness-100 h-[350px] max-md:w-full place-items-center relative group card transition-all duration-300 ease-in-out `}
      >
        <p className="absolute z-10 text-xl font-bold text-gray-900 uppercase -translate-x-1/2 -translate-y-1/2 dark:text-pink-400 top-1/2 left-1/2">
          {name}
        </p>
        <div className="w-1/2 h-1/2">
          <Image alt="" layout="fill" src={img} />
        </div>
      </div>
    </Link>
  );
};
