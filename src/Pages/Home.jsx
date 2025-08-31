import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { NavBar } from "../Components/NavBar.jsx";
import { HeroSection } from "../Components/HeroSection.jsx";
import { AboutSection } from "../Components/AboutSection.jsx";
import { SkillsSection } from "../Components/SkillsSection.jsx";
import { ProjectsSection } from "../Components/ProjectsSection.jsx";
import { ContactSection } from "../Components/ContactSection.jsx";
import { Footer } from "../Components/Footer.jsx";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Background Effects */}
        <StarBackground />
        
        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
    </div>
    );
}