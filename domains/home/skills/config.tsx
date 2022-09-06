import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';

type DIRECTION = 'left' | 'right';

export type SKILL = {
  name: string;
  description: string[];
  img: {
    blur: string;
    url: `/${string}`;
  };
  badges: string[];
  color: string;
  direction: DIRECTION;
};

type SKILLS = SKILL[];

export const SkillsContent = (): SKILLS => {
  const { locale } = useRouter();
  const { t: translation } = useTranslation('');
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

// refactor: change this to object pattern
export const getColor = (color: string) => {
  const initialColor = {
    bg: '',
    text: '',
    selection: '',
  };
  switch (color) {
    case 'yellow':
      initialColor.bg = 'bg-yellow-500 selection:bg-yellow-500';
      initialColor.text = 'text-yellow-500 ';
      initialColor.selection = ' selection:bg-yellow-500';
      break;

    case 'green':
      initialColor.bg = 'bg-green-500 selection:bg-green-500';
      initialColor.text = 'text-green-500 ';
      initialColor.selection = ' selection:bg-green-500';
      break;

    case 'purple':
      initialColor.bg = 'bg-purple-500 selection:bg-purple-500';
      initialColor.text = 'text-purple-500 ';
      initialColor.selection = ' selection:bg-purple-500';
      break;

    case 'pink':
      initialColor.bg = 'bg-pink-500 selection:bg-pink-500';
      initialColor.text = 'text-pink-500 ';
      initialColor.selection = 'selection:bg-pink-500';

      break;

    default:
      break;
  }
  return initialColor;
};
