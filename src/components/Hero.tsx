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
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content - Asymmetric layout */}
          <div className="lg:col-span-7 space-y-12">
            {/* Small intro */}
            <div className="opacity-70">
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                Digital Storyteller
              </span>
            </div>
            
            {/* Large creative name */}
            <div className="space-y-6">
              <h1 className="font-display font-extralight text-7xl xl:text-8xl 2xl:text-9xl leading-[0.8] tracking-tighter">
                <span className="block text-foreground">Ajay</span>
                <span className="block text-foreground/90 relative">
                  Arya
                  <span className="text-accent text-6xl xl:text-7xl 2xl:text-8xl">.</span>
                  <div className="absolute -right-16 top-8 w-24 h-[1px] bg-accent/30 hidden xl:block"></div>
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-lg pl-1">
                Creative writer transforming ideas into compelling narratives 
                that captivate, inspire, and drive meaningful engagement.
              </p>
            </div>

            {/* Description with geometric accent */}
            <div className="relative max-w-lg space-y-8">
              <div className="absolute -left-8 top-0 w-[1px] h-20 bg-gradient-to-b from-accent to-transparent"></div>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light pl-8">
                Every word is carefully chosen to create connections that transcend 
                the digital space, bringing brands and audiences together through 
                the timeless art of storytelling.
              </p>
              
              <div className="flex gap-8 items-center pl-8">
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="group text-foreground hover:text-accent transition-colors duration-300 text-base font-light"
                >
                  <span className="border-b border-transparent group-hover:border-accent pb-1">
                    View Portfolio
                  </span>
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="group text-foreground hover:text-accent transition-colors duration-300 text-base font-light"
                >
                  <span className="border-b border-transparent group-hover:border-accent pb-1">
                    Get in Touch
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Creative visual element */}
          <div className="lg:col-span-5 flex justify-end items-center relative">
            <div className="relative w-96 h-96">
              {/* Background geometric shapes */}
              <div className="absolute inset-0 border border-accent/10 transform rotate-12 rounded-2xl"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-accent/5 to-transparent rounded-xl"></div>
              
              {/* Profile image */}
              <div className="absolute inset-16 overflow-hidden rounded-lg">
                <img 
                  src={profileImage} 
                  alt="Ajay Arya - Creative Writer" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating text elements */}
              <div className="absolute top-4 right-4 text-right">
                <span className="text-xs text-muted-foreground/40 tracking-[0.3em] font-light">CREATIVE</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-muted-foreground/40 tracking-[0.3em] font-light">WRITING</span>
              </div>
              
              {/* Accent dots */}
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-accent/60 rounded-full"></div>
              <div className="absolute bottom-1/3 -left-4 w-1 h-1 bg-accent/40 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom scroll indicator */}
        <div className="absolute bottom-12 left-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-muted-foreground/20"></div>
            <span className="text-xs text-muted-foreground/40 tracking-[0.3em] font-light">SCROLL DOWN</span>
            <ArrowDown className="w-3 h-3 text-muted-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;