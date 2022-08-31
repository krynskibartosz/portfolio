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
        'Bonne connaissance en SEO',
      ],
      img: {
        blur: 'L383nu]n1JBoClEg-B=|0|AC}Y=e',
        url: '/img/skills/code.jpg',
      },
      badges: ['TypeScript', 'NextJs/React', 'React Native', 'Redux'],
      color: 'red',
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
        url: '/img/skills/manette.jpg',
      },
      badges: ['Notion', 'Suite google', 'Loom', 'No code'],
      color: 'yellow',
      direction: 'right',
    },
    {
      name: translation('SoftSkills'),
      description: [
        translation('DemonstratesHumility'),
        translation('AbleToWorkCollaborativelyAndIndependently'),
        translation('ContinueToKeepUpToDateWithTechnologyTrends'),
        translation('SmilingAndWithAZestForLife'),
      ],
      img: {
        blur: 'LrF4a]RjRUohD%t7ouah?1jJRjbW',
        url: '/img/skills/cat.jpg',
      },
      badges: [
        translation('Confidence'),
        translation('Empathy'),
        translation('Friendly'),
        locale === 'fr' ? translation('Reagent') : '',
      ],
      color: 'purple',
      direction: 'left',
    },
    {
      name: `Design`,
      description: [
        translation('AdvancedSkillsInCSSAndItsEcosystem'),
        translation('AdvancedSkillsInResponsiveWebDesign'),
        translation('ProfessionalAndPersonalExperiencesWithDesignerTools'),
      ],
      img: {
        blur: 'LLEVTx4.-;S2~BIV-pof%zVtxus:',
        url: '/img/skills/design.jpg',
      },
      badges: ['Figma', 'UX/UI', 'Communication', 'Minimalisme'],
      color: 'pink',
      direction: 'right',
    },
  ];
};
