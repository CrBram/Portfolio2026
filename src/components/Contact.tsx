import Marquee from "react-fast-marquee"

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-background">
      <div className="flex items-center justify-center h-full">
        <div className="container py-16! md:py-24!">
          <div className="md:flex justify-between">
            <Marquee
              className={`overflow-hidden`}
              speed={150}
              autoFill={true}
              pauseOnHover={false}
              gradient={false}
            >
              <span className="select-none font-tronica text-6xl md:text-9xl text-tx-dark flex items-center gap-4 whitespace-nowrap">
                LET'S CONNECT
              </span>
              <img
                src={"/images/red_dot.png"}
                alt={"dot"}
                className="md:w-8 md:h-8 w-4 h-4 mx-16 md:mx-32"
              />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact