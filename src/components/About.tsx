import { Button } from "./ui/button";
import profileImage from "@/assets/ajay-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Projects Card - Top Right */}
      <div className="absolute top-20 right-20 hidden xl:block">
        <div className="modern-card w-48 text-center bg-card">
          <div className="text-5xl font-bold text-primary mb-2">350+</div>
          <div className="text-sm text-muted-foreground">Notable Projects</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="w-full aspect-square bg-primary rounded-2xl overflow-hidden">
              <img 
                src={profileImage} 
                alt="Ajay Arya - Content Writer" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-primary font-body font-medium text-sm mb-4">About Me</h3>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                I'm Ajay, A designer
                <br />
                based in <span className="italic">Los Angeles</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              I've always been fascinated by the intersection of art and technology, and my career has been dedicated to finding the
              perfect balance between the two.
            </p>

            <Button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border border-border text-foreground hover:bg-card transition-all duration-300 rounded-md px-8 py-6"
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">400+</div>
            <div className="text-muted-foreground">Project Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">17+</div>
            <div className="text-muted-foreground">Winning Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;