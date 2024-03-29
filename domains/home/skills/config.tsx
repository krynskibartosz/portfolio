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
      name: translation('home.FrameworkAndLibrairies'),
      description: [
        translation(
          'home.OverTwoyearsOfExperienceDevelopingWebApplicationsUsingTheReactAndJavaScriptEcosystem'
        ),
        translation(
          'home.MoreThanFiveProjectsMaintainedAndBuiltInLessThanAYear'
        ),
        translation('home.OneYearInReactNativeMobileApplicationDevelopment'),
        translation('home.GoodKnowledgeInSEO'),
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
      name: translation('home.ProjectSoftwareManagement'),
      description: [
        translation('home.AgileAndScrumMethodology'),
        translation('home.VersionManagementViaGithubOrGitlab'),
        translation('home.ProfessionalAndPersonalUseOfNotion'),
        translation('home.GeneralUnderstandingOfLowCodeAndNoCodeTools'),
      ],
      img: {
        blur: 'LLRxbFae]]tRo#SQngwZ}Ms-AMRj',
        url: '/img/skills/managment.jpeg',
      },
      badges: [
        translation('home.Communication'),
        'Notion',
        'SuiteGoogle',
        'Loom',
      ],
      color: 'yellow',
      direction: 'right',
    },
    {
      name: translation('home.SoftSkills'),
      description: [
        translation('home.DemonstratesHumility'),
        translation(
          'home.ChameleonLike,ICanAdaptToAnyGroupOfPeopleAndSituations'
        ),
        translation('home.AbleToWorkCollaborativelyAndIndependently'),
      ],
      img: {
        blur: 'LrF4a]RjRUohD%t7ouah?1jJRjbW',
        url: '/img/skills/work.jpeg',
      },
      badges: [
        translation('home.Chameleon'),
        translation('home.Meticulous'),

        translation('home.Rigorous'),
      ],
      color: 'purple',
      direction: 'left',
    },
    {
      name: translation('home.GraphicDesign'),
      description: [
        translation('home.AdvancedSkillsInCSSAndItsEcosystem'),
        translation('home.AdvancedSkillsInResponsiveWebDesign'),
        translation('home.ProfessionalAndPersonalExperiencesWithDesignerTools'),
        translation('home.PracticeCreativeDesignAndBrainstorming'),
      ],
      img: {
        blur: 'LLEVTx4.-;S2~BIV-pof%zVtxus:',
        url: '/img/skills/design.jpg',
      },
      badges: [
        'Figma',
        'UX/UI',
        translation('home.Mordern'),
        translation('home.Minimalisme'),
      ],
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
