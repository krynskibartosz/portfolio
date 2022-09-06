import { Section } from 'components/base/containers/Containers';
import { useTranslation } from 'next-i18next';

import { COMPANY, experiences, formations } from './config';

export const Experiences = () => {
  const { t } = useTranslation('');

  return (
    <>
      <Section
        className="max-md:px-5"
        title={`${t('MyProfessionalExperiences')} 💼`}
      >
        <div className="grid grid-cols-12 md:gap-x-10 gap-y-10 ">
          {experiences(t).map((el, i) => (
            <Card key={i} el={el} />
          ))}
        </div>
      </Section>
      <Section className="max-md:px-5 pt-2" title={`${t('Ma formation')} 📚`}>
        <div className="grid grid-cols-12 md:gap-x-10 gap-y-10 ">
          {formations(t).map((el, i) => (
            <Card key={i} el={el} />
          ))}
        </div>
      </Section>
    </>
  );
};

// todo: put more spacing on card
const Card = ({
  el: { Icon, post, description, className, date },
}: {
  el: COMPANY;
}) => {
  return (
    <div
      className={`z-10 grid overflow-hidden  max-md:col-span-full h-[400px] max-md:w-full  place-items-center  relative group card ${className}`}
    >
      <div className="absolute z-20 top-5 right-5">{date}</div>
      <Icon className={`w-40 h-40 `} />
      <div className="absolute bottom-0 z-20 w-full h-16 transition-transform duration-500 ease-in-out delay-500 bg-opacity-10 group-hover:-translate-y-16 ">
        <div className="px-5">
          <div className="w-auto mb-2 max-w-max">
            <p className="text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-200 xl:text-xl">
              {post}
            </p>

            <div className="w-0 -translate-x-5 group-hover:w-full ease-in-out transition-all duration-700 h-0.5 bg-gray-200" />
          </div>
          <div className="text-sm md:text-base text-gray-800 transition-opacity duration-300 ease-in-out delay-1000 opacity-0 dark:text-gray-400 group-hover:opacity-100 ">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
