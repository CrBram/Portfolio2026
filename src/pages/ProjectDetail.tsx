import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return (
      <section className="bg-background-dark min-h-screen pt-36 pb-24">
        <Nav
          logoHref="/"
          links={[
            { href: "/", label: "HOME" },
            { href: "#", label: "PROJECT" },
          ]}
        />
        <div className="container">
          <p className="font-share-tech-mono text-sm text-tx-light-subtle uppercase">
            PROJECT NOT FOUND
          </p>
          <h1 className="font-tronica text-primary text-6xl md:text-7xl uppercase mt-2 tracking-tight">
            404
          </h1>
          <p className="max-w-2xl text-tx-light uppercase">
            This project detail page does not exist yet.
          </p>
          <Link
            to="/"
            className="inline-flex mt-8 font-share-tech-mono text-tx-light hover:text-primary transition-colors duration-100"
          >
            <span className="text-primary">[</span>BACK TO HOME
            <span className="text-primary">]</span>
          </Link>
        </div>
        <Footer />
      </section>
    );
  }

  const hasLiveLink = Boolean(project.link && project.link !== "#");
  const galleryImages = project.images ?? [];

  return (
    <section className="bg-background-dark min-h-screen pb-24 pt-24 text-tx-light">
      <Nav
        logoHref="/"
        links={[
          { href: "/", label: "HOME" },
          {
            href: `/projects/${project.slug}`,
            label: project.title,
            forceActive: true,
          },
        ]}
      />

      <div className="container pt-36 md:pt-40 pb-24">
        <div className="relative overflow-hidden h-[38vh] md:h-[50vh] bg-background-dark rounded-sm border border-tx-light/10">
          {project.backgroundVideo ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={project.backgroundVideo} type="video/mp4" />
            </video>
          ) : (
            project.backgroundImage && (
              <img
                src={project.backgroundImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
          )}
          <div className="absolute inset-0 bg-background-dark/30" />
        </div>

        <div className="pt-8 md:pt-10">
          <p className="font-share-tech-mono uppercase text-sm text-tx-light-subtle">
            FEATURED CASE
          </p>
          <h1 className="font-tronica text-primary text-5xl md:text-7xl uppercase tracking-tight mt-1">
            {project.title}
          </h1>

          <div className="flex items-center gap-4 mt-2">
            <p className="font-share-tech-mono uppercase text-sm text-tx-light-subtle">
              {project.year}
            </p>
            <div className="h-px bg-primary/45 flex-1" />
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags?.map((tag) => (
              <Chip key={tag} content={tag} />
            ))}
          </div>

          <div className="mt-10 border-y border-tx-light/10">
            <div className="grid md:grid-cols-[11rem_1fr] gap-4 md:gap-8 py-6 border-b border-tx-light/10">
              <p className="font-share-tech-mono uppercase text-xs tracking-wider text-primary">
                SUMMARY
              </p>
              <p className="text-tx-light leading-relaxed">
                {project.summary ?? "Short description coming soon."}
              </p>
            </div>

            <div className="grid md:grid-cols-[11rem_1fr] gap-4 md:gap-8 py-6 border-b border-tx-light/10">
              <p className="font-share-tech-mono uppercase text-xs tracking-wider text-primary">
                CHALLENGE
              </p>
              <p className="text-tx-light leading-relaxed">
                {project.challenge ?? "Details coming soon."}
              </p>
            </div>

            <div className="grid md:grid-cols-[11rem_1fr] gap-4 md:gap-8 py-6">
              <p className="font-share-tech-mono uppercase text-xs tracking-wider text-primary">
                SOLUTION
              </p>
              <p className="text-tx-light leading-relaxed">
                {project.solution ?? "Details coming soon."}
              </p>
            </div>
          </div>

          <ProjectGallery title={project.title} images={galleryImages} className="mt-10" />

          <div className="mt-10 flex flex-wrap gap-3">
            {hasLiveLink && (
              <Button
                text="VISIT LIVE"
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ProjectDetail;
