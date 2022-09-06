import { useRouter } from 'next/dist/client/router';

export type SKILL = {
  name: string;
  description: string[];
  img: {
    blur: string;
    url: `/${string}`;
  };
  badges: string[] | any[];
  color: string;
  direction: 'left' | 'right';
};

type SKILLS = SKILL[];

export const skills = (translation: (e?: any) => string): SKILLS => {
  const { locale } = useRouter();

  return [
    {
      name: translation('FrameworkAndLibrairies'),
      description: [
        translation(
          'OverTwoyearsOfExperienceDevelopingWebApplicationsUsingTheReactAndJavaScriptEcosystem'
        ),
        translation('MoreThanFiveProjectsMaintainedAndBuiltInLessThanAYear'),
        translation('OneYearInReactNativeMobileApplicationDevelopment'),
        'bonne connaissance en SEO',
      ],
      img: {
        blur: 'L383nu]n1JBoClEg-B=|0|AC}Y=e',
        url: '/img/skills/prog.jpeg',
      },
      badges: ['TypeScript', 'NextJs', 'ReactNative', 'Redux'],
      color: 'green',
      direction: 'left',
    },
    {
      name: translation('ProjectSoftwareManagement'),
      description: [
        translation('AgileAndScrumMethodology'),
        translation('VersionManagementViaGithubOrGitlab'),
        translation('ProfessionalAndPersonalUseOfNotion'),
        translation('GeneralUnderstandingOfLowCodeAndNoCodeTools'),
      ],
      img: {
        blur: 'LLRxbFae]]tRo#SQngwZ}Ms-AMRj',
        url: '/img/skills/managment.jpeg',
      },
      badges: ['Communication', 'Notion', 'SuiteGoogle', 'Loom'],
      color: 'yellow',
      direction: 'right',
    },
    {
      name: translation('SoftSkills'),
      description: [
        translation('DemonstratesHumility'),
        "Caméléon, je m'adapte à tout groupe de personnes et situations",
        translation('AbleToWorkCollaborativelyAndIndependently'),
      ],
      img: {
        blur: 'LrF4a]RjRUohD%t7ouah?1jJRjbW',
        url: '/img/skills/work.jpeg',
      },
      badges: [
        'Caméléon',
        'Minutieux',
        locale === 'fr' ? translation('Reagent') : '',
        'Rigoureux',
        // todo: garder la traduction en anglais et français
      ],
      color: 'purple',
      direction: 'left',
    },
    {
      name: `Conception graphique`,
      description: [
        translation('AdvancedSkillsInCSSAndItsEcosystem'),
        translation('AdvancedSkillsInResponsiveWebDesign'),
        translation('ProfessionalAndPersonalExperiencesWithDesignerTools'),
        translation('Pratique de la conception créative et du remue-méninges'),
      ],
      img: {
        blur: 'LLEVTx4.-;S2~BIV-pof%zVtxus:',
        url: '/img/skills/design.jpg',
      },
      badges: ['Figma', 'UX/UI', 'Morderne', 'Minimalisme'],
      color: 'pink',
      direction: 'right',
    },
  ];
};
