import { PenTool, Search, BookOpen, BarChart3, Target, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Creative Writing",
      icon: PenTool,
      description: "Transforming ideas into compelling narratives that captivate readers",
      skills: ["Storytelling", "Narrative Development", "Character Creation", "Brand Voice"]
    },
    {
      title: "Content Strategy",
      icon: BookOpen,
      description: "Strategic content that aligns with brand goals and audience needs",
      skills: ["Content Planning", "Editorial Strategy", "Blog Writing", "Brand Development"]
    },
    {
      title: "Travel Specialization",
      icon: Target,
      description: "Expert knowledge in travel writing with cultural sensitivity",
      skills: ["Destination Writing", "Cultural Research", "Travel Guides", "Experience Stories"]
    },
    {
      title: "SEO Optimization",
      icon: Search,
      description: "Content optimized for search visibility while maintaining engagement",
      skills: ["Keyword Research", "On-Page SEO", "Meta Optimization", "SEO Writing"]
    },
    {
      title: "Performance Analysis",
      icon: BarChart3,
      description: "Measuring content success and optimizing based on insights",
      skills: ["Analytics Review", "Performance Tracking", "A/B Testing", "ROI Analysis"]
    },
    {
      title: "Research & Innovation",
      icon: Lightbulb,
      description: "Thorough research ensuring accurate, relevant, and trending content",
      skills: ["Market Research", "Trend Analysis", "Fact Verification", "Source Validation"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">
              Skills & Expertise
            </p>
            <h2 className="font-heading font-light text-4xl text-primary leading-tight">
              What I Bring
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
              A comprehensive skill set developed through hands-on experience, continuous learning, 
              and a passion for creating impactful content.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="border border-border rounded p-6 space-y-4 hover:shadow-minimal transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-medium text-primary">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground font-body text-xs">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Competencies */}
          <div className="border border-border rounded p-6 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="font-heading font-medium text-xl text-primary">Core Competencies</h3>
              <p className="text-muted-foreground font-body text-sm">
                Foundation skills that drive every project
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <span className="font-heading font-medium text-lg text-primary">50+</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-medium text-primary text-sm">Travel Blogs</h4>
                  <p className="text-muted-foreground font-body text-xs">Published & optimized</p>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <span className="font-heading font-medium text-sm text-primary">SEO</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-medium text-primary text-sm">Optimization</h4>
                  <p className="text-muted-foreground font-body text-xs">Search engine friendly</p>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <span className="font-heading font-medium text-sm text-primary">24/7</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-medium text-primary text-sm">Availability</h4>
                  <p className="text-muted-foreground font-body text-xs">Dedicated to deadlines</p>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <span className="font-heading font-medium text-sm text-primary">100%</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-medium text-primary text-sm">Quality</h4>
                  <p className="text-muted-foreground font-body text-xs">Commitment to excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;