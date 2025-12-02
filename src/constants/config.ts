// Global configuration constants
export const SITE_CONFIG = {
  name: "Yasser Mohamed",
  title: "Software Engineer",
  description: "Passionate about developing scalable backend systems and APIs, with a solid understanding of full-stack application workflows.",
  email: "yassermohamed166@icloud.com",
  phone: "+201004237003",
  location: "Alexandria, Egypt",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/yasserM2001",
  linkedin: "#",
  email: `mailto:${SITE_CONFIG.email}`,
  phoneHref: `tel:${SITE_CONFIG.phone}`,
} as const;

export const CV_PATH = "/Yasser-Mohamed-CV.pdf";

export const SCROLL_BEHAVIOR = {
  smooth: "smooth" as const,
  offset: 20,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
  slower: 0.5,
} as const;

export const FORM_SUBMIT_DELAY = 1500;
export const SUCCESS_RESET_DELAY = 3000;
