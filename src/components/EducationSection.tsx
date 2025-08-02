import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">
                      Bachelor of Technology
                    </h3>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    Computer Science & Engineering
                  </h4>
                  <p className="text-lg text-muted-foreground mb-4">
                    RGPV University, Indore
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2019 – 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Indore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="font-semibold text-primary">CGPA: 8.2</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-tech-accent/5 rounded-lg p-6">
                <h5 className="text-lg font-semibold text-foreground mb-3">
                  Academic Excellence
                </h5>
                <p className="text-muted-foreground leading-relaxed">
                  Graduated with a strong academic record, focusing on software development, 
                  algorithms, and system design. Built a solid foundation in computer science 
                  fundamentals that continues to drive my passion for creating innovative 
                  software solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;