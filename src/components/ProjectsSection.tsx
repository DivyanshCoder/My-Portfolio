import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "News Media Application",
      description: "Dynamic news application showing live news under 60 words. Integrated external APIs with ORM support, featuring user engagement through likes/comments and category-based exploration including Cricket, Politics, and Technology.",
      technologies: ["Python", "Django", "MySQL", "REST APIs", "HTML", "CSS"],
      features: [
        "Live news integration with external APIs",
        "User engagement system (likes/comments)",
        "Category-based news exploration",
        "Responsive design",
        "ORM integration"
      ]
    },
    {
      title: "Portfolio Builder Web App",
      description: "No-code platform helping users create professional portfolio websites. Features template selection, custom profiles, and authentication system. Successfully reduced manual effort in portfolio creation by 70%.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Template-based portfolio creation",
        "Custom user profiles",
        "Authentication system",
        "Drag-and-drop interface",
        "70% reduction in manual effort"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills in full-stack development and automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;