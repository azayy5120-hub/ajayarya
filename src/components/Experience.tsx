import { Briefcase, MapPin, Calendar, CheckCircle, TrendingUp, Award } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue-soft border border-accent-blue/20 rounded-full mb-6">
            <Award className="w-4 h-4 text-accent-blue" />
            <span className="font-body font-medium text-accent-blue text-sm tracking-wide uppercase">
              Professional Journey
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Every project has been a stepping stone in my journey to becoming a versatile content creator. 
            Here's where I've honed my skills and made meaningful contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="dashboard-card">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
              {/* Company Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">Content Writing Intern</h3>
                  <p className="text-primary font-body font-semibold text-lg">WabbitHire</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="dashboard-metric text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1 text-primary" />
                  <span className="text-muted-foreground font-body">Remote</span>
                </div>
                <div className="dashboard-metric text-center">
                  <Calendar className="w-4 h-4 mx-auto mb-1 text-primary" />
                  <span className="text-muted-foreground font-body">3 Months</span>
                </div>
                <div className="dashboard-metric text-center">
                  <TrendingUp className="w-4 h-4 mx-auto mb-1 text-primary" />
                  <span className="text-muted-foreground font-body text-xs">Travel Specialist</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div className="bg-accent-blue-soft p-6 rounded-lg border border-accent-blue/20">
                <p className="text-lg text-foreground font-body leading-relaxed">
                  During my internship at WabbitHire, I specialized in creating compelling travel content that not only 
                  informed readers but also inspired them to explore new destinations. This experience taught me the 
                  importance of research, audience understanding, and SEO optimization in content creation.
                </p>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-4">Key Achievements & Responsibilities</h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-accent-gray/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-body">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Developed */}
              <div className="chart-container">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-4">Skills Developed</h4>
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
                      className="px-4 py-2 bg-primary/20 text-primary font-body text-sm font-medium rounded-full border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12 dashboard-card text-center">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Looking Forward</h3>
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