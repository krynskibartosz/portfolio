import { Layout, Link, Section, Image } from "components";

const Page404 = () => {
  // todo: create a component card with illustration for all the links

  const config = [
    {
      name: "Accueil",
      url: "/",
      img: "/img/illustration/CV.svg",
    },
    {
      name: "Projets",
      url: "/projects",
      img: "/img/illustration/folder.svg",
    },
    {
      name: "Contact",
      url: "/contact",
      img: "/img/illustration/contact.svg",
    },
  ];

  return (
    <Layout
      headTitle="Bartosz Home"
      seoTitle="Front-end Développeur Bartosz"
      seoDescription="" // todo:
      title="Page 4O4"
      description="Oups tu t'es gourré de lien"
    >
      <Section>
        <>
          <p className="mb-5 text-xl font-semibold text-gray-800 dark:text-gray-400">
            Voici une liste de liens que tu aurais voulu consulter
          </p>
          <ul className="grid grid-cols-12 gap-5">
            {config.map((el, i) => (
              <Card el={el} />
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
          <Image layout="fill" src={img} />
        </div>
      </div>
    </Link>
  );
};
