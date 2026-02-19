export interface Project {
  id: number;
  slug: string;
  title: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  link?: string;
  bgDark?: boolean;
  tags?: string[];
  selected?: boolean;
  year: number;
  summary?: string;
  challenge?: string;
  solution?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "orient-configurator",
    title: "ORIENT CONFIGURATOR",
    backgroundImage: "/images/projects/orient_background.png",
    backgroundVideo: "/videos/orient_preview_video.mp4",
    link: "https://orient-configurator.vercel.app/",
    tags: ["React", "Tailwind", "TypeScript", "Three.js"],
    selected: true,
    year: 2025,
    summary:
      "A product configurator focused on visual clarity and smooth interactions for selecting complex options. A product configurator focused on visual clarity and smooth interactions for selecting complex options.A product configurator focused on visual clarity and smooth interactions for selecting complex options.",
    challenge:
      "Translate technical product combinations into a user flow that feels simple and responsive.",
    solution:
      "Built a guided React interface with performant rendering and clear step-by-step visual feedback.",
    images: [
      "/images/projects/orient_background.png",
      "/images/projects/les-arcs_background.png",
      "/images/projects/les-arcs_background.png",
      "/images/projects/orient_background.png",
    ],
  },
  {
    id: 2,
    slug: "les-arcs",
    title: "LES ARCS",
    backgroundImage: "/images/projects/les-arcs_background.png",
    backgroundVideo: "/videos/les-arcs_preview_video.mp4",
    link: "https://les-arcs-interactive.vercel.app/",
    bgDark: true,
    tags: ["React", "Tailwind", "TypeScript", "Three.js", "Rapier"],
    selected: true,
    year: 2025,
    summary:
      "An interactive web experience that combines motion, visuals, and storytelling in a performant frontend.",
    challenge:
      "Maintain fluid performance while combining advanced visuals and interaction-heavy sections.",
    solution:
      "Used optimized rendering techniques, lightweight UI architecture, and focused motion design.",
  },
  {
    id: 4,
    slug: "elevate-training",
    title: "ELEVATE TRAINING",
    backgroundImage:
      "/images/projects/elevate/Screenshot 2026-02-19 222815.png",
    link: "#",
    tags: ["Next.js", "Tailwind", "Shadcn", "Supabase"],
    year: 2024,
    summary:
      "A training platform concept centered on structured content, progress tracking, and clean UX.",
    images: [
      "/images/projects/elevate/Screenshot 2026-02-19 222815.png",
      "/images/projects/elevate/Screenshot 2026-02-19 222838.png",
      "/images/projects/elevate/Screenshot 2026-02-19 222908.png",
      "/images/projects/elevate/Screenshot 2026-02-19 222941.png",
      "/images/projects/elevate/Screenshot 2026-02-19 223023.png",
      "/images/projects/elevate/Screenshot 2026-02-19 223048.png",
    ],
  },
  {
    id: 5,
    slug: "blitzpower",
    title: "BLITZPOWER",
    backgroundImage: "/images/projects/orient_background.png",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2023,
    summary:
      "A web app concept for operations and workflow management with an emphasis on speed and clarity.",
  },
  {
    id: 6,
    slug: "pironne",
    title: "PIRONNE",
    backgroundImage: "/images/projects/les-arcs_background.png",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2023,
    summary:
      "A business-focused platform concept with practical dashboards and data-driven features.",
  },
  {
    id: 7,
    slug: "ontzorg",
    title: "ONTZORG",
    backgroundImage: "/images/projects/orient_background.png",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2022,
    summary:
      "A service-oriented application concept designed to streamline communication and coordination.",
  },
];
