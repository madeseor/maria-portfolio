import { Sparkle, Star } from './Doodles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'JavaScript', level: 90, color: 'bg-destructive' },
  { name: 'CSS', level: 85, color: 'bg-primary' },
  { name: 'HTML', level: 80, color: 'bg-muted' },
  { name: 'Azure DevOps', level: 70, color: 'bg-success' },
  { name: 'Figma', level: 75, color: 'bg-accent' },
  { name: 'Wix', level: 85, color: 'bg-secondary' },
  { name: 'Git & GitHub', level: 75, color: 'bg-primary' },
  { name: 'Java', level: 65, color: 'bg-muted' },
];

const tools = [
  'VS Code + Git', 'Learning: DevTools', 'Vercel', 'Softr', 'Notion', 'Slack'
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 halftone-overlay" />
      
      {/* Decorations */}
      <Star className="absolute top-20 left-10 w-10 h-10 animate-float hidden md:block" />
      <Sparkle className="absolute bottom-32 right-16 w-8 h-8 animate-sparkle" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section title */}
          <div className="text-center mb-12">
            <span className="sticker-badge bg-success text-success-foreground mb-4">
              <Star className="w-4 h-4" />
              Technical Skills
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Skills
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Skills grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="sticker-card !p-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display font-semibold text-lg">{skill.name}</span>
                    <span className="font-body text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full border-2 border-foreground overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools section */}
            <div className="sticker-card bg-accent/50">
              <h3 className="font-display text-xl font-bold mb-4 text-center">
                🛠️ Tools I Use
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="sticker-badge bg-card hover:bg-primary transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
