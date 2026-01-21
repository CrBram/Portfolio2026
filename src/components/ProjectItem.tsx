import { forwardRef, useRef } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"

type Props = {
  name: string
  index: number
  reportDistance: (index: number, distance: number) => void
  isActive: boolean
}

const ProjectItem = forwardRef<HTMLLIElement, Props>(
  function ProjectItem({ name, index, reportDistance, isActive }, ref) {
    const localRef = useRef<HTMLLIElement | null>(null)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", () => {
      const el = localRef.current
      if (!el) return

      const r = el.getBoundingClientRect()
      const center = r.top + r.height / 2
      const vhCenter = window.innerHeight / 2

      reportDistance(index, Math.abs(center - vhCenter))
    })

    return (
      <motion.li
        ref={(el) => {
          localRef.current = el
          if (typeof ref === "function") ref(el)
        }}
        animate={{
          opacity: isActive ? 1 : 0.35,
          scale: isActive ? 1 : 0.98,
        }}
        transition={{ duration: 0.2 }}
        className="pb-4"
      >
        <p className="text-tx-dark font-bold text-2xl sm:text-4xl md:text-5xl">
          {name}
        </p>
      </motion.li>
    )
  }
)

export default ProjectItem
