import { Column, Layout, Image, Row } from "components";
import { BecodeIcon } from "components/layout/Icons/Becode";
import { DigitaluIcon } from "components/layout/Icons/Digitalu";
import { NextJsIcon } from "components/layout/Icons/NextJs";
import { ReactIcon } from "components/layout/Icons/skills/React";
import { TailwinIcon } from "components/layout/Icons/skills/Tailwind";
import { TypeScriptIcon } from "components/layout/Icons/skills/TypeScript";
import { VsCodeIcon } from "components/layout/Icons/skills/VsCode";
import { UtopixIcon } from "components/layout/Icons/Utopix";

// todo: digitalu logo on mobile
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
        {/* EXPERIENCES */}
        <section className="w-full ">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
            My professional experiences
          </h2>
          <div className="grid grid-cols-12 gap-10 ">
            <CompanyCard
              Icon={DigitaluIcon}
              title={"Front-end developer"}
              description="Creation and maintenance of several web and mobile
              applications using high performance technologies."
              iconClassName="!w-80 !h-80 max-md:w-60 max-md:!h-60 dark:fill-white fill-black"
              className="col-span-full"
            />
            <CompanyCard
              Icon={UtopixIcon}
              title={"Internship in web development"}
              description="Development of a management platform (dashboard)"
              className="col-span-6 dark:fill-white fill-black"
            />
            <CompanyCard
              Icon={BecodeIcon}
              title={"Training in web development"}
              description="7 months training in front-end web development and back-end development."
              className="col-span-6 "
            />
          </div>
        </section>
        {/* FAVORIETE PROJECT */}
        <section className="w-full">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
            Favorite project
          </h2>
          <div className="relative overflow-hidden transition-transform duration-500 ease-in-out cursor-pointer bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black hover:scale-105">
            <div className="relative  rounded-xl  w-full h-[450px]">
              <Image src="/img/umengo.png" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        {/* SKILLS */}

        <section className="w-full">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
            Professional skills
          </h2>
          <Column className="gap-y-5">
            <SkillsCard
              title="Framework and librairies"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
              img="/img/skills/code.jpg"
              badges={["React", "Redux", "NextJs", "TypeScript", "Tailwind"]}
              color="bg-red-500"
            />
            <SkillsCard
              title="Project software management"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
              direction="right"
              img="/img/skills/tablet.jpg"
              badges={["Notion", "Airtable", "Jira", "Google doc"]}
              color="bg-yellow-500"
            />
            <SkillsCard
              title="Team collaboration"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
              direction="left"
              img="/img/skills/communication.jpg"
              badges={["Confidence", "Empathy", "Friendly", "Responsiveness"]}
              color="bg-purple-500"
            />

            <SkillsCard
              title="Design and UX"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
              direction="right"
              img="/img/skills/design.jpg"
              badges={["Figma", "Zeplin", "CSS", "HTML"]}
              color="bg-pink-500"
            />
          </Column>
        </section>
        {/* SKILLS */}

        <section className="w-full">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
            About me
          </h2>
          <Column className="gap-y-5"></Column>
        </section>
      </Column>
    </Layout>
  );
};

const SkillsCard = ({
  className,
  direction = "left",
  title,
  description,
  img,
  badges,
  color,
}: any) => {
  return (
    <div
      className={`z-10 cursor-pointer w-full h-[250px] bg-gradient-to-br relative from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${className}`}
    >
      <Row className="w-full h-full">
        {direction === "left" && (
          <div className="relative w-[400px] h-full">
            <Image objectFit="cover" layout="fill" src={img} />
          </div>
        )}

        <Column className="justify-between w-full h-full p-5 ">
          <Column className="">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">
              {title}
            </p>
            <p className="text-xs text-gray-800 dark:text-gray-400">
              {description}
            </p>
          </Column>
          <Row className="gap-x-2">
            {badges?.map((el: any) => (
              <Row
                positionY="center"
                className={`px-3 text-xs text-white  bg h-7 rounded-xl ${color}`}
              >
                {el}
              </Row>
            ))}
          </Row>
        </Column>
        {direction === "right" && (
          <div className="relative w-[400px] h-full">
            <Image objectFit="cover" layout="fill" src={img} />
          </div>
        )}
      </Row>
    </div>
  );
};

const Card = ({ children, className }: any) => {
  return (
    <div
      className={`z-10 cursor-pointer grid  max-md:col-span-full h-[350px] max-md:w-full bg-gradient-to-br relative from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black   dark:from-black dark:to-black place-items-center  group overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
};

type COMPANY_CARD = {
  Icon: ({ ...r }: any) => JSX.Element;
  title: string;
  description: string;
  className: string;
  iconClassName?: string;
};

const CompanyCard = ({
  Icon,
  title,
  description,
  className,
  iconClassName,
}: COMPANY_CARD) => {
  return (
    <Card className={` ${className}`}>
      <Icon className={`w-40 h-40 ${iconClassName}`} />
      <div className="absolute bottom-0 z-20 w-full h-10 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
        <div className="px-5">
          <div className="w-auto mb-2 max-w-max">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              {title}
            </p>

            <div className="w-[0px] -translate-x-5 group-hover:w-full ease-in-out transition-all duration-700 h-0.5 bg-gray-200" />
          </div>
          <p className="text-sm text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Home;
