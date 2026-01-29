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
                    <th className="text-left text-xs font-normal pb-0.5 w-[30%]">
                      PROJECT NAME
                    </th>
                    <th className="text-left text-xs font-normal pb-0.5 w-[60%]">
                      TAGS
                    </th>
                    <th className="text-left text-xs font-normal pb-0.5 w-[10%]">
                      YEAR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-tx-dark">
                  {projects.map((project) => (
                    <tr key={project.id} className="align-middle">
                      <td className="py-4 pr-4 text-tx-dark text-sm sm:text-base uppercase">
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