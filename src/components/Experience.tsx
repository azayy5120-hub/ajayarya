import { Briefcase, MapPin, Calendar, CheckCircle, TrendingUp, Award, ArrowRight } from "lucide-react";

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
          <h2 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            My resume demonstrates my commitment to staying up-to-date with the latest design trends and technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Experience Title */}
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h3 className="font-heading font-bold text-3xl text-foreground">Work Experience</h3>
          </div>

          {/* Experience Card */}
          <div className="modern-card group">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-primary" strokeWidth="2"/>
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" className="stroke-primary" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">Behance</h4>
                  <p className="text-primary font-body font-medium">Product Designer</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-muted-foreground">2013 - 2015</p>
                <p className="text-muted-foreground">• Aug 2022 - Current</p>
              </div>
              <ArrowRight className="w-6 h-6 text-border group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </div>
          </div>

          {/* Second Experience */}
          <div className="modern-card group">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" className="stroke-primary" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" className="fill-primary"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">Dribbble</h4>
                  <p className="text-primary font-body font-medium">UI/UX Designer</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-muted-foreground">2016 - 2018</p>
                <p className="text-muted-foreground">• Jan 2020 - Feb 2022</p>
              </div>
              <ArrowRight className="w-6 h-6 text-border group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </div>
          </div>

          {/* Third Experience */}
          <div className="modern-card group">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" className="stroke-primary fill-primary/20" strokeWidth="2"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" className="stroke-primary" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">Twitter</h4>
                  <p className="text-primary font-body font-medium">Graphic Designer</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-muted-foreground">2019 - 2021</p>
                <p className="text-muted-foreground">• Jun 2019 - Dec 2021</p>
              </div>
              <ArrowRight className="w-6 h-6 text-border group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;