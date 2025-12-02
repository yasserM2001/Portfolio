import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants/data";
import { SITE_CONFIG, SCROLL_BEHAVIOR } from "../constants/config";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const scrollToSection = useScrollToSection();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > SCROLL_BEHAVIOR.offset);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
				? "bg-background/80 backdrop-blur-md border-b shadow-sm"
				: "bg-transparent"
				}`}
		>
			<div className="container max-w-6xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<a
						href="#home"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("#home");
						}}
						className="text-xl font-bold hover:text-primary transition-colors"
					>
						<span className="bg-primary px-3.5 py-1 rounded-full mr-2 text-accent">
							Y
						</span>
						{SITE_CONFIG.name}
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{NAV_ITEMS.map((item) => (
							<a
								key={item.label}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
								className="text-sm font-medium hover:text-primary transition-colors"
							>
								{item.label}
							</a>
						))}
					</div>					
					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
						aria-label="Toggle Menu"
					>
						{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden py-4 border-t">
						<div className="flex flex-col gap-4">
							{NAV_ITEMS.map((item) => (
								<a
									key={item.label}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href, () => setIsOpen(false));
									}}
									className="text-sm font-medium hover:text-primary transition-colors"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;