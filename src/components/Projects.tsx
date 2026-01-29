import Chip from "./ui/Chip"
import SidewaysTitle from "./ui/SidewaysTitle"
import { projects } from '@/data/projects'


const Projects = () => {
  return (
    <section id="projects" className="bg-background h-screen">
      <div className="container py-16! md:py-24!">
        <div className="md:flex justify-between">
          <div className="w-full flex gap-4">
            <SidewaysTitle>PROJECTS</SidewaysTitle>
            <div className="mt-2">
              <table className="w-full table-fixed divide-y">
                <thead>
                  <tr className="text-tx-dark font-share-tech-mono text-xs sm:text-sm uppercase tracking-wider">
                    <th className="pl-4 text-left text-xs font-normal pb-0.5 w-[30%]">
                      PROJECT NAME
                    </th>
                    <th className="text-left text-xs font-normal pb-0.5 w-[55%]">
                      TAGS
                    </th>
                    <th className="text-left text-xs font-normal pb-0.5 w-[12%]">
                      YEAR
                    </th>
                    <th className="text-right text-xs font-normal pb-0.5 w-[3%]">
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-tx-dark">
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="align-middle hover:bg-primary/60 transition-colors duration-100 cursor-pointer"
                      onClick={() => {
                        if (project.link) window.open(project.link, '_blank')
                      }}
                      onKeyDown={(e) => {
                        if (!project.link) return
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          window.open(project.link, '_blank')
                        }
                      }}
                      role={project.link ? 'link' : undefined}
                      tabIndex={project.link ? 0 : -1}
                    >
                      <td className="pl-4 py-4 pr-4 text-tx-dark text-sm sm:text-base uppercase">
                        {project.title}
                      </td>
                      <td className="py-4 pr-4 text-tx-dark text-sm sm:text-base">
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <Chip key={tag} content={tag} size="sm" />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 text-left text-tx-dark text-sm sm:text-base">
                        {project.year}
                      </td>
                      <td className="py-4 pr-2 text-right">
                        <img
                          src="/images/icons/arrow.svg"
                          alt=""
                          aria-hidden="true"
                          className="ml-auto h-3 w-3 opacity-80"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects