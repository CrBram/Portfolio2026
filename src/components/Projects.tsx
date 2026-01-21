import { useRef, useState } from "react"
import ProjectItem from "./ProjectItem"
import BracketWord from "./ui/BracketWord"
import SidewaysTitle from "./ui/SidewaysTitle"

const projects = [
  { name: "ORIENT CONFIGURATOR" },
  { name: "LES ARCS INTERACTIVE" },
  { name: "ONTZORG" },
  { name: "BLITZPOWER" },
  { name: "ELEVATE TRAINING" },
]

const Projects = () => {
  const distances = useRef<number[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const reportDistance = (index: number, distance: number) => {
    distances.current[index] = distance

    const best = distances.current.reduce(
      (acc, d, i) => (d < acc.dist ? { index: i, dist: d } : acc),
      { index: activeIndex, dist: Infinity }
    )

    if (best.index !== activeIndex) {
      setActiveIndex(best.index)
    }
  }

  return (
    <section className="bg-background min-h-screen">
      <div className="container py-8 md:py-12">
        <div className="flex gap-12 mb-6">
          <div className="flex items-center gap-4">
            <img src="/images/icons/doc_open.svg" className="w-8 h-8" />
            <BracketWord>TECHNOLOGY</BracketWord>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/icons/doc_closed.svg" className="w-8 h-8" />
            <BracketWord>TYPE</BracketWord>
          </div>
        </div>

        <div className="flex gap-4">
          <SidewaysTitle>PROJECTS</SidewaysTitle>

          <ul>
            {projects.map((p, i) => (
              <ProjectItem
                key={p.name}
                name={p.name}
                index={i}
                isActive={activeIndex === i}
                reportDistance={reportDistance}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
