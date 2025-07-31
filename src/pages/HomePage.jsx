import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import StarBackground from "../components/StarBackground";
import ThemeButton from "../components/ThemeButton";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Layout comments */}
            {/* Theme toggle */}
            <ThemeButton />
            {/* Background */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
            {/* Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <Skills />
                <Projects />
                <ContactSection />
            </main>
            {/* Footer */}
        </div>
    );
}
