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
  credits?: { name: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "orient-configurator",
    title: "ORIENT CONFIGURATOR",
    backgroundImage: "/images/projects/configurator/configurator_mockup_1.png",
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
      "A web-based 3D configurator for the Orient Bambino series that turns product exploration into an interactive experience. Users move through a scroll-driven story and then customize dials, straps, crowns and indicators in real time in a clean, responsive interface.",
    challenge:
      "The main challenge was delivering high-fidelity 3D models and smooth camera motion in the browser without sacrificing load times or responsiveness across devices.",
    solution:
      "I split the watch into modular GLTF components and used React Three Fiber with Suspense for controlled loading, while Zustand manages configuration state and GSAP powers camera transitions. Heavy assets are only loaded when needed and key models are preloaded strategically, resulting in a minimal, brand-fit UI that stays fast and fluid.",
    images: [
      "/images/projects/configurator/configurator_mockup_1.png",
      "/images/projects/configurator/configurator_mockup_2.png",
      "/images/projects/configurator/configurator_mockup_3.png",
      "/images/projects/configurator/configurator_mockup_4.png",
      "/images/projects/configurator/configurator_mockup_5.png",
    ],
  },
  {
    id: 2,
    slug: "les-arcs",
    title: "LES ARCS",
    backgroundImage: "/images/projects/lesarcs/lesarcs_mockup_1.png",
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
      "An immersive 3D web experience for exploring Les Arcs through a resort overview and village-specific scenes. Visitors navigate the mountains, discover points of interest through cards and voiceovers, and move through a cinematic environment that still feels responsive on the web.",
    challenge:
      "The challenge was to combine large 3D environments, guided camera navigation, particle and post-processing effects and layered audio without losing clarity, performance or usability across devices and routes.",
    solution:
      "I structured the app as route-based scenes with on-demand GLB loading in React Three Fiber and built GSAP-driven camera navigation around reusable presets. Shared React Context manages camera, environment and audio state, while Rapier effects and responsive UI patterns keep the experience cinematic but still intuitive to control.",
    images: [
      "/images/projects/lesarcs/lesarcs_mockup_1.png",
      "/images/projects/lesarcs/lesarcs_mockup_2.png",
      "/images/projects/lesarcs/lesarcs_mockup_3.png",
      "/images/projects/lesarcs/lesarcs_mockup_4.png",
      "/images/projects/lesarcs/lesarcs_mockup_5.png",
    ],
  },
  {
    id: 4,
    slug: "elevate-training",
    title: "ELEVATE TRAINING",
    backgroundImage: "/images/projects/elevate/elevate_mockup_1.png",
    link: "#",
    tags: ["Next.js", "Tailwind", "Shadcn", "Supabase"],
    year: 2024,
    summary:
      "A training platform that helps users create, manage and share structured workout programs. The app separates everyday athletes from coaches so each role sees the tools and permissions that fit their workflow.",
    challenge:
      "The main challenge was designing a simple interface that still supports different roles, sharing rules and access levels without confusing users or leaking data.",
    solution:
      "I built the platform in Next.js with a role-based auth system on Supabase that cleanly separates permissions for athletes and coaches. Each program gets its own shareable URL and visibility rules, so schedules can be created, duplicated and shared confidently while the interface stays lightweight and focused.",
    images: [
      "/images/projects/elevate/elevate_mockup_1.png",
      "/images/projects/elevate/elevate_mockup_2.png",
      "/images/projects/elevate/elevate_mockup_3.png",
      "/images/projects/elevate/elevate_mockup_4.png",
      "/images/projects/elevate/elevate_mockup_5.png",
      "/images/projects/elevate/elevate_mockup_6.png",
      "/images/projects/elevate/elevate_mockup_7.png",
    ],
  },
  {
    id: 5,
    slug: "blitzpower",
    title: "BLITZPOWER",
    backgroundImage:
      "/images/projects/blitzpower/66f6954131cefcc2487b00cb_Monospace_Blitz-1-p-2000.jpg",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2023,
    summary:
      "A distributor portal for a charging-station manufacturer that brings all B2B processes for resellers and installers into one platform. Accounts, product documentation, leads, quotes, orders and invoices are centralized so partners work from a single, consistent source of truth instead of fragmented tools.",
    challenge:
      "Resellers and installers were working across email, Excel and ad-hoc tools, which made quotes easy to lose, orders hard to track and product information scattered. Blitz needed one robust B2B platform that could structure this entire commercial chain without adding extra friction.",
    solution:
      "We designed a role-based account system where companies manage their own users and permissions, and built a knowledge portal that surfaces all product documents and tracks what has actually been seen. Lead and quote workflows were standardized so every request, from the website or a reseller, follows the same defined path with reminders and status updates, while the existing configurator was embedded so all requests are logged uniformly. Orders and invoices live in a clear dashboard with automatic AFAS Profit sync, eliminating double admin and giving Blitz a scalable distribution backbone.",
    images: [
      "/images/projects/blitzpower/66f6954131cefcc2487b00cb_Monospace_Blitz-1-p-2000.jpg",
      "/images/projects/blitzpower/66f69540ba57f15c0869086d_Monospace_Blitz-2-p-2000.jpg",
      "/images/projects/blitzpower/66f6954103a2e69ac59454ed_Monospace_Blitz-3-p-2000.jpg",
      "/images/projects/blitzpower/66f695412e17cb4396706c7f_Monospace_Blitz-4-p-2000.jpg",
      "/images/projects/blitzpower/66f6954142ec0486b9ffa85e_Monospace_Blitz-5-p-2000.jpg",
    ],
    credits: [{ name: "Monospace", url: "https://www.monospace.be/" }],
  },
  {
    id: 6,
    slug: "pironne",
    title: "PIRONNE",
    backgroundImage:
      "/images/projects/pironne/66f69582f4ab7655bebcba9f_Monospace_Pironne-p-2000.jpg",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2023,
    summary:
      "A quote tool for an event venue that reflects the character of Chateau Pironne while radically simplifying the internal offer process. Visitors can explore clear options while the team works in a structured, consistent system.",
    challenge:
      "Pironne’s offer process combined many variables, formulas and bespoke arrangements, making it hard to keep proposals consistent and efficient while still feeling tailor‑made. They needed a system that stayed understandable for visitors but remained workable and maintainable for the team.",
    solution:
      "We first prototyped the full flow—from entering parameters to automatically calculating and assembling quotes—then built a custom Next.js and React application backed by a flexible API. The tool lets the team respond faster, reduce manual work and manage price combinations consistently, while the digital layer aligns with the venue’s identity so more time goes into hospitality and service instead of administration.",
    images: [
      "/images/projects/pironne/66f69582f4ab7655bebcba9f_Monospace_Pironne-p-2000.jpg",
      "/images/projects/pironne/66f695822b98e51ec84cd58a_Monospace_Pironne-1-p-2000.jpg",
      "/images/projects/pironne/66f69582cc4370a99d5ff66e_Monospace_Pironne-3-p-2000.jpg",
      "/images/projects/pironne/66f6958bcc4370a99d5ffd45_Monospace_Pironne-4-p-2000.jpg",
      "/images/projects/pironne/66f6958b44aa2f85f93cc023_Monospace_Pironne-6-p-2000.jpg",
    ],
    credits: [{ name: "Monospace", url: "https://www.monospace.be/" }],
  },
  {
    id: 7,
    slug: "ontzorg",
    title: "ONTZORG",
    backgroundImage:
      "/images/projects/ontzorg/66f695bfb50c77ab9f9f8713_Monospace_ontzorg-2-p-2000.jpg",
    link: "#",
    tags: ["Next.js", "Nodejs", "Prisma", "Material UI"],
    year: 2022,
    summary:
      "Ontzorg is a web application for home nursing where planning, patient records and communication come together in one clear workspace. Nurses see their care tasks at a glance, records are automatically built and shared, and referrers can securely provide information so more time can go to care instead of administration.",
    challenge:
      "The main challenge was translating the fragmented daily reality of home nursing—with loose paperwork, scattered messages and ad‑hoc coordination—into a digital flow that feels natural without limiting the autonomy of practices and nurses.",
    solution:
      "We mapped all processes and built a clear, intuitive user flow on top of a scalable Next.js app and API. Tasks, records, communication and training each received a dedicated place in the system, so the digital layer supports instead of dictates and creates lasting administrative calm.",
    images: [
      "/images/projects/ontzorg/66f695bf868094b3b3f1d9c3_Monospace_ontzorg-p-2000.jpg",
      "/images/projects/ontzorg/66f695bfb50c77ab9f9f8713_Monospace_ontzorg-2-p-2000.jpg",
      "/images/projects/ontzorg/66f695bf0c31ac4eec620a56_Monospace_ontzorg-3-p-2000.jpg",
      "/images/projects/ontzorg/66f695bf3c9d01623c98454f_Monospace_ontzorg-1-p-2000.jpg",
      "/images/projects/ontzorg/66f695bfc0ef651cfaceaa02_Monospace_ontzorg-6-p-2000.jpg",
    ],
    credits: [{ name: "Monospace", url: "https://www.monospace.be/" }],
  },
];
