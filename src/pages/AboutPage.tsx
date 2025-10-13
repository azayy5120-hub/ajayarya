import Navigation from "@/components/ecommerce/Navigation";
import Footer from "@/components/ecommerce/Footer";
import { Award, Users, Heart, Target } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every stitch, every material, and every design"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and comfort are at the heart of everything we do"
    },
    {
      icon: Heart,
      title: "Craftsmanship",
      description: "Traditional techniques meet modern innovation in every pair"
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Honest business practices and transparent relationships with our customers"
    }
  ];

  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-primary">Our Story</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2010, ELEGANTE FOOTWEAR emerged from a simple vision: 
              to create premium footwear that combines timeless craftsmanship with 
              contemporary design for the modern professional.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-primary">15 Years of Heritage</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What began as a small workshop with three master craftsmen has grown into 
                  a respected name in premium footwear. Our commitment to quality has never 
                  wavered, and our dedication to our customers remains unwavering.
                </p>
                <p>
                  Every pair of ELEGANTE shoes tells a story of meticulous attention to detail, 
                  from sourcing the finest leathers to the final quality inspection. We believe 
                  that true luxury lies not in excess, but in perfection of execution.
                </p>
                <p>
                  Today, we serve discerning professionals across the globe, each trusting us 
                  to provide footwear that performs as beautifully as it looks.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-large">
              <div className="text-center space-y-4">
                <div className="text-9xl">🏆</div>
                <p className="font-heading text-2xl text-primary">Since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every shoe we craft
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="elegant-card p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-primary mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind every pair of ELEGANTE shoes is a team of passionate craftsmen, 
              designers, and customer service professionals dedicated to your satisfaction. 
              With an average of 15 years of experience in premium footwear, our team brings 
              unparalleled expertise to every aspect of our business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
