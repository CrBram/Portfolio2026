import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

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
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
