import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { getAllProjects, getAllCategories } from "../lib/projects";

export default async function Home() {
  const projects = await getAllProjects();
  const categories = getAllCategories();
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] relative overflow-x-hidden">
      {/* Apple-style background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
      
      <Navbar />
      
      {/* Apple's centered container system with generous spacing */}
      <div className="relative z-10">
        {/* Hero Section - Full width with contained content */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <HeroSection />
          </div>
        </section>

        {/* Achievements Section - Full width with subtle background */}
        <section className="py-20 md:py-28 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <AchievementsSection />
          </div>
        </section>

        {/* Projects Section - Apple's signature spacing */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <ProjectsSection projects={projects} categories={categories} />
          </div>
        </section>

        {/* About Section - Edge-to-edge with contained content */}
        <section className="py-20 md:py-28 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <AboutSection />
          </div>
        </section>

        {/* Contact Section - Contained with focus */}
        <section className="py-20 md:py-28 lg:py-32 pb-32 md:pb-40">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <EmailSection />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
