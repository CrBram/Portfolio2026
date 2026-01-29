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
      <div id="projects">
        <SelectedProjects />
        <Projects />
      </div>
      <Skills />
    </div>
  );
}

export default Home;
