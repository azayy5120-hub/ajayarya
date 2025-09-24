import { FileText, Edit3, BookOpen, Briefcase, Sparkles } from "lucide-react";
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
    <section id="services" className="py-16 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">
              Services
            </p>
            <h2 className="font-heading font-light text-4xl text-primary leading-tight">
              How I Can Help
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
              Quality content that connects with your audience and drives results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="border border-border rounded p-6 space-y-4 hover:shadow-minimal transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-muted rounded flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-medium text-primary text-sm">{service.id}</span>
                        <h3 className="font-heading font-medium text-primary">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground font-body text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="bg-muted/30 rounded p-6 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="font-heading font-medium text-xl text-primary">Writing Process</h3>
              <p className="text-muted-foreground font-body text-sm">
                A systematic approach ensuring quality, consistency, and results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
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
                <div key={index} className="text-center space-y-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-heading font-medium text-sm">
                    {process.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-medium text-primary text-sm">{process.title}</h4>
                    <p className="text-muted-foreground font-body text-xs">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;