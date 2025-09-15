import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "TCS",
      period: "Dec 2023 – Present",
      location: "Pune",
      achievements: [
        "Implemented automation with Python, SQL, PowerShell (reduced manual efforts by 55%)",
        "Developed Django-based web application with chatbot for Tata Motors, streamlining operations",
        "Automated ServiceNow ticket handling with REST API integration (reduced response time by 45%)",
        "Worked closely with teams across functions and presented impactful demos to clients, ensuring alignment with their needs"
      ],
      skills: ["Python", "SQL", "PowerShell", "Pandas", "Numpy", "Django", "REST APIs", "HTML", "CSS", "Agile",  "Process Automation", "NLP", "Client Communication", "Cross-functional Collaboration"]
    },
    {
      title: "Software Developer Intern",
      company: "Gigatorb Software",
      period: "Sep 2023 – Nov 2023",
      location: "Indore",
      achievements: [
        "Developed backend services using Java, Spring Boot, and REST APIs, ensuring scalable and maintainable solutions",
        "Implemented CRUD functionality and integrated with MySQL for efficient data management",
        "Used Git and Postman, collaborated with team, and delivered client demos"
      ],
      skills: ["Java", "Spring Boot", "SQL", "REST APIs", "HTML", "CSS", "Git", "Postman", "React", "Communication"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building className="h-5 w-5" />
                      <span className="text-xl font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;