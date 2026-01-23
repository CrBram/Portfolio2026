import HorizontalProjectScroll from './HorizontalProjectScroll'

const Projects2 = () => {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat bg-background relative overflow-hidden"
      style={{ backgroundImage: "url('/images/projects/orient_background.png')" }}
    >
      <div className="absolute inset-0 bg-background-dark/15"></div>
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
        <div className="flex justify-between pt-136">
          <div className="">
            <p className="font-share-tech-mono text-tx-dark text-base sm:text-lg md:text-xl">SELECTED PROJECTS</p>
            <p className="font-micro5 text-primary text-9xl -mt-6">#01</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects2