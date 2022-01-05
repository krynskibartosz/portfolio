import { Section } from "components/base/containers/Containers";
import { BecodeIcon } from "components/layout/Icons/Becode";
import { DigitaluIcon } from "components/layout/Icons/Digitalu";

import { UtopixIcon } from "components/layout/Icons/Utopix";
import useTranslation from "next-translate/useTranslation";

export const Experiences = () => {
  const { t } = useTranslation("home");
  return (
    <Section title={`${t("MyProfessionalExperiences")} 💼`}>
      <div className="grid grid-cols-12 gap-10 ">
        <CompanyCard
          Icon={DigitaluIcon}
          title={t("FrontEndDeveloper")}
          description={t(
            "CreationAndMaintenanceOfSeveralWebAndMobileApplicationsUsingHighPerformanceTechnologies"
          )}
          iconClassName="!w-80 !h-80 max-md:w-60 max-md:!h-60 dark:fill-white fill-black"
          className="col-span-full"
        />
        <CompanyCard
          Icon={UtopixIcon}
          title={t("InternshipInWebDevelopment")}
          description={t("DevelopmentOfAManagementPlatform")}
          className="col-span-6 dark:fill-white fill-black"
        />
        <CompanyCard
          Icon={BecodeIcon}
          title={t("TrainingInWebDevelopment")}
          description={t(
            "7MonthsTrainingInFrontEndWebDevelopmentAndBackEndDevelopment"
          )}
          className="col-span-6 "
        />
      </div>
    </Section>
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
    <Card className={`${className}`}>
      <Icon className={`w-40 h-40 ${iconClassName}`} />
      <div className="absolute bottom-0 z-20 w-full h-10 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
        <div className="px-5">
          <div className="w-auto mb-2 max-w-max">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              {title}
            </p>

            <div className="w-0 -translate-x-5 group-hover:w-full ease-in-out transition-all duration-700 h-0.5 bg-gray-200" />
          </div>
          <p className="text-sm text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
