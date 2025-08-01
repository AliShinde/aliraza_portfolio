import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projectList = [
    {
        id: 1,
        title: "YelpCamp",
        description:
            "Full Stack website using MERN stack with passportJS for user authentication",
        image: "https://res.cloudinary.com/dqksibfze/image/upload/v1754035542/YelpCamp_HomePage_ncqb04.png",
        tags: ["Javascript", "Express", "MongoDB", "Bootstrap", "EJS"],
        demoUrl: "https://yelpcamp-y20x.onrender.com/",
        githubUrl: "https://github.com/AliShinde/YelpCamp",
    },
    {
        id: 2,
        title: "Cloud File Upload",
        description:
            "A backend module built with Nestjs and connects directly to Cloudinary! ",
        image: "https://res.cloudinary.com/dqksibfze/image/upload/v1754035538/File_upload_nestjs_emxnhi.png",
        tags: ["Typescript", "Nestjs", "Postgres", "Prisma"],
        demoUrl: "https://github.com/AliShinde/File-Upload-Nestjs",
        githubUrl: "https://github.com/AliShinde/File-Upload-Nestjs",
    },
    {
        id: 3,
        title: "Rate Limiter using Redis",
        description:
            "A backend module to implement specified number of hits on an API",
        image: "https://res.cloudinary.com/dqksibfze/image/upload/v1754035538/RateLimiter_Redis_il3eph.png",
        tags: ["Typescript", "Redis", "Postgres", "Prisma"],
        demoUrl: "https://github.com/AliShinde/RateLimiter-Redis-Nestjs",
        githubUrl: "https://github.com/AliShinde/RateLimiter-Redis-Nestjs",
    },
    {
        id: 4,
        title: "GNN Summarizer",
        description:
            "A Graph Neural Network that uses knowledge graphs to summarize text",
        image: "https://res.cloudinary.com/dqksibfze/image/upload/v1754035538/GNNProject_ow4c1r.png",
        tags: ["Python", "pytorch", "pytorch.geometric", "Info Retreival"],
        demoUrl: "https://github.com/AliShinde/GNN_Legal_Summarizer",
        githubUrl: "https://github.com/AliShinde/GNN_Legal_Summarizer",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectList.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span
                                            key={key}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1 ml-1 mr-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        {" "}
                                        <ExternalLink />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx:auto gap-2"
                        href="https://github.com/AliShinde"
                        target="_blank">
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
