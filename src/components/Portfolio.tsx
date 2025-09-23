import { Calendar, MapPin, TrendingUp, Globe, Target, Zap, Award, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const portfolioHighlights = [
    {
      title: "Travel Blog Series at WabbitHire",
      description: "A comprehensive collection of 50+ travel blogs covering destinations worldwide, optimized for SEO and designed to inspire wanderlust.",
      metrics: [
        { label: "Articles Published", value: "50+" },
        { label: "Average Word Count", value: "1,200" },
        { label: "SEO Score", value: "95%" },
        { label: "Engagement Rate", value: "High" }
      ],
      highlights: [
        "Destination Guides Across the Country",
        "Cultural sensitivity and accuracy maintained",
        "SEO optimization with targeted keywords",
        "Consistent brand voice across all content",
        "Collaborated with editorial team for quality"
      ],
      period: "3 Months",
      type: "Travel Content Specialization"
    }
  ];

  const upcomingProjects = [
    "Personal Travel Blog Launch",
    "Content Strategy Certification",
    "Advanced SEO Course Completion",
    "Client Testimonial Collection",
    "Portfolio Website Expansion"
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Flowing Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-accent-blue font-body font-medium text-sm uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="font-heading font-bold text-6xl text-primary leading-none mb-2">
            Work
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-lg">
            Travel content that inspires wanderlust and drives results.
          </p>
        </div>

        {/* Main Project with Flowing Design */}
        <div className="space-y-8 mb-16">
          {portfolioHighlights.map((project, index) => (
            <div key={index} className="space-y-8">
              
              {/* Project Title */}
              <div className="border-l-2 border-accent-blue pl-6">
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">
                  Travel Blog Series
                </h3>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  50+ travel blogs capturing the heart of India, designed to spark wanderlust, showcase hidden gems, and boost SEO performance
                </p>
              </div>

              {/* Flowing Metrics */}
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-blue/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div className="font-heading font-bold text-2xl text-primary mb-1">50+</div>
                  <div className="text-muted-foreground font-body text-xs uppercase tracking-wide">Articles</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-orange/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div className="font-heading font-bold text-2xl text-primary mb-1">1,200</div>
                  <div className="text-muted-foreground font-body text-xs uppercase tracking-wide">Avg Words</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-green/20 transition-colors">
                    <Award className="w-6 h-6 text-accent-green" />
                  </div>
                  <div className="font-heading font-bold text-2xl text-primary mb-1">95%</div>
                  <div className="text-muted-foreground font-body text-xs uppercase tracking-wide">SEO Score</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-purple/20 transition-colors">
                    <Zap className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div className="font-heading font-bold text-2xl text-primary mb-1">High</div>
                  <div className="text-muted-foreground font-body text-xs uppercase tracking-wide">Engagement</div>
                </div>
              </div>

              {/* Minimal Highlights */}
              <div className="space-y-3">
                {project.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground font-body leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flowing Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Future Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-accent-orange" />
              <h3 className="font-heading font-bold text-2xl text-primary">Future</h3>
            </div>
            
            <div className="space-y-3">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-start gap-4 py-2 hover:translate-x-1 transition-transform duration-200">
                  <div className="w-1 h-1 bg-accent-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-foreground font-body leading-relaxed">{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-accent-green" />
              <h3 className="font-heading font-bold text-2xl text-primary">Feedback</h3>
            </div>
            
            <div className="py-8 text-center border border-accent-gray/50 rounded-lg">
              <p className="text-muted-foreground font-body">
                Testimonials coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="text-center border-t border-accent-gray/30 pt-12">
          <h3 className="font-heading font-bold text-3xl text-primary mb-4">Ready to collaborate?</h3>
          <Button 
            variant="default" 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
          >
            Start Project
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;