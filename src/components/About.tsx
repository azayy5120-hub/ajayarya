import { GraduationCap, PenTool, Heart, BookOpen } from "lucide-react";
import profileImage from "@/assets/ajay-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Section number and title */}
          <div className="lg:col-span-2">
            <div className="space-y-8 sticky top-32">
              <span className="text-xs text-muted-foreground/40 tracking-[0.4em] font-light">01</span>
              <div className="transform -rotate-90 origin-left">
                <h2 className="text-lg text-foreground tracking-[0.3em] font-light whitespace-nowrap">
                  ABOUT
                </h2>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-8">
              <h3 className="text-5xl lg:text-6xl font-extralight text-foreground leading-tight">
                Creative mind focused on{" "}
                <span className="text-accent italic">meaningful</span> storytelling
              </h3>
              
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p className="font-light">
                  Five years of crafting narratives that bridge brands and audiences. 
                  I transform complex ideas into compelling stories that resonate 
                  and inspire action.
                </p>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-[1px] bg-accent/40"></div>
                  <p className="font-light italic">
                    "Every story has the potential to change a perspective, 
                    inspire an action, or create a lasting connection."
                  </p>
                </div>
                
                <p className="font-light">
                  From travel narratives that transport readers to technical 
                  documentation that simplifies complexity, I believe content 
                  should always serve a greater purpose.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="space-y-6">
              <h4 className="text-2xl font-light text-foreground">My Approach</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent/60 rounded-full mt-2"></div>
                    <div>
                      <h5 className="text-foreground font-light mb-2">Research-Driven</h5>
                      <p className="text-sm text-muted-foreground font-light">
                        Every piece begins with deep understanding of the audience and purpose
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent/60 rounded-full mt-2"></div>
                    <div>
                      <h5 className="text-foreground font-light mb-2">Emotion-First</h5>
                      <p className="text-sm text-muted-foreground font-light">
                        Connecting with readers on a human level before delivering information
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent/60 rounded-full mt-2"></div>
                    <div>
                      <h5 className="text-foreground font-light mb-2">Purpose-Driven</h5>
                      <p className="text-sm text-muted-foreground font-light">
                        Every word serves the greater goal of meaningful communication
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent/60 rounded-full mt-2"></div>
                    <div>
                      <h5 className="text-foreground font-light mb-2">Continuous Growth</h5>
                      <p className="text-sm text-muted-foreground font-light">
                        Always learning new techniques and staying current with trends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/10">
              <div className="space-y-2">
                <span className="text-3xl font-extralight text-foreground">200+</span>
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Articles</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-extralight text-foreground">50+</span>
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Clients</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-extralight text-foreground">5+</span>
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Years</p>
              </div>
            </div>
          </div>

          {/* Profile image and background */}
          <div className="lg:col-span-4">
            <div className="relative">
              {/* Background elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-accent/10 transform rotate-45"></div>
              <div className="absolute top-16 -right-4 w-16 h-16 bg-gradient-to-br from-accent/5 to-transparent transform -rotate-12"></div>
              
              {/* Main image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={profileImage} 
                  alt="Ajay Arya - Creative Writer" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
              
              {/* Accent elements */}
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent/20 transform rotate-45"></div>
              <div className="absolute top-1/3 -left-2 w-1 h-12 bg-gradient-to-b from-accent/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;