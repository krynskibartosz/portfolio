import { BecodeIcon } from "components/base/Icons/Becode";
import { DigitaluIcon } from "components/base/Icons/Digitalu";
import { UtopixIcon } from "components/base/Icons/Utopix";

export type COMPANY = {
  post: string;
  description: string;
  Icon: (e?: any) => JSX.Element;
  className?: string;
};

type COMPANIES = COMPANY[];

export const experiences = (translation: (e?: any) => string): COMPANIES => {
  return [
    {
      Icon: () => (
        <DigitaluIcon className="w-80 h-80 max-md:w-60 max-md:h-60" />
      ),
      post: translation("FrontEndDeveloper"),
      description: translation(
        "CreationAndMaintenanceOfSeveralWebAndMobileApplicationsUsingHighPerformanceTechnologies"
      ),
      className: "col-span-full",
    },
    {
      Icon: () => (
        <UtopixIcon className="w-40 h-40 fill-black dark:fill-white" />
      ),
      post: translation("InternshipInWebDevelopment"),
      description: translation("DevelopmentOfAManagementPlatform"),
      className: "col-span-6",
    },
    {
      Icon: BecodeIcon,
      post: translation("TrainingInWebDevelopment"),
      description: translation(
        "7MonthsTrainingInFrontEndWebDevelopmentAndBackEndDevelopment"
      ),
      className: "col-span-6",
    },
  ];
};
