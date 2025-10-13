import { Gem, Award, Shield, Sparkles } from "lucide-react";

const Craftsmanship = () => {
  const features = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Sourced from the finest tanneries worldwide for uncompromising quality"
    },
    {
      icon: Award,
      title: "Master Craftsmen",
      description: "Handcrafted by skilled artisans with decades of experience"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every pair undergoes rigorous inspection to meet our exacting standards"
    },
    {
      icon: Sparkles,
      title: "Timeless Design",
      description: "Classic styles refined with contemporary elegance"
    }
  ];

  return (
    <section className="section-padding bg-neutral">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-primary">
                Uncompromising Craftsmanship
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ELEGANTE FOOTWEAR, we believe true quality comes from dedication to traditional 
                craftsmanship combined with modern innovation. Each pair of shoes is a testament 
                to our commitment to excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-heading text-lg text-primary">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-large">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8 space-y-4">
                  <div className="text-8xl">🏆</div>
                  <p className="font-heading text-2xl text-primary">Crafted to Perfection</p>
                  <p className="text-muted-foreground">15+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
