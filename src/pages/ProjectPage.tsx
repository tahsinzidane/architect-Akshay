import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen">
      {/* Back Navigation */}
      <Link
        to="/"
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Projects</span>
      </Link>

      {/* Hero Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </section>

      {/* Project Info */}
      <section className="relative -mt-32 z-10 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-background p-8 lg:p-12 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-wrap gap-4 mb-6 text-sm font-sans tracking-wider text-muted-foreground uppercase">
              <span>{project.category}</span>
              <span>—</span>
              <span>{project.location}</span>
              <span>—</span>
              <span>{project.year}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section
        className={`py-24 px-6 lg:px-16 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 px-6 lg:px-16 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Next Project
          </p>
          {(() => {
            const currentIndex = projects.findIndex((p) => p.id === id);
            const nextProject = projects[(currentIndex + 1) % projects.length];
            return (
              <Link
                to={`/project/${nextProject.id}`}
                className="inline-block group"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light group-hover:text-muted-foreground transition-colors">
                  {nextProject.title}
                </h2>
              </Link>
            );
          })()}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <p className="text-center text-sm text-muted-foreground font-sans">
          © {new Date().getFullYear()} Akshay Kumar Architecture. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default ProjectPage;
