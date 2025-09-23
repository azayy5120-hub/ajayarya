import { ExternalLink, Calendar, MapPin, Users, TrendingUp, Globe, Target, Zap } from "lucide-react";
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
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-accent-blue" />
            <span className="text-accent-blue font-body font-medium text-sm tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className="font-heading font-bold text-5xl lg:text-6xl text-primary leading-tight mb-6">
            Work
          </h2>
          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Travel content that inspires wanderlust and drives results.
          </p>
        </div>

        {/* Main Project - Minimal Design */}
        <div className="mb-20">
          {portfolioHighlights.map((project, index) => (
            <div key={index} className="border-l-4 border-accent-blue pl-8 mb-16">
              <div className="mb-12">
                <h3 className="font-heading font-bold text-3xl text-primary mb-4">
                  Travel Blog Series
                </h3>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-6">
                  50+ travel blogs capturing the heart of India, designed to spark wanderlust, showcase hidden gems, and boost SEO performance
                </p>
                
                {/* Clean Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="text-center">
                    <div className="font-heading font-bold text-4xl text-accent-blue mb-2">50+</div>
                    <div className="text-muted-foreground font-body text-sm uppercase tracking-wide">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-4xl text-accent-orange mb-2">1,200</div>
                    <div className="text-muted-foreground font-body text-sm uppercase tracking-wide">Avg Words</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-4xl text-accent-green mb-2">95%</div>
                    <div className="text-muted-foreground font-body text-sm uppercase tracking-wide">SEO Score</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-4xl text-primary mb-2">High</div>
                    <div className="text-muted-foreground font-body text-sm uppercase tracking-wide">Engagement</div>
                  </div>
                </div>

                {/* Minimal Highlights */}
                <div className="space-y-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-4">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <p className="text-foreground font-body">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Future Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-accent-orange" />
              <h3 className="font-heading font-bold text-2xl text-primary">Future</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-4 py-3 border-b border-accent-gray last:border-0">
                  <div className="w-1 h-1 bg-accent-orange rounded-full"></div>
                  <span className="text-foreground font-body">{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-accent-green" />
              <h3 className="font-heading font-bold text-2xl text-primary">Feedback</h3>
            </div>
            
            <div className="py-12 text-center border border-accent-gray rounded-lg">
              <p className="text-muted-foreground font-body">
                Testimonials coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="mt-24 text-center">
          <h3 className="font-heading font-bold text-3xl text-primary mb-6">Ready to collaborate?</h3>
          <Button 
            variant="default" 
            size="lg" 
            onClick={scrollToContact}
            className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3"
          >
            Start Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;