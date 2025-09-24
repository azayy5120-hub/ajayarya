import { Button } from "./ui/button";
import { ArrowDown, Mail } from "lucide-react";
import profileImage from "@/assets/ajay-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-background flex items-center pt-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-body text-muted-foreground text-sm tracking-wider uppercase">
                Content Writer & Storyteller
              </p>
              <h1 className="font-heading font-light text-5xl xl:text-6xl text-primary leading-tight tracking-tight">
                Ajay Arya
              </h1>
              <p className="text-lg font-body leading-relaxed max-w-md text-muted-foreground">
                Crafting words to tell the fresh tale of eternal idea and boundless creativity.
              </p>
            </div>

            <div className="space-y-4 max-w-md">
              <p className="text-foreground font-body leading-relaxed">
                I breathe life into words, shaping them into stories that linger beyond moments. 
                Writing is living expression—the art of fusing imagination, insight, and emotion.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="default" 
                  size="default" 
                  onClick={() => scrollToSection("portfolio")} 
                  className="text-sm"
                >
                  View Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  size="default" 
                  onClick={() => scrollToSection("contact")} 
                  className="text-sm"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 pt-6 border-t border-border">
              <div>
                <div className="font-heading font-medium text-2xl text-primary">50+</div>
                <div className="text-muted-foreground font-body text-xs">Travel Blogs</div>
              </div>
              <div>
                <div className="font-heading font-medium text-2xl text-primary">3</div>
                <div className="text-muted-foreground font-body text-xs">Months Experience</div>
              </div>
              <div>
                <div className="font-heading font-medium text-2xl text-primary">SEO</div>
                <div className="text-muted-foreground font-body text-xs">Optimized</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-minimal border border-border">
              <img src={profileImage} alt="Ajay Arya - Content Writer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;