import { ExternalLink, Calendar, MapPin, Users, TrendingUp } from "lucide-react";
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
        "Destination guides for 25+ countries",
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
    <section id="portfolio" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-blue font-body font-medium tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary leading-tight mb-6">
            My <span className="text-accent-blue">Work</span> Speaks
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Every project is a testament to my commitment to quality, creativity, and results. 
            Here's a showcase of my professional journey and achievements.
          </p>
        </div>

        {/* Main Portfolio Project */}
        <div className="mb-16">
          {portfolioHighlights.map((project, index) => (
            <div key={index} className="bg-card border border-card-border rounded-xl p-8 shadow-medium">
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center bg-accent-gray/30 rounded-lg p-4">
                    <div className="font-heading font-bold text-2xl text-accent-blue mb-1">
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground font-body text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Highlights */}
              <div className="space-y-6">
                <h4 className="font-heading font-semibold text-xl text-primary">Project Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-foreground font-body">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Projects */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-soft">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-blue-soft rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary">Future Projects</h3>
                <p className="text-muted-foreground font-body text-sm">Expanding my portfolio</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-accent-gray/20 rounded-lg">
                  <div className="w-2 h-2 bg-accent-blue rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-body">{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Placeholder */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-soft">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-blue-soft rounded-lg flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary">Client Feedback</h3>
                <p className="text-muted-foreground font-body text-sm">What clients say about my work</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-accent-gray/20 rounded-lg p-6">
                <p className="text-foreground font-body italic leading-relaxed mb-4">
                  "Ajay consistently delivered high-quality travel content that perfectly captured our brand voice. 
                  His SEO expertise helped improve our content visibility significantly."
                </p>
                <div>
                  <p className="font-heading font-semibold text-primary">Editorial Team</p>
                  <p className="text-muted-foreground font-body text-sm">WabbitHire</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground font-body text-sm mb-4">
                  More testimonials coming soon as I continue to work with amazing clients
                </p>
                <Button variant="outline" onClick={scrollToContact}>
                  Work With Me
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card border border-card-border rounded-xl p-8 shadow-soft">
          <h3 className="font-heading font-bold text-2xl text-primary mb-4">Ready to Create Something Amazing?</h3>
          <p className="text-lg text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next content project and create something that truly resonates with your audience.
          </p>
          <Button variant="cta" size="lg" onClick={scrollToContact}>
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;