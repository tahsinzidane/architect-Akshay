import { useEffect, useRef, useState } from "react";

const PhilosophySection = () => {
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
      id="philosophy"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 lg:px-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Philosophy
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight">
              Design as discipline
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-border pl-8">
                <h3 className="font-serif text-2xl mb-3">Space</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Architecture begins with the void. The quality of a building 
                  is measured not by its presence, but by the spaces it creates 
                  and the experiences they enable.
                </p>
              </div>

              <div className="border-l-2 border-border pl-8">
                <h3 className="font-serif text-2xl mb-3">Geometry</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Proportion and order provide the underlying logic. Every 
                  dimension is considered, every relationship calibrated to 
                  achieve visual and spatial harmony.
                </p>
              </div>

              <div className="border-l-2 border-border pl-8">
                <h3 className="font-serif text-2xl mb-3">Light</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Natural light is the primary material. Its movement through 
                  space marks time, defines atmosphere, and reveals the true 
                  character of materials.
                </p>
              </div>

              <div className="border-l-2 border-border pl-8">
                <h3 className="font-serif text-2xl mb-3">Function</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Beauty emerges from purpose. When a building serves its 
                  inhabitants with clarity and grace, aesthetic quality follows 
                  naturally.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/b8/75/c6/b875c6856f1b994be41658e28f086777.jpg"
                  alt="Light through architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-border" />
            </div>

            <blockquote className="mt-12 font-serif text-2xl italic text-center text-muted-foreground">
              "Ha Malum Hai Chal Apne Baap Ko Mat Sikha"
              <cite className="block mt-4 text-sm font-sans not-italic tracking-wider">
                — Akshay 
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
