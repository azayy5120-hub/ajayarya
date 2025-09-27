import { PenTool, Search, BookOpen, BarChart3, Target, Lightbulb, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Creative Writing & Storytelling",
      icon: PenTool,
      description: "Transforming ideas into compelling narratives that captivate and engage readers",
      skills: ["Creative Writing", "Storytelling", "Narrative Development", "Character Creation"]
    },
    {
      title: "Blog Writing & Content Strategy",
      icon: BookOpen,
      description: "Creating strategic content that aligns with brand goals and audience needs",
      skills: ["Blog Writing", "Content Planning", "Editorial Strategy", "Brand Voice Development"]
    },
    {
      title: "Travel Content Specialization",
      icon: Target,
      description: "Expert knowledge in travel writing with cultural sensitivity and accuracy",
      skills: ["Destination Writing", "Cultural Research", "Travel Guides", "Experience Storytelling"]
    },
    {
      title: "Search Engine Optimization",
      icon: Search,
      description: "Optimizing content for search visibility while maintaining readability and engagement",
      skills: ["Keyword Research", "On-Page SEO", "Meta Optimization", "SEO Writing"]
    },
    {
      title: "Content Performance Analysis",
      icon: BarChart3,
      description: "Measuring content success and optimizing based on data-driven insights",
      skills: ["Analytics Review", "Performance Tracking", "A/B Testing", "ROI Analysis"]
    },
    {
      title: "Research & Innovation",
      icon: Lightbulb,
      description: "Thorough research capabilities ensuring accurate, relevant, and trending content",
      skills: ["Market Research", "Trend Analysis", "Fact Verification", "Source Validation"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue-soft border border-accent-blue/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent-blue" />
            <span className="font-body font-medium text-accent-blue text-sm tracking-wide uppercase">
              Skills & Expertise
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            What I <span className="text-primary">Bring</span> to the Table
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            A comprehensive skill set developed through hands-on experience, continuous learning, 
            and a passion for creating content that makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="dashboard-card hover:transform hover:-translate-y-2"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 p-2 bg-accent-gray/30 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-body text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 dashboard-card">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Core Competencies</h3>
            <p className="text-muted-foreground font-body">
              The foundation skills that drive every project I undertake
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="font-heading font-bold text-2xl text-primary">50+</span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Travel Blogs</h4>
              <p className="text-muted-foreground font-body text-sm">Successfully published and optimized</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="font-heading font-bold text-2xl text-primary">SEO</span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Optimization</h4>
              <p className="text-muted-foreground font-body text-sm">Search engine friendly content</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="font-heading font-bold text-2xl text-primary">24/7</span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Availability</h4>
              <p className="text-muted-foreground font-body text-sm">Dedicated to meeting deadlines</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="font-heading font-bold text-2xl text-primary">100%</span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Quality</h4>
              <p className="text-muted-foreground font-body text-sm">Commitment to excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;