import { GraduationCap, PenTool, Heart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">
                About
              </p>
              <h2 className="font-heading font-light text-4xl text-primary leading-tight">
                Passionate About Storytelling
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed max-w-md">
                My journey began with a love for words and their power to connect, inspire, and transform. Every piece is crafted to create meaningful connections.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-heading font-medium text-primary">Creative Writing</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Weaving emotions, facts, and creativity into compelling narratives that resonate with readers.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-medium text-primary">Passion-Driven</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Writing isn't just my profession; it's my passion. I approach every project with enthusiasm.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-medium text-primary">Continuous Learning</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Staying updated with the latest trends in content marketing, SEO, and storytelling techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Background */}
          <div className="space-y-6">
            <div className="bg-muted/30 border border-border rounded p-6">
              <div className="space-y-3">
                <h3 className="font-heading font-medium text-primary">Education</h3>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-heading font-medium text-primary text-sm">
                    Higher Secondary Certificate
                  </h4>
                  <p className="text-muted-foreground font-body text-sm">Pune University, Maharashtra</p>
                  <p className="text-muted-foreground font-body text-xs mt-1">
                    Foundation in language, literature, and communication
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-medium text-primary">What Drives Me</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body text-sm">Creating content that educates and entertains</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body text-sm">Helping brands find their unique voice</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body text-sm">Bridging information and inspiration</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body text-sm">Crafting SEO-optimized content</p>
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