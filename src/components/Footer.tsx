import { Heart } from "lucide-react";
import { NAV_ITEMS, SOCIAL_ICONS } from "../constants/data";
import { SITE_CONFIG } from "../constants/config";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const scrollToSection = useScrollToSection();

    return (
        <footer className="bg-card border-t border-border">
            <div className="container max-w-6xl mx-auto px-4">

                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">
                            {SITE_CONFIG.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Software Engineer passionate about building elegant solutions
                            with modern technologies.
                        </p>
                        <div className="flex gap-3">
                            {SOCIAL_ICONS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-lg border border-border hover:border-primary transition-all hover:text-primary`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            {NAV_ITEMS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                            Get In Touch
                        </h4>
                        <div className="space-y-2 text-sm">
                            <a
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="block text-muted-foreground hover:text-primary transition-colors"
                            >
                                {SITE_CONFIG.email}
                            </a>
                            <a
                                href={`tel:${SITE_CONFIG.phone}`}
                                className="block text-muted-foreground hover:text-primary transition-colors"
                            >
                                +20 100 423 7003
                            </a>
                            <p className="text-muted-foreground">
                                {SITE_CONFIG.location}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Copyright */}
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                        </p>

                        {/* Made with love */}
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        </p>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;