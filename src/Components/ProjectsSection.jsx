import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Movie Recommendation System",
        description: "A web application that recommends movies based on user preferences using machine learning algorithms.",
        image: "/Responsive-Portfolio-Web-Site/Projects/Project1.jpg",
        tags: ["Machine Learning", "Streamlit", "Python"],
        demoUrl: "https://github.com/Kalyan1232/Movie-Recommendation-System.git",
        githubUrl: "https://github.com/Kalyan1232/Movie-Recommendation-System.git",
    },
    {
        id: 2,
        title: "Crop Recommendation System",
        description: "A web application that recommends Crops based on Land Nature using machine learning algorithms.",
        image: "/Responsive-Portfolio-Web-Site/Projects/Project2.jpg",
        tags: ["Machine Learning", "Web Development", "Python"],
        demoUrl: "https://github.com/Kalyan1232/Crop-Recommendation-System.git",
        githubUrl: "https://github.com/Kalyan1232/Crop-Recommendation-System.git",
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "A responsive personal portfolio website to showcase my projects and skills.",
        image: "/Responsive-Portfolio-Web-Site/Projects/Project3.jpg",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills in web development and machine learning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-xs font-medium border bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20}/>
                                            </a>
                                        </div>
                                </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/Kalyan1232"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}