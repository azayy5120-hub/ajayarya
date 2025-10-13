import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Collections", path: "/collections" },
    { label: "Size Guide", path: "/size-guide" },
    { label: "FAQ", path: "/faq" },
  ];

  const customerService = [
    { label: "Contact Us", path: "/contact" },
    { label: "Shipping & Returns", path: "/shipping" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-2">ELEGANTE</h3>
              <p className="text-xs font-body tracking-widest text-secondary">FOOTWEAR</p>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Crafting premium footwear for discerning professionals since 2010. 
              Quality, comfort, and timeless style in every step.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-wider">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span>123 Fashion Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>info@elegantefootwear.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 ELEGANTE FOOTWEAR. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
              <span>We Accept:</span>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-primary-foreground/10 rounded text-xs font-medium">VISA</div>
                <div className="px-3 py-1 bg-primary-foreground/10 rounded text-xs font-medium">MC</div>
                <div className="px-3 py-1 bg-primary-foreground/10 rounded text-xs font-medium">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
