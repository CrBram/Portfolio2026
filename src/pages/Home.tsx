import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import Nav from "@/components/ui/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <section id="projects">
        <SelectedProjects />
        <Projects />
      </section>
      <Skills />
    </div>
  );
}

export default Home;
