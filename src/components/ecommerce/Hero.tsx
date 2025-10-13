import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-neutral overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px] md:min-h-[700px] py-12">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-sm font-medium text-secondary tracking-wider uppercase">
                New Collection 2025
              </span>
            </div>
            
            <h1 className="font-heading text-primary leading-tight">
              Crafted Excellence
              <span className="block text-secondary mt-2">For Every Step</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discover our curated collection of premium footwear, where timeless craftsmanship 
              meets contemporary design. Perfect for the discerning professional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/collections">
                <Button 
                  size="lg" 
                  className="btn-primary px-8 py-6 group"
                >
                  EXPLORE COLLECTION
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider"
                >
                  OUR STORY
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-card-border">
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-heading font-semibold text-primary">10K+</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Happy Customers</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-heading font-semibold text-primary">15+</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Years Heritage</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-heading font-semibold text-primary">100%</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Quality Assured</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-large fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-card/50 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-secondary/30">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">👞</div>
                    <p className="font-heading text-2xl text-primary">Premium Shoes</p>
                    <p className="text-sm text-muted-foreground">Handcrafted Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
