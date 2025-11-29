import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
};

export default Index;