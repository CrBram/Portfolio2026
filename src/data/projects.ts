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
    tags: [
      "React",
      "Tailwind",
      "TypeScript",
      "Three.js",
      "Vite",
      "GSAP",
      "Zustand",
      "Blender",
      "Figma",
    ],
    selected: true,
    year: 2025,
    summary:
      "A modern interactive 3D configurator for the Orient Bambino series where users explore a scroll-based product showcase and then customize dial, strap, crown, and indicator options in real time. Built with React, TypeScript, React Three Fiber, and Zustand, it combines realistic model rendering, smooth camera motion, and a responsive UI into a seamless product experience.",
    challenge:
      "The key challenge was balancing visual fidelity and runtime performance in the browser: detailed Blender assets (especially straps) are expensive to load, while the configurator still needed fluid camera transitions, instant visual feedback, and a consistent experience across desktop and mobile.",
    solution:
      "I split the watch into modular GLTF components, used React Three Fiber with Suspense for model loading, managed selections and states with Zustand, and animated transitions with GSAP plus frame-based camera hooks. Heavy assets are loaded only when relevant hotspots are opened, and key models are preloaded strategically to keep interactions smooth without sacrificing detail. I went for a minimalistic and elegant design that is easy to use and navigate and fits the branding of the watch itself.",
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
    tags: [
      "React",
      "Tailwind",
      "TypeScript",
      "Three.js",
      "Rapier",
      "Blender",
      "Figma",
      "GSAP",
      "React Context",
    ],
    selected: true,
    year: 2025,
    summary:
      "An immersive 3D web experience for exploring Les Arcs through a navigable resort overview and village-specific scenes (Arc 1600, Arc 1800, Arc 2000, and Vallandry). Users discover points of interest via interactive cards and voiceovers, with smooth camera transitions, ambient audio, Rapier-powered physics effects, and responsive controls across desktop and mobile.",
    challenge:
      "The core challenge was combining large 3D environments, animated camera navigation, particle and post-processing effects, and layered audio without hurting performance or clarity. The experience also had to remain intuitive across multiple routes/scenes while preserving smooth interaction on different device sizes.",
    solution:
      "I structured the app as route-based scenes with on-demand GLB loading, used React Three Fiber + Suspense for rendering and asset loading, and built GSAP-driven camera navigation around reusable target presets. React Context centralizes camera, environment, and sound state, while Rapier-powered effects, responsive UI patterns, and controlled Orbit interactions keep the experience both cinematic and usable.",
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
