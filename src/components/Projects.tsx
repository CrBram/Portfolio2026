import { forwardRef, useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import BracketWord from "./ui/BracketWord"
import SidewaysTitle from "./ui/SidewaysTitle"

const projects = [
  { name: "ORIENT CONFIGURATOR" },
  { name: "LES ARCS INTERACTIVE" },
  { name: "ONTZORG" },
  { name: "BLITZPOWER" },
  { name: "ELEVATE TRAINING" },
]

const ProjectItem = forwardRef<HTMLLIElement, { name: string; isActive: boolean }>(
  function ProjectItem({ name, isActive }, ref) {
    return (
      <motion.li
        ref={ref}
        animate={{ opacity: isActive ? 1 : 0.35, scale: isActive ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        className="py-5 md:py-6"
      >
        <p className="text-tx-dark font-bold text-2xl sm:text-4xl md:text-5xl">
          {name}
        </p>
      </motion.li>
    )
  }
)

const Projects = () => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", () => {
    const vhCenter = window.innerHeight / 2
    let best = 0
    let bestDist = Infinity
    for (let i = 0; i < projects.length; i++) {
      const el = itemRefs.current[i]
      if (!el) continue
      const r = el.getBoundingClientRect()
      const center = r.top + r.height / 2
      const d = Math.abs(center - vhCenter)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    }
    setActiveIndex(best)
  })

  return (
    <section className="bg-background min-h-screen">
      <div className="container py-8! md:py-12!">
        <div className="flex gap-12 mb-6">
          <div className="flex items-center gap-4">
            <img src="/images/icons/doc_open.svg" alt="doc" className="w-8 h-8" />
            <BracketWord>TECHNOLOGY</BracketWord>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/icons/doc_closed.svg" alt="doc" className="w-8 h-8" />
            <BracketWord>TYPE</BracketWord>
          </div>
        </div>
        <div className="flex gap-4">
          <SidewaysTitle>PROJECTS</SidewaysTitle>
          <ul>
            {projects.map((p, i) => (
              <ProjectItem
                key={i}
                ref={(el) => { itemRefs.current[i] = el }}
                name={p.name}
                isActive={activeIndex === i}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects