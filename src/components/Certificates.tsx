import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Star, Sparkle } from './Doodles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certificates = [
  {
    id: 1,
    title: 'Java Foundations',
    issuer: 'ORACLE',
    date: '2024',
    credential: '/oracle-certificate.pdf',
  },
  {
    id: 2,
    title: 'Advanced Java + Angular + HTML + CSS + JavaScript',
    issuer: 'Udemy',
    date: '2025',
    credential: '',
  },
  {
    id: 3,
    title: 'React + Next.js + Node.js',
    issuer: 'Udemy',
    date: '2025',
    credential: '',
  }
];

export const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certificados" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 halftone-overlay" />

      {/* Decorations */}
      <Star className="absolute top-16 left-12 w-10 h-10 animate-float hidden md:block" />
      <Sparkle className="absolute bottom-20 right-16 w-8 h-8 animate-sparkle" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section title */}
          <div className="text-center mb-12">
            <span className="sticker-badge bg-muted mb-4">
              <Award className="w-4 h-4" />
              Ongoing Professional Development
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Certificates
            </h2>
          </div>

          {/* Certificates grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="sticker-card group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-success/20 rounded-xl border-2 border-foreground flex-shrink-0">
                    <Award className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-base leading-tight line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                  {cert.credential ? (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-display font-semibold text-destructive hover:underline"
                    >
                      Ver credencial
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-body text-muted-foreground italic">
                      In Progress
                    </span>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
