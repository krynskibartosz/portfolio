import { Column, Section, Image, Row } from "components";
import useTranslation from "next-translate/useTranslation";
import useNextBlurhash from "use-next-blurhash";

export const Skills = () => {
  const { t } = useTranslation("home");
  return (
    <Section title={`${t("ProfessionalSkills")} 💪🏻`}>
      <Column className="gap-y-5">
        <SkillsCard
          title={t("FrameworkAndLibrairies")}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
          img="/img/skills/code.jpg"
          badges={["React", "Redux", "NextJs", "TypeScript", "Tailwind"]}
          color="bg-red-500"
          blur="L383nu]n1JBoClEg-B=|0|AC}Y=e"
        />
        <SkillsCard
          title={t("ProjectSoftwareManagement")}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
          direction="right"
          img="/img/yellow/manette.jpg"
          badges={["Notion", "Airtable", "Jira", "Google doc"]}
          color="bg-yellow-500"
          blur="LLRxbFae]]tRo#SQngwZ}Ms-AMRj"
        />
        <SkillsCard
          title={t("TeamWork")}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
          direction="left"
          img="/img/purple/cat.jpg"
          badges={["Confidence", "Empathy", "Friendly", "Responsiveness"]}
          color="bg-purple-500"
          blur="LrF4a]RjRUohD%t7ouah?1jJRjbW"
        />

        <SkillsCard
          title={`UI ${t("and")} UX`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              minus, quos optio officia quo placeat ex temporibus voluptate
              aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus
              magni ratione nostrum!"
          direction="right"
          img="/img/skills/design.jpg"
          badges={["Figma", "Zeplin", "CSS", "HTML"]}
          color="bg-pink-500"
          blur="LLEVTx4.-;S2~BIV-pof%zVtxus:"
        />
      </Column>
    </Section>
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
  blur,
}: any) => {
  const [blurDataUrl] = useNextBlurhash(blur);

  return (
    <div
      className={`z-10 cursor-pointer w-full h-[250px] bg-gradient-to-br relative from-white to-gray-100 rounded-xl shadow-main dark:shadow-lg dark:shadow-black dark:from-black dark:to-black overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${className}`}
    >
      <Row className="w-full h-full">
        {direction === "left" && (
          <div className="relative w-[400px] h-full">
            <Image
              placeholder="blur"
              blurDataURL={blurDataUrl}
              objectFit="cover"
              layout="fill"
              src={img}
            />
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
            <Image
              placeholder="blur"
              blurDataURL={blurDataUrl}
              objectFit="cover"
              layout="fill"
              src={img}
            />
          </div>
        )}
      </Row>
    </div>
  );
};
