import { useState } from "react"
import Chip from "./ui/Chip"
import SidewaysTitle from "./ui/SidewaysTitle"
import { projects } from '@/data/projects'
import { useIsMobile } from "@/hooks/useIsMobile"


const Projects = () => {
  const isMobile = useIsMobile()
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

  const hoveredProject = projects.find((p) => p.id === hoveredProjectId)
  const activePreviewSrc = hoveredProject?.backgroundImage ?? null

  const previewImages = (() => {
    const seen = new Set<string>()
    return projects
      .map((p) => p.backgroundImage)
      .filter((src): src is string => Boolean(src))
      .filter((src) => {
        if (seen.has(src)) return false
        seen.add(src)
        return true
      })
  })()

  const allTags = (() => {
    const tagSet = new Set<string>()
    projects.forEach((project) => {
      project.tags?.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet)
  })()

  const filteredProjects = (() => {
    if (selectedTags.length === 0) return projects

    return projects.filter((project) => {
      const tags = project.tags ?? []
      if (tags.length === 0) return false
      return tags.some((tag) => selectedTags.includes(tag))
    })
  })()

  const toggleFilters = () => {
    setFiltersOpen((prev) => {
      const next = !prev
      if (!next) {
        setSelectedTags([])
      }
      return next
    })
  }

  return (
    <section id="all-projects" className="bg-background min-h-[55rem] md:h-screen">
      <div className="container py-16! md:py-24!">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-y-3 md:gap-x-8 flex-wrap">
          <button
            type="button"
            onClick={toggleFilters}
            className="w-fit cursor-pointer flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/80"
          >
            <img
              src={filtersOpen ? "/images/icons/doc_open.svg" : "/images/icons/doc_closed.svg"}
              alt={filtersOpen ? "Hide tag filters" : "Show tag filters"}
              className="h-8 w-8"
            />
            <span className="font-share-tech-mono hover:text-primary transition-colors duration-100">
              <span className="text-primary">[</span>
              TAGS
              <span className="text-primary">]</span>
            </span>
          </button>
          {filtersOpen && (
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSelectedTags((current) =>
                        current.includes(tag)
                          ? current.filter((t) => t !== tag)
                          : [...current, tag]
                      )
                    }}
                    className="rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/80 cursor-pointer"
                  >
                    <Chip
                      content={tag}
                      size="sm"
                      className={`transition-opacity ${isSelected ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>
        <div className="md:flex justify-between">
          <div className="w-full flex gap-4">
            <SidewaysTitle>PROJECTS</SidewaysTitle>
            <div className="w-full max-h-[70vh] overflow-y-auto pr-2">
              {isMobile ? (
                <div className="w-full divide-y divide-tx-dark">
                  {filteredProjects.map((project) => {
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
                      {filteredProjects.map((project) => {
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
        </div>

        <div
          className={`hidden md:block pointer-events-none fixed inset-x-0 md:bottom-12 z-20 transition-[opacity,transform] duration-200 ease-out ${activePreviewSrc
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