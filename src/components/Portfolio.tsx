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
    <section id="portfolio" className="py-8 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Minimal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center">
              <Globe className="w-3 h-3 text-white" />
            </div>
            <span className="text-accent-blue font-body font-medium text-xs uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="font-heading font-bold text-3xl text-white leading-tight mb-1">
            Work
          </h2>
          <p className="text-sm text-gray-400 font-body max-w-lg">
            Travel content that inspires wanderlust and drives results.
          </p>
        </div>

        {/* Main Project with Minimal Design */}
        <div className="space-y-4 mb-8">
          {portfolioHighlights.map((project, index) => (
            <div key={index} className="space-y-4">
              
              {/* Project Title */}
              <div className="border-l-2 border-accent-blue pl-4">
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  Travel Blog Series
                </h3>
                <p className="text-sm text-gray-400 font-body leading-relaxed">
                  50+ travel blogs capturing the heart of India, designed to spark wanderlust, showcase hidden gems, and boost SEO performance
                </p>
              </div>

              {/* Minimal Metrics */}
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center group">
                  <div className="w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:bg-accent-blue/30 transition-colors">
                    <BookOpen className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div className="font-heading font-bold text-lg text-white mb-0.5">50+</div>
                  <div className="text-gray-400 font-body text-xs">Articles</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-8 h-8 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:bg-accent-orange/30 transition-colors">
                    <TrendingUp className="w-4 h-4 text-accent-orange" />
                  </div>
                  <div className="font-heading font-bold text-lg text-white mb-0.5">1,200</div>
                  <div className="text-gray-400 font-body text-xs">Avg Words</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:bg-accent-green/30 transition-colors">
                    <Award className="w-4 h-4 text-accent-green" />
                  </div>
                  <div className="font-heading font-bold text-lg text-white mb-0.5">95%</div>
                  <div className="text-gray-400 font-body text-xs">SEO Score</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-8 h-8 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:bg-accent-purple/30 transition-colors">
                    <Zap className="w-4 h-4 text-accent-purple" />
                  </div>
                  <div className="font-heading font-bold text-lg text-white mb-0.5">High</div>
                  <div className="text-gray-400 font-body text-xs">Engagement</div>
                </div>
              </div>

              {/* Minimal Highlights */}
              <div className="space-y-1">
                {project.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-gray-300 font-body text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Future Projects */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-accent-orange" />
              <h3 className="font-heading font-bold text-lg text-white">Future</h3>
            </div>
            
            <div className="space-y-1">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 py-1 hover:translate-x-1 transition-transform duration-200">
                  <div className="w-0.5 h-0.5 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 font-body text-sm leading-relaxed">{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-accent-green" />
              <h3 className="font-heading font-bold text-lg text-white">Feedback</h3>
            </div>
            
            <div className="py-4 text-center border border-gray-700 rounded-lg">
              <p className="text-gray-400 font-body text-sm">
                Testimonials coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="text-center border-t border-gray-700 pt-6">
          <h3 className="font-heading font-bold text-xl text-white mb-2">Ready to collaborate?</h3>
          <Button 
            variant="default" 
            size="sm" 
            onClick={scrollToContact}
            className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-full text-sm"
          >
            Start Project
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;