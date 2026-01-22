import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                title="25 din main paisa double"
                src="https://i.pinimg.com/736x/d2/df/ba/d2dfbada8aeaa414af5055e0c6eda654.jpg"
                alt="Architectural detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
              About
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-10 leading-tight">
              Shaping space with intention
            </h2>

            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                I'm  is an architect based in Mumbai, India, with a practice
                rooted in the belief that architecture must serve both human needs
                and the broader environment. Trained at the University of Oxford,
                his work bridges rigorous academic theory with the pragmatic
                realities of building in the Indian subcontinent.
              </p>

              <p>
                My work spans commercial, industrial, and public infrastructure projects.
                I approach each one with the same commitment to material honesty, spatial clarity,
                and sensitivity to context. Whether I’m designing a glass pavilion beside a
                heritage landmark or rethinking an industrial facility, the goal stays the same:
                to create architecture that elevates everyday life without asking for attention
              </p>

              <p>
                The practice operates at the intersection of tradition and
                innovation, drawing equally from vernacular building wisdom and
                contemporary construction technology.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-sans tracking-wider text-muted-foreground uppercase mb-2">
                    Education
                  </p>
                  <p className="font-serif text-lg">University of Oxford</p>
                  <p className="text-sm text-muted-foreground">
                    Architecture, England
                  </p>
                </div>
                <div>
                  <p className="text-sm font-sans tracking-wider text-muted-foreground uppercase mb-2">
                    Location
                  </p>
                  <p className="font-serif text-lg">Mumbai</p>
                  <p className="text-sm text-muted-foreground">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
