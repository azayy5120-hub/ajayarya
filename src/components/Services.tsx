import { FileText, Edit3, BookOpen, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts that drive traffic and build authority.",
      icon: BookOpen,
      features: [
        "SEO-optimized content",
        "Keyword research included",
        "Engaging storytelling",
        "Call-to-action optimization"
      ]
    },
    {
      id: "02", 
      title: "Article Writing",
      description: "Well-researched, informative articles that establish thought leadership.",
      icon: FileText,
      features: [
        "In-depth research",
        "Professional tone",
        "Fact-checked content",
        "Industry-specific knowledge"
      ]
    },
    {
      id: "03",
      title: "Creative Writing",
      description: "Expressive content that tells your brand story through compelling narratives.",
      icon: Sparkles,
      features: [
        "Brand storytelling",
        "Emotional connection",
        "Unique voice development",
        "Creative concepts"
      ]
    },
    {
      id: "04",
      title: "Freelance Writing",
      description: "Flexible writing services tailored to your specific project needs.",
      icon: Briefcase,
      features: [
        "Custom project scope",
        "Flexible timelines",
        "Multiple revisions",
        "Ongoing support"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-blue font-body font-medium tracking-wide uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary leading-tight mb-6">
            How I Can <span className="text-accent-blue">Help</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Quality content that connects with your audience and drives results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent-blue-soft rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading font-bold text-accent-blue">{service.id}</span>
                      <h3 className="font-heading font-bold text-lg text-primary">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="grid sm:grid-cols-2 gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent-blue rounded-full flex-shrink-0"></div>
                        <span className="text-foreground font-body text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-section-gradient rounded-xl p-8 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-primary mb-4">My Writing Process</h3>
            <p className="text-muted-foreground font-body">
              A systematic approach that ensures quality, consistency, and results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your goals, audience, and brand voice"
              },
              {
                step: "02", 
                title: "Research",
                description: "Deep dive into your industry, competitors, and trends"
              },
              {
                step: "03",
                title: "Creation",
                description: "Crafting engaging content optimized for your objectives"
              },
              {
                step: "04",
                title: "Refinement",
                description: "Revisions and optimization based on your feedback"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">{process.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;