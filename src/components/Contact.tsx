import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, ExternalLink, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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

    try {
      emailjs.init("ZDMtGhRtiLZVhxbmV");

      await emailjs.send(
        "service_cd3yvld",
        "template_6nrv8ni",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Ajay Arya",
        }
      );

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
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      description: "Available 9 AM - 6 PM IST"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "linkedin.com/in/ajay-arya-19ba7334b",
      href: "https://www.linkedin.com/in/ajay-arya-19ba7334b",
      description: "Professional networking"
    },
    {
      icon: ExternalLink,
      label: "Medium",
      value: "medium.com/@ak6713324",
      href: "https://medium.com/@ak6713324",
      description: "Published articles and insights"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">
              Get In Touch
            </p>
            <h2 className="font-heading font-light text-4xl text-primary leading-tight">
              Let's Create Together
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
              Have a project in mind? I'd love to hear about it. Whether you need a single blog post or 
              comprehensive content strategy, let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border border-border rounded p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading font-medium text-primary">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
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
                      className="border-border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
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
                      className="border-border bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
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
                    className="border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={5}
                    className="border-border bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="default" 
                  size="default" 
                  className="w-full text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-3 w-3" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-muted/30 rounded p-6 space-y-4">
                <h3 className="font-heading font-medium text-primary">Get in Touch</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  I'm always excited to discuss new projects and opportunities. Feel free to reach out 
                  through any of these channels.
                </p>

                <div className="space-y-3">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.href}
                        className="flex items-start gap-3 p-3 bg-background rounded border border-border hover:shadow-minimal transition-shadow"
                      >
                        <div className="w-5 h-5 bg-muted rounded flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-3 h-3 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-heading font-medium text-primary text-sm">
                            {method.label}
                          </h4>
                          <p className="text-muted-foreground font-body text-xs">
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
              <div className="border border-border rounded p-6 space-y-4">
                <h3 className="font-heading font-medium text-primary">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-body text-sm">Response Time</span>
                    <span className="text-primary font-body font-medium text-sm">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-body text-sm">Project Start</span>
                    <span className="text-primary font-body font-medium text-sm">Available now</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-body text-sm">Time Zone</span>
                    <span className="text-primary font-body font-medium text-sm">IST (UTC +5:30)</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="border border-border rounded p-6 space-y-4">
                <h3 className="font-heading font-medium text-primary">Why Choose Me?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-1">
                    <div className="font-heading font-medium text-lg text-primary">100%</div>
                    <div className="text-muted-foreground font-body text-xs">Quality Guaranteed</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="font-heading font-medium text-lg text-primary">24h</div>
                    <div className="text-muted-foreground font-body text-xs">Quick Response</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="font-heading font-medium text-lg text-primary">SEO</div>
                    <div className="text-muted-foreground font-body text-xs">Optimized Content</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="font-heading font-medium text-lg text-primary">∞</div>
                    <div className="text-muted-foreground font-body text-xs">Revisions</div>
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

export default Contact;