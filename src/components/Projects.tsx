import { useMemo, useState } from "react"
import Chip from "./ui/Chip"
import SidewaysTitle from "./ui/SidewaysTitle"
import { projects } from '@/data/projects'
import { useIsMobile } from "@/hooks/useIsMobile"


const Projects = () => {
  const isMobile = useIsMobile()
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)

  const hoveredProject = projects.find((p) => p.id === hoveredProjectId)
  const activePreviewSrc = hoveredProject?.backgroundImage ?? null

  const previewImages = useMemo(() => {
    const seen = new Set<string>()
    return projects
      .map((p) => p.backgroundImage)
      .filter((src): src is string => Boolean(src))
      .filter((src) => {
        if (seen.has(src)) return false
        seen.add(src)
        return true
      })
  }, [])

  return (
    <section id="projects" className="bg-background h-screen">
      <div className="container py-16! md:py-24!">
        <div className="md:flex justify-between">
          <div className="w-full flex gap-4">
            <SidewaysTitle>PROJECTS</SidewaysTitle>
            {isMobile ? (
              <div className="w-full">
                <div className="w-full divide-y divide-tx-dark">
                  {projects.map((project) => {
                    const tags = project.tags ?? []
                    const maxTags = 2
                    const visibleTags = tags.slice(0, maxTags)
                    const hiddenCount = Math.max(0, tags.length - visibleTags.length)

                    return (
                      <div
                        key={project.id}
                        className="w-full py-2 hover:bg-primary/60 transition-colors duration-100 cursor-pointer focus:outline-none focus-visible:bg-primary/60"
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
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => {
                          setHoveredProjectId((current) =>
                            current === project.id ? null : current
                          )
                        }}
                        role={project.link ? 'link' : undefined}
                        tabIndex={project.link ? 0 : -1}
                      >
                        <div className="text-tx-dark font-share-tech-mono text-xs uppercase tracking-wider opacity-80">
                          {project.year}
                        </div>
                        <div className="mt-1 flex items-center gap-3">
                          <span className="flex-1 truncate text-tx-dark text-base uppercase">
                            {project.title}
                          </span>
                          <img
                            src="/images/icons/arrow.svg"
                            alt=""
                            aria-hidden="true"
                            className="h-3 w-3 opacity-80 shrink-0"
                          />
                        </div>
                        {tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {visibleTags.map((tag) => (
                              <Chip key={tag} content={tag} size="sm" />
                            ))}
                            {hiddenCount > 0 && (
                              <Chip
                                content={`+${hiddenCount}`}
                                size="sm"
                                className="bg-tx-dark-subtle"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
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
                      <th className="text-left text-xs font-normal pb-0.5 w-[10%]">
                        YEAR
                      </th>
                      <th className="text-left text-xs font-normal pb-0.5 w-[5%]">
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-tx-dark">
                    {projects.map((project) => {
                      return (
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
                          onMouseEnter={() => setHoveredProjectId(project.id)}
                          onMouseLeave={() => {
                            setHoveredProjectId((current) =>
                              current === project.id ? null : current
                            )
                          }}
                          role={project.link ? 'link' : undefined}
                          tabIndex={project.link ? 0 : -1}
                        >
                          <td className="pl-4 py-4 pr-4 text-tx-dark text-sm sm:text-base uppercase">
                            <span className="block w-full truncate">
                              {project.title}
                            </span>
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
                          <td className="py-4 pr-2 text-left">
                            <img
                              src="/images/icons/arrow.svg"
                              alt=""
                              aria-hidden="true"
                              className="ml-auto h-3 w-3 opacity-80"
                            />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>

        <div
          className={`pointer-events-none fixed inset-x-0 bottom-6 md:bottom-8 z-20 transition-[opacity,transform] duration-200 ease-out ${activePreviewSrc
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0'
            }`}
          aria-hidden="true"
        >
          <div className="container flex justify-end pr-4 md:pr-8">
            <div className="relative w-126 h-96 bg-background-dark-subtle overflow-hidden">
              {previewImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="eager"
                  className={`absolute inset-0 h-full w-full object-cover transform-gpu transition-[transform,opacity] duration-300 ease-out ${activePreviewSrc === src
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-[1.03]'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects