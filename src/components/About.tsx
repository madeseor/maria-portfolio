import { MapPin, GraduationCap, Heart } from 'lucide-react';
import { Cherry, Flower, Smiley } from './Doodles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="sobre-mi" className="py-20 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-secondary/50" />
    <div className="absolute inset-0 halftone-overlay" />

    {/* Decorations */}
    <Flower className="absolute top-20 right-10 w-12 h-12 animate-float-delayed hidden md:block" />
    <Cherry className="absolute bottom-20 left-10 w-14 h-14 animate-float hidden md:block" />

    <div className="container mx-auto px-4 relative z-10">
      <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="sticker-badge bg-accent mb-4">
            <Smiley className="w-4 h-4" />
            Get to Know Me
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            About me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Image placeholder */}
          <div className="flex justify-center">
            <div className="sticker-card !p-4 bg-primary inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-muted flex items-center justify-center border-2 border-foreground overflow-hidden">
                <span className="font-display text-muted-foreground text-center p-4">
                  <img
                    src="/foto.jpeg"
                    alt="Foto de Maria Ortiz"
                    className="w-full h-full object-cover rounded-2xl"
                  />

                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="sticker-card bg-card">
              <p className="font-body text-lg leading-relaxed text-foreground mb-6">
                Hi! I’m a <span className="font-semibold text-destructive">Systems Engineering student</span> currently
                in my fifth semester,with a strong passion for web development and interface design. I enjoy transforming ideas into
                digital experiences that are both <span className="font-semibold text-success">functional</span> and{' '}
                <span className="font-semibold">visually appealing.</span>.
              </p>
              <p>I hold both Colombian and Spanish nationality, which allows me to work in different parts of the world. I stay up to date with new technologies and continuously learn to build modern, user-centered web applications.</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="sticker-badge bg-primary !py-1.5"><MapPin className="w-4 h-4" />
                    Medellín, Colombia
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="sticker-badge bg-muted !py-1.5"><GraduationCap className="w-4 h-4" />
                    University of Antioquia
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="sticker-badge bg-accent !py-1.5"><Heart className="w-4 h-4" />
                    JavaScript & React
                  </span>
                </div>
              </div>
            </div>

            {/* Fun facts */}
            <div className="grid grid-cols-3 gap-3">
              {[{
                emoji: '🐈‍⬛​',
                label: 'Cats Lover'
              }, {
                emoji: '🎮',
                label: 'Gamer'
              }, {
                emoji: '🎵',
                label: 'Music enthusiast'
              }].map(item => <div key={item.label} className="sticker-card !p-3 text-center hover:animate-wiggle">
                <span className="text-2xl mb-1 block">{item.emoji}</span>
                <span className="font-display text-xs font-medium">{item.label}</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};