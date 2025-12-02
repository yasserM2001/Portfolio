import { SCROLL_BEHAVIOR } from "../constants/config";

export const useScrollToSection = () => {
  const scrollToSection = (href: string, onComplete?: () => void) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: SCROLL_BEHAVIOR.smooth });
      onComplete?.();
    }
  };

  return scrollToSection;
};
