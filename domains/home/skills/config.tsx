export type SKILL = {
  name: string;
  description: string;
  img: {
    blur: string;
    url: `/${string}`;
  };
  badges: string[];
  color: `bg-${string}`;
  direction: "left" | "right";
};

type SKILLS = SKILL[];

export const skills = (translation: (e?: any) => string): SKILLS => {
  return [
    {
      name: translation("FrameworkAndLibrairies"),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus, quos optio officia quo placeat ex temporibus voluptate aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus magni ratione nostrum!",
      img: {
        blur: "L383nu]n1JBoClEg-B=|0|AC}Y=e",
        url: "/img/skills/code.jpg",
      },
      badges: ["React", "Redux", "NextJs", "TypeScript", "Tailwind"],
      color: "bg-red-500",
      direction: "left",
    },
    {
      name: translation("ProjectSoftwareManagement"),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus, quos optio officia quo placeat ex temporibus voluptate aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus magni ratione nostrum!",
      img: {
        blur: "LLRxbFae]]tRo#SQngwZ}Ms-AMRj",
        url: "/img/skills/manette.jpg",
      },
      badges: ["Notion", "Airtable", "Jira", "Google doc"],
      color: "bg-yellow-500",
      direction: "right",
    },
    {
      name: translation("TeamWork"),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus, quos optio officia quo placeat ex temporibus voluptate aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus magni ratione nostrum!",
      img: {
        blur: "LrF4a]RjRUohD%t7ouah?1jJRjbW",
        url: "/img/skills/cat.jpg",
      },
      badges: ["Confidence", "Empathy", "Friendly", "Responsiveness"],
      color: "bg-purple-500",
      direction: "left",
    },
    {
      name: `UI ${translation("and")} UX`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus, quos optio officia quo placeat ex temporibus voluptate aperiam quisquam laborum quia ullam nam laudantium. Minima ducimus magni ratione nostrum!",
      img: {
        blur: "LLEVTx4.-;S2~BIV-pof%zVtxus:",
        url: "/img/skills/design.jpg",
      },
      badges: ["Figma", "Zeplin", "CSS", "HTML"],
      color: "bg-pink-500",
      direction: "right",
    },
  ];
};
