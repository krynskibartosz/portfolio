import { Column, Section, Image, Row, Blob } from "components";
import useTranslation from "next-translate/useTranslation";
import useNextBlurhash from "use-next-blurhash";
import { SKILL, skills } from "./config";

export const Skills = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative w-full mx-auto max-w-7xl">
      <div className="absolute bottom-0 ">
        <div className="relative h-[450px] w-[410px]">
          <Blob className="top-0 w-64 h-64 bg-yellow-400 -left-4 dark:opacity-40" />
          <Blob className="top-0 w-64 h-64 bg-purple-400 -right-4 animation-delay-2000 dark:opacity-40" />
          <Blob className="left-0 w-64 h-64 bg-pink-400 dark:opacity-90 animation-delay-4000 -bottom-5" />
        </div>
      </div>
      <Section className="max-md:px-5" title={`${t("ProfessionalSkills")} 💪🏻`}>
        <Column className="gap-y-5 ">
          {skills(t).map((el, i) => (
            <Card key={i} el={el} />
          ))}
        </Column>
      </Section>
    </div>
  );
};

//todo: add more bubble on mobile

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

  const sortedBadges = [...badges];

  return (
    <div
      className={`z-10 w-full max-md:h-min h-[250px] group overflow-hidden card`}
    >
      <Row className="w-full h-full ">
        {direction === "left" && (
          <div className="relative group-hover:brightness-100 brightness-90    w-[400px] max-md:hidden h-full overflow-hidden transition-all ease-in-out duration-300">
            <Image
              placeholder="blur"
              blurDataURL={blurDataUrl}
              objectFit="cover"
              layout="fill"
              src={url}
              className="transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
            />
          </div>
        )}

        <Column className="justify-between w-full h-full p-5 max-md:p-4">
          <Column className="">
            <Row className="w-full mb-2 max-md:mb-3" positionY="center">
              <div
                className={`relative  overflow-hidden rounded-full cursor-pointer mr-2 w-10 h-10 min-w-[40px] min-h-[40px] md:hidden`}
              >
                <Image
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-full"
                  alt=""
                  src={url}
                />
              </div>
              <p className="text-xl font-semibold text-gray-900 max-md:text-lg dark:text-gray-300">
                {name}
              </p>
            </Row>
            <ul className="flex flex-col pl-5 ">
              {description?.map((el, i) => (
                <li key={i} className={`${getColor().text} list-disc`}>
                  <p className="text-xs text-gray-800 -translate-y-[1.3px] dark:text-gray-400">
                    {el}.
                  </p>
                </li>
              ))}
            </ul>
          </Column>
          <Row as="ul" className="gap-x-2 max-md:pt-5">
            {sortedBadges?.map(
              (el, i) =>
                i < 4 &&
                el.length > 0 && (
                  <Row
                    as="li"
                    key={i}
                    positionY="center"
                    className={`px-3 text-xs text-white whitespace-nowrap  bg h-7 rounded-xl ${
                      getColor().bg
                    }`}
                  >
                    {el}
                  </Row>
                )
            )}
          </Row>
        </Column>
        {direction === "right" && (
          <div
            className="relative 
          group-hover:brightness-100 transition-all ease-in-out duration-300 brightness-90 overflow-hidden    w-[400px] max-md:hidden h-full"
          >
            <Image
              placeholder="blur"
              blurDataURL={blurDataUrl}
              objectFit="cover"
              layout="fill"
              className="transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105"
              src={url}
              alt=""
            />
          </div>
        )}
      </Row>
    </div>
  );
};
