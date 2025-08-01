import { ArrowDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi I'm{" "}
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">
                            Aliraza{" "}
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
                            Shinde{" "}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        A full-stack developer with a kick for challenges and
                        solving real-world problems, I specialize in building
                        scalable backend systems, designing clean APIs, and
                        bringing ideas to life—from enterprise-grade solutions
                        to AI-powered research tools.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                        {/* <a href="#projects" className="cosmic-button">
                            View my Work
                        </a> */}
                        <HashLink
                            smooth
                            to="#projects"
                            className="cosmic-button">
                            View my Work
                        </HashLink>
                        <a
                            href="Resume/Aliraza_new_resume.pdf"
                            target="_blank"
                            className="ml-5 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">
                    Scroll
                </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}
