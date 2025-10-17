import { Button } from "./ui/button";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/ajay-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-background flex items-center pt-20 relative overflow-hidden">
      {/* Top Right Contact Info */}
      <div className="absolute top-24 right-8 hidden lg:flex gap-12 text-sm">
        <div className="text-center">
          <Phone className="w-5 h-5 mx-auto mb-2 text-primary" />
          <div className="font-semibold text-foreground">Call</div>
          <div className="text-muted-foreground">+1 234 567 8900</div>
          <div className="text-muted-foreground">+1 234 567 8900</div>
        </div>
        <div className="text-center">
          <Mail className="w-5 h-5 mx-auto mb-2 text-primary" />
          <div className="font-semibold text-foreground">Email</div>
          <div className="text-muted-foreground">info@domain.com</div>
          <div className="text-muted-foreground">info@domain.com</div>
        </div>
        <div className="text-center">
          <MapPin className="w-5 h-5 mx-auto mb-2 text-primary" />
          <div className="font-semibold text-foreground">Location</div>
          <div className="text-muted-foreground">4562 Westnal Avenue</div>
          <div className="text-muted-foreground">Downtown, PA 50099</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-5xl xl:text-7xl leading-tight">
                <span className="text-primary">Hello,</span>{" "}
                <span className="italic text-foreground">I'm Ajay</span>
                <br />
                <span className="text-foreground">Content Writer</span>
                <br />
                <span className="text-foreground">Based In India</span>
              </h1>
              
              <p className="text-lg font-body leading-relaxed max-w-xl text-muted-foreground">
                A passionate content writer with more than 3 months of experience who is always excited to work with you to create wonderful stories!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")} 
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 rounded-lg transition-all duration-300"
              >
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-border text-foreground hover:bg-card transition-all duration-300 px-8 py-6"
              >
                Download CV →
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 pt-4">
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dribbble</div>
                  <div className="text-sm">See My Work</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Behance</div>
                  <div className="text-sm">See My Work</div>
                </div>
              </a>
            </div>
          </div>

          {/* Profile Image with Unique Shape */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Red background shape */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Heart-shaped clip path image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src={profileImage} 
                  alt="Ajay Arya - Content Writer" 
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 50% 88%, 18% 100%, 0% 38%)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;