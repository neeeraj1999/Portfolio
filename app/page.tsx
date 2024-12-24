import HeroSection from "../components/ui/hero-section";
import AboutSection from "../components/ui/about-section";
import ExperienceSection from "../components/ui/experience-section";
import ProjectsSection from "../components/ui/project-section";
import SkillsSection from "../components/ui/skills-section";
import CertificationsSection from "../components/ui/certifications-section";
import ContactSection from "../components/ui/contact-section";
import NavbarMenu from "../components/ui/navbar-menu";
import MobileMenu from "../components/ui/mobile-menu";
import AnimatedBackground from "../components/ui/animated-background";

const navigationItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Certifications", href: "#certifications" },
  { title: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated background that spans all sections */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <NavbarMenu items={navigationItems} />
        <MobileMenu items={navigationItems} />
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="certifications">
          <CertificationsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
