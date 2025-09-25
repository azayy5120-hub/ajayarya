import { TrendingUp, Target, Award, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const portfolioHighlights = [
    {
      title: "Travel Blog Series at WabbitHire",
      description: "A comprehensive collection of 50+ travel blogs covering destinations worldwide, optimized for SEO and designed to inspire wanderlust.",
      metrics: {
        articles: "50+",
        wordCount: "1,200",
        seoScore: "95%",
        engagement: "High"
      },
      highlights: [
        "Destination Guides Across the Country",
        "Cultural sensitivity and accuracy maintained",
        "SEO optimization with targeted keywords",
        "Consistent brand voice across all content",
        "Collaborated with editorial team for quality"
      ],
      duration: "3 Months",
      type: "Travel Content Specialization"
    }
  ];

  const upcomingProjects = [
    { title: "Personal Travel Blog", description: "Launching my own travel content platform" },
    { title: "Content Strategy Certification", description: "Advanced content marketing credentials" },
    { title: "SEO Mastery Course", description: "Deep dive into technical SEO optimization" },
    { title: "Portfolio Expansion", description: "Adding video and interactive content" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="space-y-8 sticky top-32">
              <span className="text-xs text-muted-foreground/40 tracking-[0.4em] font-light">02</span>
              <div className="transform -rotate-90 origin-left">
                <h2 className="text-lg text-foreground tracking-[0.3em] font-light whitespace-nowrap">
                  WORK
                </h2>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-10">
            <h3 className="text-5xl lg:text-6xl font-extralight text-foreground leading-tight mb-8">
              Selected <span className="text-accent italic">projects</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              A curated showcase of content that demonstrates strategic thinking, 
              creative execution, and measurable impact across diverse industries.
            </p>
          </div>
        </div>

        {/* Featured Project */}
        <div className="space-y-24">
          {portfolioHighlights.map((project, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Project meta */}
                <div className="lg:col-span-3 space-y-8">
                  <div className="space-y-4">
                    <span className="text-8xl font-extralight text-muted-foreground/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-light text-foreground leading-tight">{project.title}</h4>
                      <p className="text-sm text-muted-foreground tracking-[0.1em] uppercase">{project.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground/40 tracking-[0.3em] uppercase">Duration</span>
                    <p className="text-sm text-muted-foreground">{project.duration}</p>
                  </div>
                </div>

                {/* Project content */}
                <div className="lg:col-span-9 space-y-12">
                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl">
                      {project.description}
                    </p>
                    
                    {/* Accent line */}
                    <div className="w-24 h-[1px] bg-gradient-to-r from-accent to-transparent"></div>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="space-y-3">
                        <div className="text-3xl font-extralight text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize tracking-[0.2em] uppercase">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-light text-foreground">Key Achievements</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-4 group/item">
                          <div className="w-2 h-2 bg-accent/60 rounded-full mt-2 group-hover/item:bg-accent transition-colors"></div>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover/item:text-foreground transition-colors">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future section */}
        <div className="mt-40 pt-24 border-t border-border/10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h3 className="text-4xl font-extralight text-foreground">What's Next</h3>
              <div className="space-y-8">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="space-y-3 group/project">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-lg font-light text-foreground group-hover/project:text-accent transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed ml-8">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-12">
              <h3 className="text-4xl font-extralight text-foreground">Let's Create Together</h3>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                  Ready to transform your ideas into compelling content that resonates 
                  with your audience and drives meaningful results?
                </p>
                
                <div className="space-y-6">
                  <button 
                    onClick={scrollToContact}
                    className="group text-foreground hover:text-accent transition-colors duration-300 text-lg font-light"
                  >
                    <span className="border-b border-transparent group-hover:border-accent pb-1">
                      Start a Project
                    </span>
                  </button>
                  
                  <div className="text-sm text-muted-foreground/60 space-y-2">
                    <p>→ Content Strategy & Planning</p>
                    <p>→ Creative Writing & Storytelling</p>
                    <p>→ SEO Optimization & Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;