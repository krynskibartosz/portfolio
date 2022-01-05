import { Column, Section, Image, Row } from "components";
import useTranslation from "next-translate/useTranslation";
import useNextBlurhash from "use-next-blurhash";
import { SKILL, skills } from "./config";

export const Skills = () => {
  const { t } = useTranslation("home");

  return (
    <Section title={`${t("ProfessionalSkills")} 💪🏻`}>
      <Column className="gap-y-5">
        {skills(t).map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </Column>
    </Section>
  );
};

const Card = ({
  el: {
    direction = "left",
    name,
    description,
    img: { blur, url },
    badges,
    color,
  },
}: {
  el: SKILL;
}) => {
  const [blurDataUrl] = useNextBlurhash(blur);

  return (
    <div
      className={`z-10 cursor-pointer w-full h-[250px] overflow-hidden card`}
    >
      <Row className="w-full h-full">
        {direction === "left" && (
          <div className="relative  w-[400px] h-full">
            <Image
              placeholder="blur"
              blurDataURL={blurDataUrl}
              objectFit="cover"
              layout="fill"
              src={url}
            />
          </div>
        )}

        <Column className="justify-between w-full h-full p-5 ">
          <Column className="">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">
              {name}
            </p>
            <p className="text-xs text-gray-800 dark:text-gray-400">
              {description}
            </p>
          </Column>
          <Row className="gap-x-2">
            {badges?.map((el, i) => (
              <Row
                key={i}
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
              src={url}
            />
          </div>
        )}
      </Row>
    </div>
  );
};
