import { FileText, Edit3, BookOpen, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts that drive traffic and build authority in your niche.",
      icon: BookOpen,
      features: [
        "SEO-optimized content",
        "Keyword research included",
        "Engaging storytelling",
        "Call-to-action optimization"
      ],
      deliverables: "1000-2000 words per blog post"
    },
    {
      id: "02", 
      title: "Article Writing",
      description: "Well-researched, informative articles that establish thought leadership and expertise.",
      icon: FileText,
      features: [
        "In-depth research",
        "Professional tone",
        "Fact-checked content",
        "Industry-specific knowledge"
      ],
      deliverables: "800-1500 words per article"
    },
    {
      id: "03",
      title: "Post Writing",
      description: "Social media and web posts that capture attention and drive engagement across platforms.",
      icon: Edit3,
      features: [
        "Platform-specific optimization",
        "Hashtag strategy",
        "Visual content suggestions",
        "Engagement-focused writing"
      ],
      deliverables: "50-300 words per post"
    },
    {
      id: "04",
      title: "Creative Writing",
      description: "Expressive content that tells your brand story through compelling narratives and emotions.",
      icon: Sparkles,
      features: [
        "Brand storytelling",
        "Emotional connection",
        "Unique voice development",
        "Creative concepts"
      ],
      deliverables: "Custom length based on project"
    },
    {
      id: "05",
      title: "Freelance Writing",
      description: "Flexible writing services tailored to your specific project needs and requirements.",
      icon: Briefcase,
      features: [
        "Custom project scope",
        "Flexible timelines",
        "Multiple revisions",
        "Ongoing support"
      ],
      deliverables: "Varies by project requirements"
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
            How I Can <span className="text-accent-blue">Help</span> You
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            From concept to completion, I offer comprehensive writing services that help your brand 
            communicate effectively and connect meaningfully with your audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-accent-blue-soft rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading font-bold text-accent-blue text-lg">{service.id}</span>
                      <h3 className="font-heading font-bold text-xl text-primary">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-heading font-semibold text-primary">What's Included:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-blue rounded-full flex-shrink-0"></div>
                        <span className="text-foreground font-body text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="bg-accent-gray/30 rounded-lg p-4 mb-6">
                  <p className="text-foreground font-body text-sm">
                    <span className="font-semibold">Typical Length:</span> {service.deliverables}
                  </p>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
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