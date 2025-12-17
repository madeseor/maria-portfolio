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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const res = await fetch("https://formspree.io/f/mdkqqegd", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          toast({
            title: "Mensaje enviado! ✅",
            description: "Gracias por escribirme, te responderé pronto.",
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast({
            title: "No se pudo enviar 😢",
            description: "Intenta de nuevo en unos segundos.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error de conexión 😢",
          description: "Revisa tu internet e intenta de nuevo.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    };


    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="sticker-card">
              <h3 className="font-display text-xl font-bold mb-6">
                📬 Send Me a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-display font-semibold text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-foreground bg-background font-body focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-display font-semibold text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-foreground bg-background font-body focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-display font-semibold text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-foreground bg-background font-body resize-none focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all"
                    placeholder="Hi! I’d like to talk with you about…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sticker-btn w-full bg-destructive text-destructive-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
