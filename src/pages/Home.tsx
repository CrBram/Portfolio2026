import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Nav from "@/components/ui/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
