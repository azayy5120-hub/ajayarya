import { Button } from "./ui/button";
import { Download, Play } from "lucide-react";
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
    <section id="home" className="min-h-screen bg-background flex items-center pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image with Circular Frame */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative circular frame */}
              <div className="w-96 h-96 rounded-full border-4 border-primary/30 flex items-center justify-center relative">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-background">
                  <img 
                    src={profileImage} 
                    alt="Ajay Arya - Content Writer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-2xl">👋</span>
                <span className="font-medium">Hi I'm Ajay Arya</span>
              </div>
              
              <h1 className="font-heading font-bold text-5xl xl:text-7xl leading-tight">
                <span className="text-foreground">A CONTENT WRITER</span>
                <br />
                <span className="italic font-serif text-foreground">&amp; STORYTELLER</span>
              </h1>
              
              <p className="text-lg font-body leading-relaxed max-w-2xl text-muted-foreground">
                A passionate content writer with more than 3 months of experience who is always excited to work with you to create wonderful stories!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 rounded-lg transition-all duration-300 gap-2"
              >
                <Download className="w-5 h-5" />
                DOWNLOAD CV
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 rounded-full gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                PLAY VIDEO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;