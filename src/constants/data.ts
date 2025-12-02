import {
  Code2,
  Server,
  Brain,
  Wrench,
  Code,
  Database,
  Shield,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import type {
  NavItem,
  SkillCategory,
  EducationItem,
  KnowledgeArea,
  ExperienceItem,
  ProjectItem,
  ContactInfoItem,
  SocialLink,
} from "./types";
import { SITE_CONFIG, SOCIAL_LINKS } from "./config";
import projectMemory from "../assets/project-memory-qa.jpg";
import projectDistributed from "../assets/project-distributed.jpg";
import projectShop from "../assets/project-shop.jpg";
import projectCarRental from "../assets/project-car-rental.jpg";
import projectGame from "../assets/project-game.jpg";
import projectOS from "../assets/project-os.jpg";

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Social links
export const SOCIAL_ICONS: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: SOCIAL_LINKS.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    href: SOCIAL_LINKS.email,
  },
];

// Contact info
export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: SOCIAL_LINKS.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: SOCIAL_LINKS.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: null,
  },
];

// Education
export const EDUCATION: EducationItem = {
  title: "Bachelor's Degree in Engineering",
  institution: "Faculty of Engineering, Alexandria, Egypt",
  location: "Alexandria, Egypt",
  period: "2020 – 2025",
  gpa: "3.67",
};

// Knowledge areas
export const KNOWLEDGE_AREAS: KnowledgeArea[] = [
  {
    icon: Code,
    title: "Software Development",
    skills:
      "Strong foundation in programming paradigms, data structures, and algorithm design. Experienced in building efficient, scalable solutions and understanding computational complexity.",
  },
  {
    icon: Database,
    title: "Systems & Architecture",
    skills:
      "Deep understanding of operating systems, computer networks, and database design. Skilled in system-level thinking and building robust backend architectures.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills:
      "Hands-on experience with machine learning algorithms, natural language processing, and artificial intelligence concepts. Able to implement and deploy ML models for real-world applications.",
  },
  {
    icon: Shield,
    title: "Security",
    skills:
      "Knowledge of computer and network security principles, encryption, hashing, authentication, secure coding practices, and threat mitigation techniques.",
  },
];

// Experience
export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Full Stack Developer Intern (.NET)",
    company: "MS-Design",
    location: "Alexandria, Egypt",
    period: "Summer 2023",
    description:
      "Gained hands-on experience developing full-stack web applications using .NET technologies and modern development practices.",
    highlights: [
      "Built and maintained web applications using ASP.NET Core and C#",
      "Worked with SQL Server for database design and management",
      "Collaborated with senior developers on real-world client projects",
      "Participated in code reviews and learned industry best practices",
    ],
  },
];

// Skills
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      ".NET Core",
      "ASP.NET",
      "C#",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "SQL Server",
    ],
  },
  {
    category: "AI / ML",
    icon: Brain,
    skills: ["Python", "NumPy", "Pandas", "FastAPI", "Machine Learning", "NLP"],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Postman"],
  },
];

// Projects
export const PROJECTS: ProjectItem[] = [
  {
    title: "Personal Memory Question Answering",
    description:
      "Graduation project that preprocesses user's images using LLM and ML models to understand memories and answer questions about them. Integrated in website using FastAPI.",
    tags: ["Python", "FastAPI", "LLM", "Machine Learning"],
    highlight: true,
    image: projectMemory,
    github: "#",
    demo: "#",
  },
  {
    title: "Replicated Key/Value Service",
    description:
      "Built a fault-tolerant distributed key/value store in Go using primary–backup replication with concurrent request handling and automatic failover.",
    tags: ["GoLang", "Distributed Systems", "Replication", "Concurrency"],
    image: projectDistributed,
    github: "#",
    demo: "",
  },
  {
    title: "Online Shop",
    description:
      "A .NET website where sellers can offer products to customers. Uses SQL Server and Entity Framework for database management. Developed during MS-Design Internship.",
    tags: [".NET", "SQL Server", "Entity Framework", "C#"],
    image: projectShop,
    github: "#",
    demo: "",
  },
  {
    title: "Car Rental Website",
    description:
      "Full-featured website with authentication for customers, offices, and admin. Manages car rental operations with a comprehensive database.",
    tags: ["Web Development", "Database", "Authentication"],
    image: projectCarRental,
    github: "#",
    demo: "",
  },
  {
    title: "Circus of Plates Game",
    description:
      "Single-player game with 2 modes where clowns catch falling colored plates. Collecting three consecutive plates increases score. Built with OOP and design patterns.",
    tags: ["Java", "OOP", "Design Patterns"],
    image: projectGame,
    github: "#",
    demo: "",
  },
  {
    title: "Process Management System",
    description:
      "Simulates how the operating system runs processes, passing multiple processes through three queues with different quantum times.",
    tags: ["Operating Systems", "C", "Process Scheduling"],
    image: projectOS,
    github: "#",
    demo: "",
  },
];
