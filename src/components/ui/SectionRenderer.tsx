import React from 'react';
import { TypewriterText } from './TypewriterText';
import { ProgressBar } from './ProgressBar';
import { ExternalLink, Mail, MessageCircle, Instagram, Github, Linkedin } from 'lucide-react';

interface Props {
  activeSection: string;
  data: any;
}

export const SectionRenderer: React.FC<Props> = ({ activeSection, data }) => {
  switch (activeSection) {
    case 'about':
      return (
        <div className="space-y-6">
          <TypewriterText text={data.about.content} speed={25} />
          <div className="mt-8 grid gap-6">
            {data.about.education.map((edu: any, idx: number) => (
              <div key={idx} className="border-2 border-[var(--color-retro-border)] p-4 bg-[#111]">
                <h4 className="text-xl text-[var(--color-retro-accent)] mb-2">&gt; {edu.institution}</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-lg">
                  {edu.studies.map((study: string, sIdx: number) => (
                    <li key={sIdx}>{study}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    
    case 'projects':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          {data.projects.map((proj: any) => (
            <a href={proj.link} target="_blank" rel="noopener noreferrer" key={proj.id} className="border-4 border-[var(--color-retro-primary)] p-4 bg-black/40 hover:bg-[#111] hover:-translate-y-1 hover:border-[var(--color-retro-accent)] hover:shadow-[0_0_15px_rgba(56,183,100,0.3)] transition-all duration-300 ease-out cursor-pointer group flex flex-col">
              <div className="aspect-video w-full mb-4 border-2 border-[var(--color-retro-border)] overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pixelated" style={{ imageRendering: 'pixelated' }} />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl md:text-3xl text-[var(--color-retro-accent)] group-hover:text-white transition-colors duration-300">[{proj.title}]</h3>
                <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-[var(--color-retro-accent)] transition-colors" />
              </div>
              <p className="text-lg md:text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors duration-300 flex-grow">{proj.description}</p>
              <div className="text-base md:text-xl text-gray-500 group-hover:text-[var(--color-retro-accent)] transition-colors duration-300 border-t-2 border-gray-800 pt-2 flex flex-wrap gap-2 mt-auto">
                {proj.tech.split('|').map((t: string) => (
                  <span key={t} className="bg-gray-800 text-[var(--color-retro-accent)] px-2 py-1 text-sm border border-gray-600">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      );

    case 'profile':
      return (
        <div className="space-y-8">
          <div className="flex items-center gap-6 border-b-4 border-white/20 pb-6">
            <div className="w-20 h-20 bg-[var(--color-retro-primary)] border-4 border-white flex items-center justify-center text-4xl">🤖</div>
            <div>
              <h3 className="text-2xl md:text-4xl text-[var(--color-retro-accent)]">LVL {data.profile.level} DEVELOPER</h3>
              <p className="text-lg md:text-2xl opacity-80">{data.profile.titles.join(' | ')}</p>
            </div>
          </div>
          <div className="space-y-6">
            {data.profile.stats.map((stat: any) => (
              <ProgressBar key={stat.name} label={stat.name} value={stat.value} max={100} />
            ))}
          </div>
        </div>
      );

    case 'contact':
      return (
        <div className="space-y-6 text-center">
          <TypewriterText text={data.contact.content} speed={30} />
          
          <div className="flex flex-col gap-4 mt-8 items-center max-w-md mx-auto">
            <a href={`mailto:${data.contact.email}`} className="pixel-box w-full p-4 hover:border-[var(--color-retro-accent)] hover:text-[var(--color-retro-accent)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-2xl">
              <Mail className="w-8 h-8" /> {data.contact.email}
            </a>
            
            <div className="flex flex-wrap gap-4 md:gap-6 w-full justify-center mt-6 text-white hover:text-white">
              <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="p-4 border-4 border-[var(--color-retro-border)] hover:border-[var(--color-retro-accent)] hover:text-[#25D366] hover:-translate-y-1 transition-all bg-[var(--color-retro-bg)]">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href={data.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-4 border-4 border-[var(--color-retro-border)] hover:border-[var(--color-retro-accent)] hover:text-[#E1306C] hover:-translate-y-1 transition-all bg-[var(--color-retro-bg)]">
                <Instagram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              {data.contact.github && (
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 border-4 border-[var(--color-retro-border)] hover:border-[var(--color-retro-accent)] hover:text-white hover:-translate-y-1 transition-all bg-[var(--color-retro-bg)]">
                  <Github className="w-8 h-8 md:w-10 md:h-10" />
                </a>
              )}
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 border-4 border-[var(--color-retro-border)] hover:border-[var(--color-retro-accent)] hover:text-[#0A66C2] hover:-translate-y-1 transition-all bg-[var(--color-retro-bg)]">
                  <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
                </a>
              )}
            </div>
          </div>
        </div>
      );

    case 'infographics':
      return (
        <div className="space-y-8">
          <div className="animate-pulse text-yellow-500 mb-8 border-b-4 border-yellow-500 pb-4 text-3xl font-bold text-center">
            <TypewriterText text={`/// ${data.ui.labels.infographics.toUpperCase()} ///`} speed={50} />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">{data.infographics.content}</p>

          <div className="grid gap-8">
            {data.infographics.items.map((item: any, i: number) => (
              <div key={i} className="border-4 border-[var(--color-retro-primary)] bg-black/60 p-4">
                <h4 className="text-2xl text-[var(--color-retro-accent)] mb-2">[{item.title}]</h4>
                <p className="text-lg text-gray-400 mb-4">{item.desc}</p>
                <img src={item.image} alt={item.title} className="w-full border-2 border-white/20 hover:border-white/60 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};
