import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Linkedin, Send, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  {/*const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",      // from EmailJS dashboard
        "YOUR_TEMPLATE_ID",     // from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"       // from EmailJS dashboard
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };*/}

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "divyanshpatni@gmail.com",
      href: "mailto:divyanshpatni@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91-9993400744",
      href: "tel:+919993400744"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: "Twitter",
      value: "https://x.com/Divyansh_Patni",
      href: "https://x.com/Divyansh_Patni"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/divyanshpatni",
      href: "https://linkedin.com/in/divyanshpatni"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "Github",
      value: "https://github.com/DivyanshCoder",
      href: "https://github.com/DivyanshCoder"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-8"></div>
            {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate or have a project in mind? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p> */}    
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I’m currently exploring opportunities in Backend, Full Stack, and AI/ML development. I’m always open to new challenges and collaborations—feel free to reach out to me.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 hover:text-primary transition-colors duration-200"
                    >
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        <div className="lg:flex lg:items-center lg:justify-center">
          <div className="relative animate-fade-in">
            <img
              src="lovable-uploads/AI-Image.jpg" // Replace with your image path
              alt="Contact illustration"
              className="w-[100%] h-[300px] w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;