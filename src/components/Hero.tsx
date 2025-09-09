import { Button } from "./ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
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
  return <section id="home" className="min-h-screen bg-hero-gradient flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-body font-medium tracking-wide uppercase text-sm text-slate-950">
                Content Writer & Storyteller
              </p>
              <h1 className="font-heading font-bold text-5xl xl:text-7xl text-primary leading-tight lg:text-4xl">
                Hi There,<br />
                I'm <span className="text-sky-500">Ajay Arya</span>
              </h1>
              <p className="text-xl font-body leading-relaxed max-w-2xl font-medium text-slate-800 lg:text-xl">Crafting words to tell the fresh tale of eternal idea and boundless creativity.</p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground font-body leading-relaxed max-w-2xl text-lg">I am a content writer who breathes life into words, shaping them into stories that linger beyond moments. For me, writing is living expression. It is the art of  fusing imagination, insight, and emotion that narrates the beauty of vision from pages to faces.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" onClick={() => scrollToSection("portfolio")} className="w-full sm:w-auto">
                  View My Portfolio
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-accent-gray">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">50+</div>
                <div className="text-muted-foreground font-body text-sm">Travel Blogs</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">3</div>
                <div className="text-muted-foreground font-body text-sm">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">SEO</div>
                <div className="text-muted-foreground font-body text-sm">Optimized</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large border-8 border-background">
                <img src={profileImage} alt="Ajay Arya - Content Writer" className="w-full h-full object-cover" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue-soft rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-blue-soft rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;