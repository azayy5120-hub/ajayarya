import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm">✨ ABOUT ME</span>
          <h2 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mt-4 mb-4">
            BEST CONTENT WRITER
            <br />
            <span className="italic font-serif">&amp; STORYTELLER</span> IN INDIA
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              My journey into content writing began with a simple love for words and their power to connect, 
              inspire, and transform. Every piece I write is crafted with the intention of creating meaningful 
              connections between brands and their audiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">CREATIVE WRITING</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">BLOG WRITING</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">SEO OPTIMIZATION</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">CONTENT STRATEGY</span>
              </div>
            </div>

            <Button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 rounded-lg transition-all duration-300"
            >
              GET IN TOUCH NOW
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Travel Blogs</div>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Months Experience</div>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;