import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Anderson",
      role: "Corporate Executive",
      content: "ELEGANTE's business collection has become my go-to for professional footwear. The quality and comfort are unmatched, and I always receive compliments.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      role: "Business Consultant",
      content: "Outstanding craftsmanship and attention to detail. These shoes not only look elegant but provide all-day comfort during long business meetings.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Banker",
      content: "From the moment I tried them on, I knew these were special. The perfect blend of tradition and modern design. Worth every penny.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-neutral">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-primary mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Hear from our satisfied customers who trust ELEGANTE for their footwear needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="elegant-card p-8 space-y-6"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-card-border">
                <p className="font-heading font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
