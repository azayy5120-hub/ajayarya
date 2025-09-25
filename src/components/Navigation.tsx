import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Creative mark */}
          <div 
            className="font-display font-extralight text-xl text-foreground cursor-pointer tracking-tight group"
            onClick={() => scrollToSection("home")}
          >
            <span className="relative">
              A.A
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* Desktop Navigation - Spaced out */}
          <div className="hidden md:flex space-x-16">
            {navItems.slice(1).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-body text-sm tracking-[0.15em] font-light group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                {/* Number indicators */}
                <span className="absolute -top-4 left-0 text-xs text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation - Creative overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/20">
            <div className="max-w-7xl mx-auto px-8 py-8 space-y-6">
              {navItems.slice(1).map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors font-body text-lg font-light tracking-wide group"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="border-b border-transparent group-hover:border-accent pb-1">
                      {item.label}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;