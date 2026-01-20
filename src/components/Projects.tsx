import SidewaysTitle from "./ui/SidewaysTitle"

const projects = [
  {
    name: "ORIENT CONFIGURATOR"
  },
  {
    name: "LES ARCS INTERACTIVE"
  },
  {
    name: "ONTZORG"
  },
  {
    name: "BLITZPOWER"
  },
  {
    name: "ELEVATE TRAINING"
  }
]

const Projects = () => {
  return (
    <section className="bg-background min-h-screen">
      <div className="container py-8! md:py-12!">
        <div className="flex gap-4">
          <SidewaysTitle>PROJECTS</SidewaysTitle>
          <div>
            <ul>
              {projects.map((p, i) => (
                <li key={i}>
                  <p className={`${i != 0 ? "text-tx-dark-subtle" : ""} text-tx-dark font-bold text-2xl sm:text-4xl md:text-5xl mb-2`}>{p.name}</p>
                </li>
              )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects