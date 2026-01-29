interface Project {
  id: number;
  title: string;
  backgroundImage?: string;
  link?: string;
  bgDark?: boolean;
  tags?: string[];
  selected?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ORIENT CONFIGURATOR",
    backgroundImage: "/images/projects/orient_background.png",
    link: "https://orient-configurator.vercel.app/",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Three.js"],
    selected: true,
  },
  {
    id: 2,
    title: "LES ARCS",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "https://les-arcs-interactive.vercel.app/",
    bgDark: true,
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Three.js"],
    selected: true,
  },
  {
    id: 3,
    title: "ORIENT CONFIGURATOR",
    backgroundImage: "/images/projects/orient_background.png",
    link: "#",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Three.js"],
    selected: true,
  },
];
