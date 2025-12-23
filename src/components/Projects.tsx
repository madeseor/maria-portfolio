import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Cherry, Flower, Sparkle } from './Doodles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['Todos', 'Web App', 'Landing Page', 'Desing'];

const projects = [
  {
    id: 1,
    title: 'Corporate Landing Page Mockups – Figma',
    description: 'Created high-fidelity landing page mockups in Figma with responsive layouts, ilustrations and a consistent visual identity.',
    category: 'Desing',
    tech: ['UI/UX ','Figma', 'Adobe Illustrator'],
    image: null,
    demo: 'https://www.figma.com/proto/yljS1n3H7Qoup2bD2tMsjX/K-B?node-id=26-434&starting-point-node-id=26%3A434&t=ILzJiTsHardYpSva-1',
  },
  {
    id: 2,
    title: 'Landing Page Development – Wix',
    description: 'Designed and developed a responsive landing page in Wix, focused on clear content structure and usability.',
    category: 'Landing Page',
    tech: ['UI/UX ','Figma', 'Wix Classic'],
    image: null,
    demo: 'https://www.kandbworld.com/',
  },
   {
    id: 3,
    title: 'Pet Store - Academic Proyect',
    description: 'Developed UI mockups in Figma as part of an academic SCRUM project, serving as Product Owner and managing tasks through Azure DevOps.',
    category: 'Desing',
    tech: ['UI/UX ','Figma', 'Azure DevOps' ],
    image: null,
    demo: 'https://www.figma.com/proto/vdJbTm3sB8cdNGB6iFZBak/PetStore-EP15-P5F5?node-id=102-622&starting-point-node-id=102%3A622&t=7tiIMF0oJ2SofrMs-1',
  },
  {
    id: 4,
    title: 'Corporate Website Pages–Softr',
    description: 'Designed and built responsive web pages for a corporate website using Softr, following brand guidelines.',
    category: 'Web App',
    tech: ['Softr', 'Airtable', 'Bettermode'],
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/20" />
      <div className="absolute inset-0 halftone-overlay" />
      
      {/* Decorations */}
      <Cherry className="absolute top-24 right-12 w-14 h-14 animate-float hidden md:block" />
      <Flower className="absolute bottom-24 left-8 w-12 h-12 animate-float-delayed hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section title */}
          <div className="text-center mb-8">
            <span className="sticker-badge bg-destructive text-destructive-foreground mb-4">
              <Folder className="w-4 h-4" />
              My Work
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Projects
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`sticker-btn !text-base !px-5 !py-2 ${
                  activeCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-card'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="sticker-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image placeholder */}
                <div className="h-40 bg-secondary rounded-xl border-2 border-foreground mb-4 flex items-center justify-center overflow-hidden relative">
                  <Sparkle className="w-8 h-8 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:animate-sparkle transition-opacity" />
                  <span className="absolute bottom-2 right-2 sticker-badge !text-xs bg-primary">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-display bg-muted rounded-full border border-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {index !== filteredProjects.length - 1 && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticker-btn !px-4 !py-2 !text-sm bg-success text-success-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
