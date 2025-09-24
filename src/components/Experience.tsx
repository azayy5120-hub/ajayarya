import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Specialized in travel blog writing for diverse international audiences",
    "Conducted extensive research on travel destinations & emerging trends",
    "Produced 50+ SEO-friendly travel blogs optimized for search visibility",
    "Collaborated effectively with editorial team for consistent quality",
    "Consistently met tight deadlines while maintaining engaging output"
  ];

  return (
    <section id="experience" className="py-16 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">
              Experience
            </p>
            <h2 className="font-heading font-light text-4xl text-primary leading-tight">
              Professional Journey
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
              Every project has been a stepping stone in my journey to becoming a versatile content creator.
            </p>
          </div>

          {/* Experience Card */}
          <div className="border border-border rounded p-6 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              {/* Company Info */}
              <div className="flex-1">
                <h3 className="font-heading font-medium text-xl text-primary">Content Writing Intern</h3>
                <p className="text-primary font-body font-medium">WabbitHire</p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-col sm:flex-row gap-4 text-xs text-muted-foreground font-body">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>3 Months</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-muted-foreground font-body leading-relaxed">
                Specialized in creating compelling travel content that informed readers and inspired exploration. 
                This experience taught me the importance of research, audience understanding, and SEO optimization.
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="font-heading font-medium text-primary">Key Achievements</h4>
                <div className="grid gap-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-body text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="font-heading font-medium text-primary">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Travel Writing",
                    "SEO Optimization", 
                    "Content Research",
                    "Editorial Collaboration",
                    "Deadline Management"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-muted text-muted-foreground font-body text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="text-center bg-muted/30 rounded p-6">
            <h3 className="font-heading font-medium text-xl text-primary mb-2">Looking Forward</h3>
            <p className="text-muted-foreground font-body leading-relaxed max-w-xl mx-auto">
              This internship was just the beginning. I'm eager to take on new challenges and continue growing 
              as a content creator who bridges information and inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;