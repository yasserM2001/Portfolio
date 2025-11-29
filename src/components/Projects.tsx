import ProjectCard from "./ui/ProjectCard";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./layout/SectionWrapper";
import projectMemory from "../assets/project-memory-qa.jpg";
import projectDistributed from "@/assets/project-distributed.jpg";
import projectShop from "../assets/project-shop.jpg";
import projectCarRental from "../assets/project-car-rental.jpg";
import projectGame from "../assets/project-game.jpg";
import projectOS from "../assets/project-os.jpg";

const Projects = () => {
    const projects = [
        {
            title: "Personal Memory Question Answering",
            description: "Graduation project that preprocesses user's images using LLM and ML models to understand memories and answer questions about them. Integrated in website using FastAPI.",
            tags: ["Python", "FastAPI", "LLM", "Machine Learning"],
            highlight: true,
            image: projectMemory,
            github: "#",
            demo: "#"
        },
        {
            title: "Replicated Key/Value Service",
            description: "Built a fault-tolerant distributed key/value store in Go using primary–backup replication with concurrent request handling and automatic failover.",
            tags: ["GoLang", "Distributed Systems", "Replication"],
            image: projectDistributed,
            github: "#",
            demo: ""
        },
        {
            title: "Online Shop",
            description: "A .NET website where sellers can offer products to customers. Uses SQL Server and Entity Framework for database management. Developed during MS-Design Internship.",
            tags: [".NET", "SQL Server", "Entity Framework", "C#"],
            image: projectShop,
            github: "#",
            demo: ""
        },
        {
            title: "Car Rental Website",
            description: "Full-featured website with authentication for customers, offices, and admin. Manages car rental operations with a comprehensive database.",
            tags: ["Web Development", "Database", "Authentication"],
            image: projectCarRental,
            github: "#",
            demo: ""
        },
        {
            title: "Circus of Plates Game",
            description: "Single-player game with 2 modes where clowns catch falling colored plates. Collecting three consecutive plates increases score. Built with OOP and design patterns.",
            tags: ["Java", "OOP", "Design Patterns"],
            image: projectGame,
            github: "#",
            demo: ""
        },
        {
            title: "Process Management System",
            description: "Simulates how the operating system runs processes, passing multiple processes through three queues with different quantum times.",
            tags: ["Operating Systems", "C", "Process Scheduling"],
            image: projectOS,
            github: "#",
            demo: ""
        }
    ];

    return (
        <SectionWrapper
            id="projects"
            title="Projects"
            subtitle="Featured Work and Academic Projects"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;