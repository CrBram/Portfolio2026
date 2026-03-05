import LCDScreen from "./LCDScreen";
import Typography from "./ui/Typography";

const Hero = () => {
  return (
    <section id="hero" className="bg-background-dark min-h-screen sm:flex">
      <div className="container pt-26! md:pt-36! sm:flex sm:flex-1 sm:flex-col sm:justify-between">
        <div className="mb-12 sm:mb-0">
          <h2 className="text-tx-light font-share-tech-mono text-base sm:text-xl md:text-2xl">
            FULL-STACK DEVELOPER
          </h2>
          <Typography variant="h1">
            BRAM C<span className="text-primary">.</span>
          </Typography>
        </div>
        <div className="sm:pb-16">
          <LCDScreen />
        </div>
      </div>
    </section>
  );
};

export default Hero;
