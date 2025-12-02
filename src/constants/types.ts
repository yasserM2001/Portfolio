import React from "react";

// Navigation & Footer
export interface NavItem {
  label: string;
  href: string;
}

// Skills
export interface SkillCategory {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

// Education & Experience
export interface EducationItem {
  title: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface KnowledgeArea {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

// Projects
export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  highlight?: boolean;
  github?: string;
  demo?: string;
}

// Contact
export interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = "idle" | "sending" | "success" | "error";
