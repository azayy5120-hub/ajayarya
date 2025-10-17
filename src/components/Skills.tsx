import { BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const Skills = () => {
  const skills = [
    { name: "CREATIVE WRITING", level: 90 },
    { name: "BLOG WRITING", level: 85 },
    { name: "SEO OPTIMIZATION", level: 70 },
    { name: "CONTENT STRATEGY", level: 75 },
    { name: "RESEARCH & ANALYSIS", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills with Progress Bars */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm">✨ MY SKILLS</span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mt-4 mb-6">
                LET'S EXPLORE POPULAR
                <br />
                SKILLS AND <span className="italic font-serif">EXPERIENCE</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Sift, we understand that success is just about delivering a product. It's 
                about building relationships and making a meaningful impact on client.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-card-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
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

          {/* Core Competencies */}
          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Content Writing Excellence</h3>
                  <p className="text-muted-foreground">
                    Crafting compelling narratives that engage readers and drive results. Specialized in 
                    blog posts, articles, and creative storytelling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">SEO Optimization</h3>
                  <p className="text-muted-foreground">
                    Expert in keyword research, on-page optimization, and creating content that ranks 
                    high in search engines while maintaining readability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Creative Storytelling</h3>
                  <p className="text-muted-foreground">
                    Bringing brands to life through imaginative narratives and emotional connections 
                    that resonate with audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;