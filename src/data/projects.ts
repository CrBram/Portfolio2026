interface Project {
  id: number;
  title: string;
  backgroundImage?: string;
  link?: string;
  bgDark?: boolean;
  tags?: string[];
  selected?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ORIENT CONFIGURATOR",
    backgroundImage: "/images/projects/orient_background.png",
    link: "https://orient-configurator.vercel.app/",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Three.js"],
    selected: true,
    year: 2025,
  },
  {
    id: 2,
    title: "LES ARCS",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "https://les-arcs-interactive.vercel.app/",
    bgDark: true,
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Three.js", "Rapier"],
    selected: true,
    year: 2025,
  },
  {
    id: 4,
    title: "ELEVATE TRAINING",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "#",
    tags: ["Next.js", "Tailwind", "Shadcn", "Supabase"],
    year: 2024,
  },
  {
    id: 5,
    title: "BLITZPOWER",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2023,
  },
  {
    id: 6,
    title: "PIRONNE",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2023,
  },
  {
    id: 7,
    title: "ONTZORG",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2022,
  },
];
