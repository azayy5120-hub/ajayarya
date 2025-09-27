import { GraduationCap, PenTool, Heart, BookOpen, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue-soft border border-accent-blue/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="font-body font-medium text-accent-blue text-sm tracking-wide uppercase">About Me</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Passionate About
            <span className="text-primary"> Storytelling</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="dashboard-card">
              <p className="text-lg text-foreground font-body leading-relaxed mb-6">
                My journey into content writing began with a simple love for words and their power to connect, 
                inspire, and transform. Every piece I write is crafted with the intention of creating meaningful 
                connections between brands and their audiences.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="dashboard-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PenTool className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Creative Writing</h3>
                    <p className="text-muted-foreground font-body">
                      I believe in the art of storytelling - weaving emotions, facts, and creativity into compelling narratives 
                      that resonate with readers long after they've finished reading.
                    </p>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Passion-Driven</h3>
                    <p className="text-muted-foreground font-body">
                      Writing isn't just my profession; it's my passion. I approach every project with enthusiasm, 
                      ensuring that my love for words translates into engaging content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground font-body">
                      The digital landscape is constantly evolving, and so am I. I stay updated with the latest trends in 
                      content marketing, SEO, and storytelling techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Background */}
          <div className="space-y-8">
            <div className="dashboard-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">Education</h3>
                  <p className="text-muted-foreground font-body">Academic Foundation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 bg-accent-blue-soft p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-lg text-foreground">
                    Higher Secondary Certificate (12th Standard)
                  </h4>
                  <p className="text-primary font-body font-medium">Pune University, Maharashtra</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    Built a strong foundation in language, literature, and communication skills
                  </p>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">What Drives Me</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-accent-gray/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-foreground font-body">Creating content that educates and entertains</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent-gray/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-foreground font-body">Helping brands find their unique voice</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent-gray/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-foreground font-body">Bridging the gap between information and inspiration</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent-gray/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-foreground font-body">Crafting SEO-optimized content that ranks and resonates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;