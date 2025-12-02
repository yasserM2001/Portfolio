import ProjectCard from "./ui/ProjectCard";
import SectionWrapper from "./layout/SectionWrapper";
import { PROJECTS } from "../constants/data";

const Projects = () => {

    return (
        <SectionWrapper
            id="projects"
            title="Projects"
            subtitle="Featured Work and Academic Projects"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;