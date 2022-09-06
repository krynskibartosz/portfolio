import { Row } from 'components';
import { BecodeIcon } from 'components/base/Icons/Becode';
import { DigitaluIcon } from 'components/base/Icons/Digitalu';
import { FresheoIcon } from 'components/base/Icons/Fresheo';
import { UtopixIcon } from 'components/base/Icons/Utopix';
import Link from 'next/link';

export type COMPANY = {
  post: string;
  Icon: (e?: any) => JSX.Element;
  className?: string;
  description: JSX.Element;
  date: JSX.Element;
};

type FORMATIONS = COMPANY[];

type COMPANIES = COMPANY[];

export const experiences = (translation: (e?: any) => string): COMPANIES => {
  return [
    {
      Icon: () => <FresheoIcon className=" fill-black dark:fill-white w-80" />,
      post: translation('Leader frontend et graphiste web'),
      className: 'col-span-full selection:bg-[#9abe36]',
      description: (
        <>
          <p>
            {translation(
              "Gestion de la refonte du site web et aide à la maintenance de l'actuel"
            )}
            .
            <Link passHref href="/projects">
              <span
                className={`text-[#9abe36] hover:brightness-125 transition-all duration-300 ease-in-out pl-1 underline cursor-pointer`}
              >
                Découvrir le projet
              </span>
            </Link>
          </p>
        </>
      ),
      date: <p className="text-[#9abe36] text-lg font-medium">2022</p>,
    },
    {
      Icon: () => (
        <DigitaluIcon className="w-80 h-80 max-md:w-60 max-md:h-60" />
      ),
      post: translation('FrontEndDeveloper'),

      className: 'col-span-full selection:!bg-[#448FFF]',

      description: (
        <>
          <p>
            {translation(
              'CreationAndMaintenanceOfSeveralWebAndMobileApplicationsUsingHighPerformanceTechnologies'
            )}
            .
            <Link passHref href="/projects">
              <span className="relative hover:brightness-125 transition-all duration-300 ease-in-out text-transparent pl-1 bg-clip-text cursor-pointer bg-gradient-to-r from-[#448FFF] to-[#F81444] underline">
                Découvrir les projets
                <span className="absolute  left-1 min-h-[1px] max-h-[1px] top-full bg-gradient-to-r text-transparent from-[#448FFF] to-[#F81444]">
                  Découvrir les projets
                </span>
              </span>
            </Link>
          </p>
        </>
      ),
      date: (
        <p className="bg-gradient-to-r  bg-clip-text from-[#448FFF] to-[#F81444] text-transparent text-lg font-medium">
          2021
        </p>
      ),
    },
  ];
};
export const formations = (translation: (e?: any) => string): FORMATIONS => {
  return [
    {
      Icon: () => (
        <UtopixIcon className="w-40 h-40 fill-black dark:fill-white" />
      ),
      post: translation('InternshipInWebDevelopment'),
      className:
        'col-span-6  selection:!bg-gray-900 dark:selection:!bg-purple-500',

      description: (
        <>
          <p>
            {translation('DevelopmentOfAManagementPlatform')}.{' '}
            <a target="_blank" href="https://www.utopix.com/" rel="noreferrer">
              <span
                className={`dark:text-white hover:brightness-125 transition-all duration-300 ease-in-out  underline cursor-pointer`}
              >
                Voir le site
              </span>
            </a>
          </p>
        </>
      ),
      date: <p className=" dark:text-white text-base font-medium">2020</p>,
    },
    {
      Icon: BecodeIcon,
      post: translation('TrainingInWebDevelopment'),

      className: 'col-span-6   selection:!bg-[#5ABEC9]',

      description: (
        <div className="flex-wrap">
          <p>
            {translation(
              '7MonthsTrainingInFrontEndWebDevelopmentAndBackEndDevelopment'
            )}
            .
            <a target="_blank" href="https://becode.org/" rel="noreferrer">
              <span
                className={`text-[#5ABEC9] hover:brightness-125 transition-all duration-300 ease-in-out pl-1 underline cursor-pointer`}
              >
                Découvrir la formation
              </span>
            </a>
          </p>
        </div>
      ),
      date: <p className="text-[#5ABEC9] text-base font-medium">2019</p>,
    },
  ];
};
