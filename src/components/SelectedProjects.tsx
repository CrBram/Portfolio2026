import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HorizontalProjectScroll from './HorizontalProjectScroll'
import Button from './ui/Button'
import { projects as projectsData } from '@/data/projects'
import Chip from './ui/Chip'

const projects = projectsData.filter((project) => project.selected)

gsap.registerPlugin(ScrollTrigger)

const MD_BREAKPOINT = 768

const SelectedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isMdOrLarger, setIsMdOrLarger] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`)
    setIsMdOrLarger(mq.matches)
    const handler = () => setIsMdOrLarger(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (!isMdOrLarger) return

    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    let viewportWidth = window.innerWidth
    let totalWidth = (projects.length - 1) * viewportWidth

    const calculateScrollDistance = () =>
      projects.length * window.innerHeight

    const snapPoints = projects.map(
      (_, i) => i / (projects.length - 1)
    )

    gsap.set(container, { x: 0 })

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${calculateScrollDistance()}`,
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,

      snap: {
        snapTo: (progress) => {
          const snapDistance = 1 / (projects.length - 1)

          let closestSnap = 0
          let minDistance = Infinity

          snapPoints.forEach((snap) => {
            const distance = Math.abs(snap - progress)
            if (distance < minDistance) {
              minDistance = distance
              closestSnap = snap
            }
          })

          // Only snap if we've scrolled at least 50% of the way to the next snap point
          const threshold = snapDistance * 0.5
          if (minDistance < threshold) {
            return closestSnap
          }

          // Don't snap if we're in the middle zone
          return progress
        },
        duration: { min: 0.5, max: 0.9 },
        ease: 'power2.out',
        delay: 0.15,
        directional: false,
      },

      onRefreshInit: () => {
        viewportWidth = window.innerWidth
        totalWidth = (projects.length - 1) * viewportWidth
      },

      onUpdate: (self) => {
        const progress = self.progress

        gsap.set(container, {
          x: -progress * totalWidth,
          force3D: true,
        })

        const projectIndex = Math.round(
          progress * (projects.length - 1)
        )

        setCurrentProjectIndex(projectIndex)
      },
    })

    let resizeTimeoutId: ReturnType<typeof setTimeout> | null = null

    const handleResize = () => {
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId)
      }
      resizeTimeoutId = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 180)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId)
      }
      window.removeEventListener('resize', handleResize)
      scrollTrigger.kill()
    }
  }, [isMdOrLarger])

  const progressPercentage = ((currentProjectIndex + 1) / projects.length) * 100

  const projectContent = (project: (typeof projects)[0]) => (
    <>
      {project.backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={project.backgroundVideo} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-background-dark/20" />

      <div className="pt-12 md:pt-24 relative z-10">
        <HorizontalProjectScroll
          text={project.title}
          imageSrc="/images/red_dot.png"
          imageAlt="Dot"
          speed={200}
        />
      </div>

      <div className="container pb-16! md:pb-0! pt-8! md:pt-12! relative z-10 flex-1 flex flex-col justify-between">
        <div className="md:max-w-[25%] flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <Chip key={tag} content={tag} />
          ))}
        </div>
        <div className="flex flex-wrap justify-between md:pb-6">
          <div className="w-full md:w-auto">
            <p className={`font-share-tech-mono ${project.bgDark ? 'text-tx-light' : 'text-tx-dark'} text-base sm:text-lg md:text-xl`}>
              SELECTED PROJECT
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
    </>
  )

  if (!isMdOrLarger) {
    return (
      <section id="selected-projects" className="relative">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat relative uppercase ${project.bgDark ? 'bg-background-dark' : 'bg-background'}`}
            style={{
              backgroundImage: !project.backgroundVideo && project.backgroundImage
                ? `url('${project.backgroundImage}')`
                : undefined,
            }}
          >
            {projectContent(project)}
          </div>
        ))}
      </section>
    )
  }

  return (
    <section
      id="selected-projects"
      ref={sectionRef}
      className={`h-screen ${projects[currentProjectIndex].bgDark ? 'bg-background-dark' : 'bg-background'} relative overflow-hidden`}
    >
      <div
        ref={containerRef}
        className="h-full flex"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-project-index={index}
            className="h-full w-screen flex-shrink-0 flex flex-col bg-cover bg-center bg-no-repeat relative uppercase"
            style={{
              backgroundImage: !project.backgroundVideo && project.backgroundImage
                ? `url('${project.backgroundImage}')`
                : undefined,
            }}
          >
            {projectContent(project)}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-background-dark/30 z-20">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </section>
  )
}

export default SelectedProjects
