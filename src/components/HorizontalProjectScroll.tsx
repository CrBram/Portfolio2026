import Marquee from 'react-fast-marquee'

interface HorizontalProjectScrollProps {
  text: string
  imageSrc?: string
  imageAlt?: string
  className?: string
  speed?: number
}

const HorizontalProjectScroll = ({
  text,
  imageSrc,
  imageAlt = '',
  className = '',
  speed = 50,
}: HorizontalProjectScrollProps) => {
  return (
    <Marquee
      className={`overflow-hidden ${className}`}
      speed={speed}
      autoFill={true}
      pauseOnHover={false}
      gradient={false}
    >
      <span className="select-none font-tronica text-3xl sm:text-4xl md:text-9xl text-tx-dark flex items-center gap-4 whitespace-nowrap">
        {text}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="md:w-8 md:h-8 w-4 h-4 mx-16 md:mx-32"
          />
        )}
      </span>
    </Marquee>
  )
}

export default HorizontalProjectScroll
