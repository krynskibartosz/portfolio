export type SKILL = {
  name: string;
  description: string[];
  img: {
    blur: string;
    url: `/${string}`;
  };
  badges: string[];
  color: string;
  direction: "left" | "right";
};

type SKILLS = SKILL[];

export const skills = (translation: (e?: any) => string): SKILLS => {
  return [
    {
      name: translation("FrameworkAndLibrairies"),
      description: [
        translation(
          "OverTwoyearsOfExperienceDevelopingWebApplicationsUsingTheReactAndJavaScriptEcosystem"
        ),
        translation("MoreThanFiveProjectsMaintainedAndBuiltInLessThanAYear"),
        translation("OneYearInReactNativeMobileApplicationDevelopment"),
      ],
      img: {
        blur: "L383nu]n1JBoClEg-B=|0|AC}Y=e",
        url: "/img/skills/code.jpg",
      },
      badges: ["React", "React Native", "Redux", "NextJs", "TypeScript"],
      color: "red",
      direction: "left",
    },
    {
      name: translation("ProjectSoftwareManagement"),
      description: [
        translation("AgileAndScrumMethodology"),
        translation("VersionManagementViaGithubOrGitlab"),
        translation("ProfessionalAndPersonalUseOfNotion"),
        translation("GeneralUnderstandingOfLowCodeAndNoCodeTools"),
      ],
      img: {
        blur: "LLRxbFae]]tRo#SQngwZ}Ms-AMRj",
        url: "/img/skills/manette.jpg",
      },
      badges: ["Notion", "Airtable", "Google doc", "Github"],
      color: "yellow",
      direction: "right",
    },
    {
      name: translation("SoftSkills"),
      description: [
        translation("AbleToWorkCollaborativelyAndIndependently"),
        translation("ContinueToKeepUpToDateWithTechnologyTrends"),
        translation("DemonstratesHumility"),
        translation("SmilingAndWithAZestForLife"),
      ],
      img: {
        blur: "LrF4a]RjRUohD%t7ouah?1jJRjbW",
        url: "/img/skills/cat.jpg",
      },
      badges: [
        translation("Confidence"),
        translation("Empathy"),
        translation("Friendly"),
        translation("Reagent"),
      ],
      color: "purple",
      direction: "left",
    },
    {
      name: `UI ${translation("and")} UX`,
      description: [
        translation("AdvancedSkillsInCSSAndItsEcosystem"),
        translation("AdvancedSkillsInResponsiveWebDesign"),
        translation("ProfessionalAndPersonalExperiencesWithDesignerTools"),
        translation("GoodKnowledgeOfUserExperience"),
      ],
      img: {
        blur: "LLEVTx4.-;S2~BIV-pof%zVtxus:",
        url: "/img/skills/design.jpg",
      },
      badges: ["Figma", "Zeplin", "Tailwind", "CSS", "HTML"],
      color: "pink",
      direction: "right",
    },
  ];
};
