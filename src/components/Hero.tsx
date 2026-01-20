import LCDScreen from "./LCDScreen"
import Typography from "./ui/Typography"

const Hero = () => {
  return (
    <section className="bg-background-dark min-h-screen">
      <div className="container pt-26! md:pt-36!">
        <div className="mb-12 sm:mb-30">
          <h2 className="text-tx-light font-share-tech-mono text-base sm:text-xl md:text-2xl">FULL-STACK DEVELOPER</h2>
          <Typography variant="h1">BRAM C<span className="text-primary">.</span></Typography>
        </div>
        <div>
          <LCDScreen />
        </div>
      </div>
    </section>
  )
}

export default Hero