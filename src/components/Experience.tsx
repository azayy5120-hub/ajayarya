import { Briefcase, MapPin, Calendar, CheckCircle, TrendingUp } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Specialized in travel blog writing for diverse international audiences",
    "Conducted extensive research on travel destinations & emerging trends",
    "Produced 50+ SEO-friendly travel blogs optimized for search visibility",
    "Collaborated effectively with editorial team for consistent quality",
    "Consistently met tight deadlines while maintaining engaging output"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-blue font-body font-medium tracking-wide uppercase text-sm mb-4">
            Professional Journey
          </p>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary leading-tight mb-6">
            My <span className="text-accent-blue">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Every project has been a stepping stone in my journey to becoming a versatile content creator. 
            Here's where I've honed my skills and made meaningful contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
              {/* Company Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-accent-blue-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-primary">Content Writing Intern</h3>
                  <p className="text-accent-blue font-body font-semibold text-lg">WabbitHire</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground font-body">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>3 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Travel Content Specialist</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-foreground font-body leading-relaxed">
                During my internship at WabbitHire, I specialized in creating compelling travel content that not only 
                informed readers but also inspired them to explore new destinations. This experience taught me the 
                importance of research, audience understanding, and SEO optimization in content creation.
              </p>

              {/* Key Achievements */}
              <div>
                <h4 className="font-heading font-semibold text-lg text-primary mb-4">Key Achievements & Responsibilities</h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground font-body">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Developed */}
              <div className="bg-accent-gray/30 rounded-lg p-6">
                <h4 className="font-heading font-semibold text-lg text-primary mb-4">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Travel Writing",
                    "SEO Optimization",
                    "Content Research",
                    "Editorial Collaboration",
                    "Deadline Management",
                    "Audience Analysis"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-accent-blue-soft text-accent-blue font-body text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12 text-center bg-section-gradient rounded-xl p-8">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">Looking Forward</h3>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              This internship was just the beginning. I'm eager to take on new challenges, work with diverse clients, 
              and continue growing as a content creator who bridges the gap between information and inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;