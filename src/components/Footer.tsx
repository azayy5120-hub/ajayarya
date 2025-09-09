import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl mb-2">Ajay Arya</h3>
            <p className="text-primary-foreground/80 font-body">Content Writer & Creative Storyteller</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm font-body">
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Back to Top */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={scrollToTop}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80 font-body">
            <p>© {currentYear} Ajay Arya. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <Heart className="h-4 w-4 text-red-400" fill="currentColor" /> for impactful storytelling
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;