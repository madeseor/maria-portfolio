import { Github, Download, ArrowDown } from 'lucide-react';
import { Cherry, Sparkle, Flower, Smiley, Star } from './Doodles';
export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background decorations */}
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />
      
      {/* Floating doodles */}
      <Cherry className="absolute top-32 left-8 w-16 h-16 animate-float opacity-80 hidden md:block" />
      <Sparkle className="absolute top-40 right-12 w-10 h-10 animate-sparkle" />
      <Flower className="absolute bottom-32 left-16 w-14 h-14 animate-float-delayed hidden md:block" />
      <Smiley className="absolute top-1/3 right-8 w-12 h-12 animate-float hidden lg:block" />
      <Star className="absolute bottom-40 right-20 w-10 h-10 animate-float-delayed" />
      <Sparkle className="absolute bottom-20 left-1/4 w-8 h-8 animate-sparkle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting badge */}
          <div className="inline-block mb-6">
            <span className="sticker-badge bg-primary">
              <Sparkle className="w-4 h-4" />
              ¡Hello, welcome!
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            I'm{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-destructive">MARIA ORTIZ</span>
              <span className="absolute -bottom-2 left-0 right-0 h-4 bg-primary -rotate-1 -z-10" />
            </span>
          </h1>

          {/* Script subtitle */}
          <p className="font-script text-2xl md:text-4xl text-success mb-6">
            Front-End Developer
          </p>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Systems Engineering student with a strong passion for interface design 
            <span className="text-destructive font-medium"> beautiful</span>,{' '}
            <span className="text-success font-medium">accessible</span> and{' '}
            <span className="text-foreground font-medium">functional</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={scrollToProjects} className="sticker-btn bg-destructive text-destructive-foreground">
              <ArrowDown className="w-5 h-5" />
              Proyects
            </button>
            
            <a href="https://github.com/madeseor" target="_blank" rel="noopener noreferrer" className="sticker-btn bg-foreground text-background">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            
           
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button onClick={() => document.querySelector('#sobre-mi')?.scrollIntoView({
            behavior: 'smooth'
          })} className="animate-bounce p-2 rounded-full bg-primary border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] transition-all" aria-label="Desplazar hacia abajo">
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};