import { useState } from "react";
import Navigation from "@/components/ecommerce/Navigation";
import Footer from "@/components/ecommerce/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fashion Avenue", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Mon-Sat: 9AM - 6PM EST"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elegantefootwear.com", "support@elegantefootwear.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM", "Sun: Closed"]
    }
  ];

  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-heading text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="elegant-card p-8">
              <h2 className="font-heading text-2xl text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Subject *</label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="How can we help?"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full btn-primary h-12">
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question about our products, need sizing assistance, 
                  or want to discuss corporate orders, our team is ready to assist you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="elegant-card p-6 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-primary mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="elegant-card p-6 bg-secondary/10 border-secondary/20">
                <h3 className="font-heading text-lg text-primary mb-3">Corporate Inquiries</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For bulk orders, corporate accounts, or partnership opportunities, 
                  please contact our business team at <span className="text-primary font-medium">corporate@elegantefootwear.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
