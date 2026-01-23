import HorizontalProjectScroll from './HorizontalProjectScroll'
import Button from './ui/Button'

const Projects2 = () => {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat bg-background relative overflow-hidden"
      style={{ backgroundImage: "url('/images/projects/orient_background.png')" }}
    >
      <div className="absolute inset-0 bg-background-dark/20"></div>
      <div className="pt-24 relative z-10">
        <HorizontalProjectScroll
          text="ORIENT CONFIGURATOR"
          imageSrc="/images/red_dot.png"
          imageAlt="Dot"
          speed={10}
          duplicates={2}
        />
      </div>
      <div className="container py-8! md:py-12! relative z-10">
        <div className="flex flex-wrap justify-between md:pt-136 pt-120">
          <div className="w-full md:w-auto">
            <p className="font-share-tech-mono text-tx-dark text-base sm:text-lg md:text-xl">SELECTED PROJECTS</p>
            <p className="font-micro5 text-primary text-8xl md:text-9xl -mt-6">#01</p>
          </div>
          <Button className="w-full md:w-auto" text="VIEW PROJECT" onClick={() => { }} />
        </div>
      </div>
    </section>
  )
}

export default Projects2