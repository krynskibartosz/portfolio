import { Section } from "components/base/containers/Containers";

import useTranslation from "next-translate/useTranslation";
import { COMPANY, experiences } from "./config";

export const Experiences = () => {
  const { t } = useTranslation("home");

  return (
    <Section
      className="max-md:px-5"
      title={`${t("MyProfessionalExperiences")} 💼`}
    >
      <div className="grid grid-cols-12 md:gap-x-10 gap-y-10 ">
        {experiences(t).map((el) => (
          <Card el={el} />
        ))}
      </div>
    </Section>
  );
};

const Card = ({
  el: { Icon, post, description, className },
}: {
  el: COMPANY;
}) => {
  return (
    <div
      className={`z-10 grid overflow-hidden  max-md:col-span-full h-[350px] max-md:w-full place-items-center  relative group card ${className}`}
    >
      <Icon className={`w-40 h-40 `} />
      <div className="absolute bottom-0 z-20 w-full h-10 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
        <div className="px-5">
          <div className="w-auto mb-2 max-w-max">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              {post}
            </p>

            <div className="w-0 -translate-x-5 group-hover:w-full ease-in-out transition-all duration-700 h-0.5 bg-gray-200" />
          </div>
          <p className="text-sm text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
