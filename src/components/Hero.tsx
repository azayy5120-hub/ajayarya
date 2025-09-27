import { Button } from "./ui/button";
import { ArrowDown, Mail, TrendingUp, Zap } from "lucide-react";
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
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue-soft border border-accent-blue/20 rounded-full">
                <Zap className="w-4 h-4 text-accent-blue" />
                <span className="font-body font-medium text-accent-blue text-sm tracking-wide uppercase">
                  Content Writer & Storyteller
                </span>
              </div>
              
              <h1 className="font-heading font-bold text-6xl xl:text-7xl text-foreground leading-tight">
                Hi There,<br />
                I'm <span className="text-primary glow-effect">Ajay Arya</span>
              </h1>
              
              <p className="text-xl font-body leading-relaxed max-w-2xl text-muted-foreground">
                Crafting words to tell the fresh tale of eternal idea and boundless creativity.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-foreground font-body leading-relaxed max-w-2xl text-lg">
                I am a content writer who breathes life into words, shaping them into stories that linger beyond moments. 
                For me, writing is living expression. It is the art of fusing imagination, insight, and emotion that 
                narrates the beauty of vision from pages to faces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("portfolio")} 
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow"
                >
                  View My Portfolio
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection("contact")} 
                  className="w-full sm:w-auto border-accent-blue/30 text-foreground hover:bg-accent-blue-soft hover:border-accent-blue transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Dashboard-style Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="dashboard-metric text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-1">50+</div>
                <div className="text-muted-foreground font-body text-sm">Travel Blogs</div>
              </div>
              <div className="dashboard-metric text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-1">3</div>
                <div className="text-muted-foreground font-body text-sm">Months Experience</div>
              </div>
              <div className="dashboard-metric text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-heading font-bold text-lg text-primary">SEO</span>
                </div>
                <div className="text-muted-foreground font-body text-sm">Optimized</div>
              </div>
            </div>
          </div>

          {/* Profile Image with Dashboard Style */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="dashboard-card w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden p-2">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-accent-blue/20 to-primary/20">
                  <img 
                    src={profileImage} 
                    alt="Ajay Arya - Content Writer" 
                    className="w-full h-full object-cover rounded-xl" 
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-blue/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;