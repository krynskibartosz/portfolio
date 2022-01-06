import { Column, Section, Image, Row, Blob } from "components";
import useTranslation from "next-translate/useTranslation";
import useNextBlurhash from "use-next-blurhash";
import { SKILL, skills } from "./config";

export const Skills = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative w-full ">
      <div className="absolute bottom-0">
        <div className="relative h-[450px] w-[410px]">
          <Blob className="top-0 w-64 h-64 bg-yellow-400 -left-4 dark:opacity-40" />
          <Blob className="top-0 w-64 h-64 bg-purple-400 -right-4 animation-delay-2000 dark:opacity-40" />
          <Blob className="left-0 w-64 h-64 bg-pink-400 dark:opacity-90 animation-delay-4000 -bottom-5" />
        </div>
      </div>
      <Section title={`${t("ProfessionalSkills")} 💪🏻`}>
        <Column className="gap-y-5">
          {skills(t).map((el, i) => (
            <Card key={i} el={el} />
          ))}
        </Column>
      </Section>
    </div>
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

  const getColor = () => {
    let initialColor = {
      bg: "",
      text: "",
    };
    switch (color) {
      case "yellow":
        initialColor.bg = "bg-yellow-500";
        initialColor.text = "text-yellow-500";
        break;

      case "red":
        initialColor.bg = "bg-red-500";
        initialColor.text = "text-red-500";
        break;

      case "purple":
        initialColor.bg = "bg-purple-500";
        initialColor.text = "text-purple-500";
        break;

      case "pink":
        initialColor.bg = "bg-pink-500";
        initialColor.text = "text-pink-500";
        break;

      default:
        break;
    }
    return initialColor;
  };

  return (
    <div className={`z-10  w-full h-[250px] overflow-hidden card`}>
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
            <p className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">
              {name}
            </p>
            <ul className="flex flex-col pl-5 ">
              {description?.map((el) => (
                <li className={`${getColor().text} list-disc`}>
                  <p className="text-xs text-gray-800 -translate-y-[1.3px] dark:text-gray-400">
                    {el}.
                  </p>
                </li>
              ))}
            </ul>
          </Column>
          <Row className="gap-x-2">
            {badges?.map((el, i) => (
              <Row
                key={i}
                positionY="center"
                className={`px-3 text-xs text-white whitespace-nowrap  bg h-7 rounded-xl ${
                  getColor().bg
                }`}
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
