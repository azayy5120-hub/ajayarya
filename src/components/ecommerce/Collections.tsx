import { Link } from "react-router-dom";
import { Briefcase, Coffee, Award } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      title: "Business Collection",
      description: "Professional footwear for the corporate world",
      icon: Briefcase,
      image: "business",
      link: "/collections?category=business"
    },
    {
      title: "Casual Collection",
      description: "Comfort meets style for everyday wear",
      icon: Coffee,
      image: "casual",
      link: "/collections?category=casual"
    },
    {
      title: "Formal Collection",
      description: "Elegant designs for special occasions",
      icon: Award,
      image: "formal",
      link: "/collections?category=formal"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-primary mb-4">Our Collections</h2>
          <p className="text-lg text-muted-foreground">
            Expertly curated collections designed for every occasion. 
            Each piece reflects our commitment to quality and timeless style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => {
            const Icon = collection.icon;
            return (
              <Link
                key={collection.title}
                to={collection.link}
                className="group"
              >
                <div className="elegant-card h-full overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-neutral to-card flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                    <Icon className="w-24 h-24 text-secondary/40 group-hover:text-secondary/60 transition-colors duration-300 relative z-10" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading text-2xl text-primary group-hover:text-secondary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {collection.description}
                    </p>
                    <p className="text-sm font-medium text-primary uppercase tracking-wider group-hover:tracking-widest transition-all">
                      Explore →
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;
