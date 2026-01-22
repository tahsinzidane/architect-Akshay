import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 lg:px-16 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`group block transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-sans tracking-wider text-muted-foreground uppercase">
                  {project.category} — {project.year}
                </p>
                <h3 className="font-serif text-2xl font-light group-hover:text-muted-foreground transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
