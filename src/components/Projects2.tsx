import HorizontalProjectScroll from './HorizontalProjectScroll'

const Projects2 = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-background relative overflow-hidden"
      style={{ backgroundImage: "url('/images/projects/orient_background.png')" }}
    >
      <div className="absolute inset-0 bg-background-dark/17"></div>
      <div className="pt-24 relative z-10">
        <HorizontalProjectScroll
          text="ORIENT CONFIGURATOR"
          imageSrc="/images/dot.png"
          imageAlt="Dot"
          speed={10}
          duplicates={2}
        />
      </div>
      <div className="container py-8! md:py-12! ">
      </div>
    </section>
  )
}

export default Projects2