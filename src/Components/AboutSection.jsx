import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () =>{
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className='container mx-auto max-w-5xl'>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Problem Solver & ML Enthusiast</h3>
                        <p className="text-muted-foreground">
                            Driven by a deep curiosity for how things work,
                            I craft intuitive and scalable web experiences
                            that blend clean design with robust functionality.
                            My approach combines thoughtful architecture with
                            meticulous attention to detail, ensuring every project
                            meets both user needs and technical excellence.
                        </p>
                        <p className="text-muted-foreground">
                            Whether it's optimizing performance, refining user interfaces,
                            or integrating cutting-edge frameworks, I thrive on turning
                            challenges into opportunities for innovation. My goal is to
                            build digital solutions that not only perform flawlessly but
                            also leave a lasting impact on users and clients alike.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="/Responsive-Portfolio-Web-Site/Kalyan_Kathuroji_Resume_1.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive websites and dynamic web applications using modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">About Me</h4>
                                    <p className="text-muted-foreground">Passionate developer with expertise in AI, ML, and full-stack Java. I build solutions that are smart, scalable, and user-focused.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Projects & Achievements</h4>
                                    <p className="text-muted-foreground">From intelligent machine learning models to responsive web applications, my work blends innovation with functionality to deliver real impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}