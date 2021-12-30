import { Column, Layout } from "components";
import { BecodeIcon } from "components/layout/Icons/Becode";
import { DigitaluIcon } from "components/layout/Icons/Digitalu";
import { UtopixIcon } from "components/layout/Icons/Utopix";

// todo: translate text to y on hover

const Home = () => {
  return (
    <Layout
      pageTitle="Bartosz Home"
      seoTitle="Front-end Développeur"
      seoDescription="" // todo:
      title="Hey! 👋 I'm Bartosz"
      description="A front-end developer that'll build your next dream web and mobile
      application."
    >
      <Column className="w-full gap-y-20">
        <section className="w-full">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            My professional experiences
          </h2>
          <div className="grid grid-cols-12 gap-10 ">
            <Card className="relative overflow-hidden transition-transform duration-150 ease-in-out col-span-full hover:scale-105 hover:-translate-y-1">
              <DigitaluIcon className="w-80 h-80 max-md:w-60 max-md:h-60 dark:fill-white fill-black" />
              <div className="absolute bottom-0 z-20 w-full h-10 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
                <div className="px-5">
                  <div className="w-auto mb-2 max-w-max">
                    <p className="font-semibold text-gray-900 dark:text-gray-300">
                      Front-end developer
                    </p>

                    <div className="w-[0px] -translate-x-5 group-hover:w-full ease-in-out transition-all duration-500 h-0.5 bg-gray-200" />
                  </div>
                  <p className="text-sm text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
                    Creation and maintenance of several web and mobile
                    applications mobile applications using high performance
                    technologies.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="col-span-6 overflow-hidden transition-transform duration-150 ease-in-out hover:scale-105">
              <UtopixIcon
                className="w-40 h-40 dark:fill-white fill-black"
                color="fill-black"
              />
              <div className="absolute bottom-0 z-20 w-full h-10 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
                <div className="px-5">
                  <div className="w-auto mb-2 max-w-max">
                    <p className="font-semibold text-gray-900 dark:text-gray-300">
                      Internship in web development
                    </p>

                    <div className="w-[0px] -translate-x-5 group-hover:w-full ease-in-out transition-all duration-500 h-0.5 bg-gray-200" />
                  </div>
                  <p className="text-sm text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
                    Development of a management platform (dashboard)
                  </p>
                </div>
              </div>
            </Card>
            <Card className="col-span-6 overflow-hidden transition-transform duration-150 ease-in-out hover:scale-105">
              <BecodeIcon className="w-40 h-40 " />
              <div className="absolute bottom-0 z-20 w-full h-10 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
                <div className="px-5">
                  <div className="w-auto mb-2 max-w-max">
                    <p className="font-semibold text-gray-900 dark:text-gray-300">
                      Training in web development
                    </p>

                    <div className="w-[0px] -translate-x-5 group-hover:w-full ease-in-out transition-all duration-500 h-0.5 bg-gray-200" />
                  </div>
                  <p className="text-sm text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
                    6 months training in front-end web development and back-end
                    development.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <section className="w-full">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            My professional skills
          </h2>
          <div className="grid grid-cols-12 gap-10 "></div>
        </section>
      </Column>
    </Layout>
  );
};

const Card = ({ children, className }: any) => {
  return (
    <div
      className={`z-10 cursor-pointer grid col-span-6 max-md:col-span-full h-[350px] max-md:w-full bg-gradient-to-br relative from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black   dark:from-black dark:to-black place-items-center ${className} group`}
    >
      {children}
    </div>
  );
};

export default Home;
