import { useEffect, useLayoutEffect, useRef } from 'react'

interface HorizontalProjectScrollProps {
  text: string
  imageSrc?: string
  imageAlt?: string
  className?: string
  speed?: number
  duplicates?: number
}

const HorizontalProjectScroll = ({
  text,
  imageSrc,
  imageAlt = '',
  className = '',
  speed = 10,
  duplicates = 2,
}: HorizontalProjectScrollProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const item = itemRef.current
    if (!scrollContainer || !item) return

    const updateAnimation = () => {
      const itemWidth = item.offsetWidth
      scrollContainer.style.setProperty('--item-width', `${itemWidth}px`)
    }

    updateAnimation()
    window.addEventListener('resize', updateAnimation)

    return () => window.removeEventListener('resize', updateAnimation)
  }, [duplicates, text, imageSrc, imageAlt])


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return
    scrollContainer.style.setProperty('--animation-duration', `${speed}s`)
  }, [speed])

  return (
    <div className={`overflow-hidden ${className}`} style={{ isolation: 'isolate' }}>
      <div
        ref={scrollContainerRef}
        className="flex animate-scroll-x"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        {Array.from({ length: duplicates }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? itemRef : null}
            className="font-tronica text-3xl sm:text-4xl md:text-9xl text-tx-dark flex items-center gap-4 flex-shrink-0"
          >
            <span className="whitespace-nowrap">{text}</span>
            {imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="md:w-8 md:h-8 w-4 h-4 inline-block mx-16 md:mx-32"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalProjectScroll
