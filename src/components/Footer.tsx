import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Sparkle, Cherry } from './Doodles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 halftone-overlay opacity-5" />
      
      {/* Decorations */}
      <Sparkle className="absolute top-4 right-10 w-6 h-6 opacity-30 animate-sparkle" />
      <Cherry className="absolute bottom-4 left-10 w-8 h-8 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p className="font-script text-2xl mb-2">Portfolio</p>
            <p className="font-body text-sm opacity-70">
              Front-End Developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/madeseor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 border-2 border-background/30 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-segura-ortiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 border-2 border-background/30 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            
            <p className="font-body text-xs opacity-50 mt-1">
              Maria Ortiz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
