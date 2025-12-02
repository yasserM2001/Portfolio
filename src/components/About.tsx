import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/Card";
import { GraduationCap, Calendar, Briefcase, MapPin } from "lucide-react";
import SectionWrapper from "./layout/SectionWrapper";
import { EDUCATION, KNOWLEDGE_AREAS, EXPERIENCES } from "../constants/data";

const About = () => {

  return (
    <SectionWrapper
      id="about"
      title="About"
    >
      {/* Side-by-side layout on large screens, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Education Column */}
        <div>
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>

          <Card>
            <CardHeader>
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    {EDUCATION.title}
                  </CardTitle>
                  <CardDescription className="text-sm mb-4 text-primary">
                    {EDUCATION.institution}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{EDUCATION.period}</span>
                    <span className="mx-2">•</span>
                    <span className="font-semibold text-foreground">GPA: {EDUCATION.gpa}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="border-t pt-6">
                <h5 className="font-semibold mb-4 text-base">
                  Key Knowledge Areas
                </h5>
                <div className="space-y-4">
                  {KNOWLEDGE_AREAS.map((area, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                    >
                      <div className="shrink-0">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <area.icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-1 text-sm">
                          {area.title}
                        </h6>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {area.skills}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Column */}
        <div>
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Experience
          </h3>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-6">
                    <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;