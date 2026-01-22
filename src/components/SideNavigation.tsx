import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Navigate to ${section.label}`}
        >
          <span
            className={`text-xs font-sans tracking-wider uppercase transition-all duration-300 ${
              activeSection === section.id
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"
            }`}
          >
            {section.label}
          </span>
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-foreground scale-125"
                : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
            }`}
          />
        </button>
      ))}
    </nav>
  );
};

export default SideNavigation;
