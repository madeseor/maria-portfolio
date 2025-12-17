import { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Heart, Flower, Smiley } from './Doodles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-accent/30" />
      <div className="absolute inset-0 halftone-overlay" />

      {/* Decorations */}
      <Heart className="absolute top-20 right-10 w-12 h-12 animate-float hidden md:block" />
      <Flower className="absolute bottom-24 left-12 w-10 h-10 animate-float-delayed hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section title */}
          <div className="text-center mb-12">
            <span className="sticker-badge bg-primary mb-4">
              <Mail className="w-4 h-4" />
              Let's talk!
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Contact
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
              Do you have a project in mind or would you like to collaborate? I’d love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center">

            {/* Contact info */}
            <div className="space-y-6">
              <div className="sticker-card">
                <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <Smiley className="w-8 h-8" />
                  Let’s Connect
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:[EMAIL]"
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-primary transition-colors group"
                  >
                    <span className="p-2 bg-destructive/20 rounded-lg border-2 border-foreground">
                      <Mail className="w-5 h-5 text-destructive" />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-sm">Email</p>
                      <p className="font-body text-sm text-muted-foreground">mariaortizseg@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="[LINKEDIN]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-primary transition-colors"
                  >
                    <span className="p-2 bg-success/20 rounded-lg border-2 border-foreground">
                      <Linkedin className="w-5 h-5 text-success" />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-sm">LinkedIn</p>
                      <p className="font-body text-sm text-muted-foreground">/in/[tu-usuario]</p>
                    </div>
                  </a>

                  <a
                    href="[GITHUB]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-primary transition-colors"
                  >
                    <span className="p-2 bg-foreground/10 rounded-lg border-2 border-foreground">
                      <Github className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-sm">GitHub</p>
                      <p className="font-body text-sm text-muted-foreground">@madeseor</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                    <span className="p-2 bg-muted rounded-lg border-2 border-foreground">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-sm">Location</p>
                      <p className="font-body text-sm text-muted-foreground">Medellín, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
