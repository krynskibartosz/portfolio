import { BecodeIcon } from 'components/base/Icons/Becode';
import { DigitaluIcon } from 'components/base/Icons/Digitalu';
import { FresheoIcon } from 'components/base/Icons/Fresheo';
import { UtopixIcon } from 'components/base/Icons/Utopix';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export type EXPERIENCE = {
  post: string;
  className?: string;
  Icon: () => JSX.Element;
  Description: JSX.Element;
  Date: JSX.Element;
};

type FORMATIONS = EXPERIENCE[];

type COMPANIES = EXPERIENCE[];

export const ExperiencesCardContent = (): COMPANIES => {
  const { t: translation } = useTranslation('');

  return [
    {
      Icon: () => <FresheoIcon className=" fill-white w-80" />,
      post: translation('Leader frontend et graphiste'),
      className:
        'col-span-full  cardNew from-[#9abe36] to-green-800  selection:bg-[#9abe36]',
      Description: (
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
      Date: <p className="text-white text-lg font-medium">2022</p>,
    },
    {
      Icon: () => (
        <DigitaluIcon className="w-80 h-80 max-md:w-60 max-md:h-60" />
      ),
      post: translation('home.FrontEndDeveloper'),

      className:
        'col-span-full  cardNew rounded-lg from-[#448FFF] to-[#F81444] selection:!bg-[#448FFF]',

      Description: (
        <>
          <p>
            {translation(
              'home.CreationAndMaintenanceOfSeveralWebAndMobileApplicationsUsingHighPerformanceTechnologies'
            )}
            .
            <Link passHref href="/projects">
              <span className="relative hover:brightness-125 brightness-110 transition-all duration-300 ease-in-out text-[#448FFF]  pl-1  cursor-pointer   underline">
                Découvrir les projets
              </span>
            </Link>
          </p>
        </>
      ),
      Date: <p className="text-white text-lg font-medium">2021</p>,
    },
  ];
};
export const FormationsCardContent = (): FORMATIONS => {
  const { t: translation } = useTranslation('');
  return [
    {
      Icon: () => <UtopixIcon className="w-40 h-40 fill-white" />,
      post: translation('home.InternshipInWebDevelopment'),
      className:
        'col-span-6 cardNew from-[#010101] to-[#1D1D1D] selection:!bg-gray-900 dark:selection:!bg-purple-500',

      Description: (
        <>
          <p>
            {translation('home.DevelopmentOfAManagementPlatform')}.{' '}
            <a target="_blank" href="https://www.utopix.com/" rel="noreferrer">
              <span className="relative hover:brightness-125 transition-all duration-300 ease-in-out text-transparent pl-1 bg-clip-text cursor-pointer bg-gradient-to-r from-gray-600 to-white underline">
                Voir le site
                <span className="absolute  left-1 min-h-[1px] max-h-[1px] top-full bg-gradient-to-r text-transparent from-gray-600 to-white">
                  Voir le site
                </span>
              </span>
            </a>
          </p>
        </>
      ),
      Date: <p className=" text-white text-base font-medium">2020</p>,
    },
    {
      Icon: () => <BecodeIcon className="" />,
      post: translation('home.TrainingInWebDevelopment'),

      className:
        'col-span-6 cardNew from-[#5ABEC9] to-blue-900 selection:!bg-[#5ABEC9]',

      Description: (
        <div className="flex-wrap">
          <p>
            {translation(
              'home.7MonthsTrainingInFrontEndWebDevelopmentAndBackEndDevelopment'
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
      Date: <p className="text-white text-base font-medium">2019</p>,
    },
  ];
};
