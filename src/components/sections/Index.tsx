import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div>
      
      <section id="home">
        <Hero />
      </section>
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </div>
  );
};

export default Index;
