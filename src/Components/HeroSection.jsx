import { ArrowDown } from "lucide-react";

export const HeroSection = () => {

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="Container max-w-4l mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Kalyan </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Kathuroji</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I design and deliver innovative, scalable solutions
                        by combining AI & ML expertise with full-stack Java
                        development. Proficient in React, backend architecture,
                        and automation testing, I create high-impact applications
                        that drive real business results.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
}