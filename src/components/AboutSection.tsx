import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Automation Expert",
      description: "Specialized in creating efficient automation solutions that reduce manual work by up to 55%"
    },
    {
      icon: <Server className="h-8 w-8 text-tech-accent" />,
      title: "Backend Development",
      description: "Proficient in building robust backend systems with Python, Django, and REST APIs"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Process Optimization",
      description: "Focus on streamlining operations and delivering impactful software solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I’m a passionate Software Developer with 2+ years of experience in creating innovative solutions that make a real difference. My journey in tech has been driven by a love for automation and backend development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Over the past two years, I’ve worked on numerous impactful use cases that helped streamline operations and improve efficiency. I’ve also built several projects using technologies like Python, SQL and Django, which strengthened my problem-solving abilities and creativity. Along the way, I’ve developed strong communication and collaboration skills, enabling me to work effectively with teams and deliver results that align with business needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently based in Pune, I’m excited to take on new challenges while expanding my expertise in AI and Machine Learning. My focus is on growing into this field and applying intelligent solutions to solve real-world problems.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;