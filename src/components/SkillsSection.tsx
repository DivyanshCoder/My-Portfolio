import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Settings, Users, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "SQL"],
      color: "primary"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      color: "tech-accent"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6" />,
      skills: ["Pandas", "NumPy", "Django", "NLP", "JSON", "BeautifulSoup", "Spring Boot", "Regex", "GenAI"],
      color: "primary"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="h-6 w-6" />,
      skills: ["MySQL", , "PowerShell", "Git", "Postman", "ServiceNow", "RESTful APIs", "Docker"],
      color: "tech-accent"
    },
    {
      title: "Methodologies",
      icon: <Users className="h-6 w-6" />,
      skills: ["Agile", "Process Automation", "Cross-functional Collaboration"],
      color: "primary"
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: ["Problem-solving", "Communication", "Collaboration", "Presentation Skills"],
      color: "tech-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`${category.color === 'primary' ? 'text-primary' : 'text-tech-accent'}`}>
                    {category.icon}
                  </div>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className={`
                        ${category.color === 'primary' 
                          ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                          : 'bg-tech-accent/10 text-tech-accent hover:bg-tech-accent/20'
                        } 
                        transition-colors duration-200
                      `}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Summary */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-tech-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Key Achievements
              </h3> 
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Data Structures & Algorithms Problems Solved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-tech-accent mb-2">55%</div>
                  <div className="text-muted-foreground">Reduction in Manual Tasks through Automation of Multiple Use Cases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1<sup>st</sup> Prize</div>
                  <div className="text-muted-foreground">CodingGo Competition (College Level)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;