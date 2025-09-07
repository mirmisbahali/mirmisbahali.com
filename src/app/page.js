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
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection projects={projects} categories={categories} />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
