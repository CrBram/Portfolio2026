import SidewaysTitle from "./ui/SidewaysTitle"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const getLogoPath = (tech: string): string => {
  const logoMap: Record<string, string> = {
    "React": "react",
    "Next.js": "nextjs",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "HTML": "html",
    "CSS": "css",
    "Tailwind CSS": "tailwind",
    "Node.js": "nodejs",
    "Git": "git",
    "Vite": "vite",
    "Figma": "figma",
    "UI/UX Design": "uiux",
    "Wireframing": "wireframing",
    "Prototyping": "prototyping",
    "User Research": "user-research",
    "Design Systems": "design-systems",
    "Responsive Design": "responsive-design",
    "Accessibility": "accessibility",
  }
  return logoMap[tech] || ""
}

const skills = [
  {
    number: "01",
    title: "DEVELOPMENT",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Git",
      "Vite",
    ],
  },
  {
    number: "02",
    title: "DESIGN",
    technologies: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    number: "03",
    title: "OTHER",
    technologies: [
      "VS Code",
      "Terminal",
      "Git",
      "GitHub",
      "GitLab",
    ],
  }
]

const Skills = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const skillsSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const handleViewportChange = () => {
      setIsMobile(mediaQuery.matches)
    }

    handleViewportChange()
    mediaQuery.addEventListener("change", handleViewportChange)

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange)
    }
  }, [])

  useEffect(() => {
    const section = skillsSectionRef.current
    if (!section || isMobile) return

    gsap.registerPlugin(ScrollTrigger)

    const steps = skills.length - 1
    setActiveSection(0)

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * Math.max(1, steps)}`,
      pin: true,
      refreshPriority: -1,
      pinSpacing: true,
      scrub: 0.35,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      snap: steps > 0
        ? {
          snapTo: (value) => Math.round(value * steps) / steps,
          duration: { min: 0.25, max: 0.55 },
          delay: 0.12,
          ease: "power2.out",
        }
        : undefined,
      onUpdate: (self) => {
        const nextIndex = Math.min(
          steps,
          Math.max(0, Math.round(self.progress * steps))
        )

        setActiveSection((prev) => (prev === nextIndex ? prev : nextIndex))
      },
    })

    return () => {
      trigger.kill()
    }
  }, [isMobile])

  return (
    <section
      id="skills"
      ref={skillsSectionRef}
      className="bg-background-dark min-h-screen"
    >
      <div className="container py-16 md:py-24 h-full">
        <div className="py-24 md:py-24 h-full">
          <div className="flex gap-4">
            <SidewaysTitle>SKILLS</SidewaysTitle>

            <div className="flex-1 md:flex md:justify-between md:gap-10">
              <div className="md:w-[40%] hidden md:block">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill.number}
                    className={`origin-left transform-gpu will-change-transform transition-all duration-500 ease-out ${skillIndex > 0 ? "mt-2 md:mt-4" : ""
                      } ${activeSection === skillIndex ? "opacity-100 scale-100" : "opacity-35 scale-95"
                      }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-primary font-bold text-sm md:text-base">
                        {skill.number}
                      </span>
                      <h3
                        className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-colors duration-500 ${activeSection === skillIndex
                          ? "text-white"
                          : "text-tx-light-subtle"
                          }`}
                      >
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full md:w-[48%] mt-8 md:mt-0 md:sticky md:top-24 self-start hidden md:block">
                <div
                  className="transition-opacity duration-500"
                >
                  <ul className="space-y-4 pt-2 md:pt-0 max-h-[50vh] overflow-y-auto pr-2 md:max-h-none md:overflow-visible md:pr-0">
                    {skills[activeSection].technologies.map((tech, techIndex, techList) => {
                      const logoPath = getLogoPath(tech)
                      const isLastItem = techIndex === techList.length - 1
                      return (
                        <li
                          key={tech}
                          className={`text-tx-light text-base md:text-lg font-share-tech-mono pb-4 flex items-center justify-between ${isLastItem ? "" : "border-b border-tx-light-subtle"}`}
                        >
                          <span>{tech}</span>
                          {logoPath && (
                            <img
                              src={`/logo/${logoPath}.svg`}
                              alt={tech}
                              className="w-5 h-5 opacity-80 brightness-0 invert"
                            />
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className="w-full md:hidden space-y-10 mt-6">
                {skills.map((skill) => (
                  <div key={`${skill.number}-mobile`}>
                    <div className="flex flex-col mb-4">
                      <span className="text-primary font-bold text-sm">
                        {skill.number}
                      </span>
                      <h3 className="font-bold text-3xl sm:text-4xl text-white">
                        {skill.title}
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {skill.technologies.map((tech, techIndex, techList) => {
                        const logoPath = getLogoPath(tech)
                        const isLastItem = techIndex === techList.length - 1
                        return (
                          <li
                            key={`${skill.number}-${tech}`}
                            className={`text-tx-light text-base font-share-tech-mono pb-4 flex items-center justify-between ${isLastItem ? "" : "border-b border-tx-light-subtle"}`}
                          >
                            <span>{tech}</span>
                            {logoPath && (
                              <img
                                src={`/logo/${logoPath}.svg`}
                                alt={tech}
                                className="w-5 h-5 opacity-80 brightness-0 invert"
                              />
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills