import { Github, Mail, Phone, MapPin, FileText } from "lucide-react";
import heroImage from "../assets/hero-bg.jpg";
import profileImage from "../assets/profile.jpg";
import { SITE_CONFIG, CV_PATH, SOCIAL_LINKS } from "../constants/config";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  src={profileImage}
                  alt="Yasser Mohamed"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                <a href={SOCIAL_LINKS.github} target="_blank">
                  <Github className="w-6 h-6 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-serif">
              {SITE_CONFIG.title}
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-4">
            {SITE_CONFIG.description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center text-xs sm:text-sm md:text-base px-4">
            <a
              href={SOCIAL_LINKS.email}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="break-all">{SITE_CONFIG.email}</span>
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href={SOCIAL_LINKS.phoneHref}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {SITE_CONFIG.location}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
            <a
              href={CV_PATH}
              download
              className="
                inline-flex items-center justify-center
                px-6 py-3
                text-primary-foreground bg-primary
                rounded-lg
                font-semibold
                hover:bg-primary-foreground hover:text-primary
                transition-colors duration-200
              "
            >
              <FileText className="w-5 h-5 mr-2" />
              Download CV
            </a>
            {/* Outline Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="
          inline-flex items-center justify-center
          px-6 py-3
          text-primary border-2 border-primary
          rounded-lg
          font-semibold
          hover:bg-primary hover:text-primary-foreground
          transition-colors duration-200
        "
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
