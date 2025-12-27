import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-powered Resume Analyzer",
      description: "🤖A resume analyzer that assesses how closely your resume aligns with a job description, verifies ATS compatibility, and pinpoints missing keywords or skills. It provides actionable tips to refine formatting, enhance readability, and increase your chances of getting shortlisted.",
      technologies: ["Python", "Django", "NLP", "Generative AI Integration", "SQLite", "PyPDF2", "Bootstrap", "Regex", "Supabase"],
      features: [
        "Aligns resumes with job descriptions for smart matching.",
        "Identifies and categorizes key skills automatically",
        "Downloadable insights and skill reports for offline use",
        "Supports PDF/DOCX with automatic resume extraction",
        "Bulk analysis and quick candidate evaluation"
      ]
    },
    {
      title: "WeatherApp",
      description: "🌤️Responsive Django web app that shows real-time weather for any city, with dynamic city-themed backgrounds, smart caching, and Bootstrap UI.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "OpenWeatherMap API", "Bootstrap", "Caching"],
      features: [
        "Real-time weather data for any city worldwide",
        "Dynamic city backgrounds that change based on search",
        "Instant search with loading indicators",
        "Glassmorphism UI with smooth animations",
        "Responsive design using Bootstrap and modern CSS"
      ]
    },
    {
      title: "NewsMedia App",
      description: "📰Dynamic news application showing live news under 60 words. Integrated external APIs with ORM support, featuring user engagement through likes/comments and category-based exploration including Cricket, Politics, and Technology.",
      technologies: ["Python", "Django", "ORM", "MySQL", "REST APIs", "HTML", "CSS", "JavaScript"],
      features: [
        "Live news integration with external APIs",
        "User engagement system (likes/comments)",
        "Category-based news exploration",
        "Responsive design",
        "ORM integration"
      ]
    },
    {
      title: "Spotify Music Discovery Backend",
      description: "🎸Spotify Music Discovery Backend is a scalable, production-ready REST API service that delivers personalized music recommendations to users. Built with modern backend technologies, this project demonstrates enterprise-level architecture with asynchronous task processing, intelligent caching, user authentication, and comprehensive analytics.",
      technologies: ["Python", "Django", "PostgreSQL", "Celery", "djangorestframework-simplejwt", "Docker", "Spotify Web API", "Redis"],
      features: [
        "Fetch personalized recommendations using Spotify Web API",
        "Redis-powered caching for optimized performance",
        "Rate Limiting protecting endpoints with configurable throttling",
        "Identify trending genres and artists across users",
        "Periodic recommendation updates every 6 hours"
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
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
                  <a href="https://github.com/DivyanshCoder" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4"/>
                    View Code
                  </Button>
                  </a>
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