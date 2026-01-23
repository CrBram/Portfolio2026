import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HorizontalProjectScroll from './HorizontalProjectScroll'
import Button from './ui/Button'

interface Project {
  id: number
  title: string
  backgroundImage?: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ORIENT CONFIGURATOR',
    backgroundImage: '/images/projects/orient_background.png',
    link: '#',
  },
  {
    id: 2,
    title: 'LES ARCS',
    backgroundImage: '/images/projects/les-arcs_background.png',
    link: '#',
  },
  {
    id: 3,
    title: 'ONTZORG',
    backgroundImage: '/images/projects/ontzorg_background.jpg',
    link: '#',
  },
]

const Projects2 = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    // Calculate the scroll distance needed (each project takes viewport height)
    const calculateScrollDistance = () => projects.length * window.innerHeight

    // Initialize all project elements with GSAP
    const projectElements = projects.map((_, index) => {
      const element = container.querySelector(`[data-project-index="${index}"]`) as HTMLElement
      if (element) {
        gsap.set(element, { opacity: 0, y: 50 })
      }
      return element
    })

    // Create ScrollTrigger that pins the section
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${calculateScrollDistance()}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Calculate which project should be visible based on scroll progress
        const progress = self.progress
        const projectIndex = Math.min(
          Math.floor(progress * projects.length),
          projects.length - 1
        )
        setCurrentProjectIndex(projectIndex)
      },
    })

    // Animate project transitions with smooth fade
    const triggers: ScrollTrigger[] = []
    projects.forEach((_, index) => {
      const projectElement = projectElements[index]
      if (!projectElement) return

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${calculateScrollDistance()}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const startProgress = index / projects.length
          const endProgress = (index + 1) / projects.length

          let opacity = 0
          let y = 50

          if (progress >= startProgress && progress < endProgress) {
            const localProgress = (progress - startProgress) / (endProgress - startProgress)
            // Fade in during first half, fade out during second half
            if (localProgress < 0.5) {
              opacity = localProgress * 2
              y = 50 - localProgress * 100
            } else {
              opacity = 2 - localProgress * 2
              y = (localProgress - 0.5) * -100
            }
          } else if (progress < startProgress) {
            opacity = 0
            y = 50
          } else {
            opacity = 0
            y = -50
          }

          gsap.set(projectElement, { opacity, y })
        },
      })
      triggers.push(trigger)
    })

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      scrollTrigger.kill()
      triggers.forEach((trigger) => trigger.kill())
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const currentProject = projects[currentProjectIndex]

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-cover bg-center bg-no-repeat bg-background relative overflow-hidden"
      style={{
        backgroundImage: currentProject?.backgroundImage
          ? `url('${currentProject.backgroundImage}')`
          : undefined,
      }}
    >
      <div className="absolute inset-0 bg-background-dark/20"></div>
      <div ref={containerRef} className="h-full w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-project-index={index}
            className="absolute inset-0 flex flex-col justify-between"
            style={{
              pointerEvents: index === currentProjectIndex ? 'auto' : 'none',
            }}
          >
            <div className="pt-24 relative z-10">
              <HorizontalProjectScroll
                text={project.title}
                imageSrc="/images/red_dot.png"
                imageAlt="Dot"
                speed={10}
                duplicates={6}
              />
            </div>
            <div className="container py-8! md:py-12! relative z-10">
              <div className="flex flex-wrap justify-between md:pt-136 pt-120">
                <div className="w-full md:w-auto">
                  <p className="font-share-tech-mono text-tx-dark text-base sm:text-lg md:text-xl">
                    SELECTED PROJECTS
                  </p>
                  <p className="font-micro5 text-primary text-8xl md:text-9xl -mt-6">
                    #{String(project.id).padStart(2, '0')}
                  </p>
                </div>
                <Button
                  className="w-full md:w-auto"
                  text="VIEW PROJECT"
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, '_blank')
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects2