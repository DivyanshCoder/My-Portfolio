import { Mail, Linkedin, Phone, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Divyansh Patni</h3>
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Software Developer specializing in automation and backend systems. 
            Always ready to take on new challenges and create impactful solutions.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:divyanshpatni@gmail.com"
              className="text-background/80 hover:text-background transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+919993400744"
              className="text-background/80 hover:text-background transition-colors duration-200"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/Divyansh_Patni"
              target="_blank" 
              className="text-background/80 hover:text-background transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/divyanshpatni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/DivyanshCoder"
              target="_blank" 
              className="text-background/80 hover:text-background transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm">
              © 2025 Divyansh Patni. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;