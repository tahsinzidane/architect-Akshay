import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import SideNavigation from "@/components/SideNavigation";

const Index = () => {
  return (
    <main className="relative">
      <SideNavigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
    </main>
  );
};

export default Index;
