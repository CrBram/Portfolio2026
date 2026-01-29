import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import Nav from "@/components/ui/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <SelectedProjects />
      <Skills />
    </div>
  );
}

export default Home;
