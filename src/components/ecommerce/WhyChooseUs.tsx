import { Headphones, Truck, RotateCcw, CreditCard } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Headphones,
      title: "Expert Guidance",
      description: "Our knowledgeable team provides personalized service and style advice"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $150"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free return policy for your peace of mind"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Industry-leading encryption for safe and secure transactions"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-primary mb-4">Why Choose ELEGANTE</h2>
          <p className="text-lg text-muted-foreground">
            We're committed to providing an exceptional experience from browsing 
            to delivery and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title} 
                className="text-center space-y-4 p-6 elegant-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
