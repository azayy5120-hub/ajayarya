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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            I'm a content writing partner. Let's transform your vision into
            <br />ideas that resonate. Whether it's a fully web or a revamp, 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="service-card hover:bg-card/30"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;