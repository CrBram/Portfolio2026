import SidewaysTitle from "./ui/SidewaysTitle"

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
]

const Skills = () => {
  return (
    <section id="skills" className="bg-background-dark">
      <div className="container py-16 md:py-24">
        <div className="py-16 md:py-24">
          <div className="flex gap-4 mb-8 md:mb-0">
            <SidewaysTitle>SKILLS</SidewaysTitle>
            <div className="flex-1">
              {skills.map((skill, skillIndex) => (
                <div key={skill.number} className={`md:flex md:justify-between ${skillIndex > 0 ? "mt-12 md:mt-30" : ""}`}>
                  <div className="w-full md:w-[40%] mb-6 md:mb-0">
                    <div className="flex flex-col">
                      <span className="text-primary font-bold text-sm md:text-base">
                        {skill.number}
                      </span>
                      <h3 className="text-tx-light font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  <div className="w-full md:w-[48%]">
                    <ul className="space-y-4">
                      {skill.technologies.map((tech, techIndex) => {
                        const logoPath = getLogoPath(tech)
                        return (
                          <li 
                            key={tech} 
                            className={`text-tx-light text-base md:text-lg font-share-tech-mono pb-4 flex items-center justify-between ${
                              techIndex !== skill.technologies.length - 1 ? "border-b border-tx-light-subtle" : ""
                            }`}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills