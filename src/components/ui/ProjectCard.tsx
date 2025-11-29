import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  highlight?: boolean;
  github?: string;
  demo?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image, 
  highlight = false, 
  github, 
  demo 
}: ProjectCardProps) => {
  return (
    <div 
      className={`group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${
        highlight ? 'ring-2 ring-primary' : ''
      }`}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {highlight && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Featured
            </span>
          </div>
        )}

        {/* Overlay Links */}
        {(github || demo) && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                aria-label="View GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                aria-label="View Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium hover:bg-accent/80 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;