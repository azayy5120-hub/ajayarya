import { TrendingUp, Target, Award, BookOpen } from "lucide-react";
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
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        
        {/* Minimalist Header */}
        <div className="mb-8">
          <h2 className="font-heading font-light text-6xl text-black mb-1 tracking-tight">
            Work
          </h2>
          <p className="text-base text-gray-600 font-body max-w-2xl leading-relaxed">
            Travel content that inspires wanderlust and drives results.
          </p>
        </div>

        {/* Main Project - Clean Minimal Design */}
        <div className="mb-12">
          {portfolioHighlights.map((project, index) => (
            <div key={index} className="space-y-6">
              
              {/* Project Title - Tight Spacing */}
              <div className="border-l border-gray-300 pl-6">
                <h3 className="font-heading font-medium text-3xl text-black mb-0">
                  Travel Blog Series
                </h3>
                <p className="text-gray-600 font-body text-base leading-relaxed mt-1">
                  50+ travel blogs capturing the heart of India, designed to spark wanderlust, showcase hidden gems, and boost SEO performance
                </p>
              </div>

              {/* Clean Metrics Grid */}
              <div className="grid grid-cols-4 gap-8 py-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="font-heading font-medium text-2xl text-black mb-0">50+</div>
                  <div className="text-gray-500 font-body text-sm">Articles</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="font-heading font-medium text-2xl text-black mb-0">1,200</div>
                  <div className="text-gray-500 font-body text-sm">Avg Words</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="font-heading font-medium text-2xl text-black mb-0">95%</div>
                  <div className="text-gray-500 font-body text-sm">SEO Score</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Target className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="font-heading font-medium text-2xl text-black mb-0">High</div>
                  <div className="text-gray-500 font-body text-sm">Engagement</div>
                </div>
              </div>

              {/* Minimal Highlights */}
              <div className="space-y-2 pl-6">
                {project.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-4">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clean Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Future Projects */}
          <div>
            <h3 className="font-heading font-medium text-xl text-black mb-3">Future</h3>
            <div className="space-y-2">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 py-1 hover:translate-x-1 transition-transform duration-200">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 font-body text-sm leading-relaxed">{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback */}
          <div>
            <h3 className="font-heading font-medium text-xl text-black mb-3">Feedback</h3>
            <div className="py-6 text-center border border-gray-200">
              <p className="text-gray-500 font-body text-sm">
                Testimonials coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="text-center border-t border-gray-200 pt-8">
          <h3 className="font-heading font-medium text-2xl text-black mb-3">Ready to collaborate?</h3>
          <Button 
            variant="default" 
            size="sm" 
            onClick={scrollToContact}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm font-medium"
          >
            Start Project
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;