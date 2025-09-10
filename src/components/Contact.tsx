import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, ExternalLink, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "azayy5120@gmail.com",
      href: "mailto:azayy5120@gmail.com",
      description: "Best for detailed project discussions"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9456114339",
      href: "tel:+919456114339",
      description: "Available for calls 9 AM - 6 PM IST"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "linkedin.com/in/ajayarya",
      href: "https://linkedin.com/in/ajayarya",
      description: "Professional networking and updates"
    },
    {
      icon: ExternalLink,
      label: "Medium",
      value: "medium.com/@ajayarya",
      href: "https://medium.com/@ajayarya",
      description: "Read my published articles and insights"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-blue font-body font-medium tracking-wide uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary leading-tight mb-6">
            Let's <span className="text-accent-blue">Create</span> Together
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Whether you need a single blog post or 
            a comprehensive content strategy, let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-blue-soft rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-accent-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Blog Writing Project"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and goals..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-section-gradient rounded-xl p-8 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Get in Touch</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                I'm always excited to discuss new projects and opportunities. Feel free to reach out 
                through any of these channels, and I'll respond as quickly as possible.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border hover:shadow-soft transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-accent-blue-soft rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold text-primary group-hover:text-accent-blue transition-colors">
                          {method.label}
                        </h4>
                        <p className="text-foreground font-body font-medium text-sm mb-1">
                          {method.value}
                        </p>
                        <p className="text-muted-foreground font-body text-xs">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card border border-card-border rounded-xl p-8 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-body">Response Time</span>
                  <span className="text-accent-blue font-body font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-body">Project Start</span>
                  <span className="text-accent-blue font-body font-medium">Available now</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-body">Time Zone</span>
                  <span className="text-accent-blue font-body font-medium">IST (UTC +5:30)</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card border border-card-border rounded-xl p-8 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Why Choose Me?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-accent-blue">100%</div>
                  <div className="text-muted-foreground font-body text-sm">Quality Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-accent-blue">24h</div>
                  <div className="text-muted-foreground font-body text-sm">Quick Response</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-accent-blue">SEO</div>
                  <div className="text-muted-foreground font-body text-sm">Optimized Content</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-accent-blue">∞</div>
                  <div className="text-muted-foreground font-body text-sm">Revisions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;