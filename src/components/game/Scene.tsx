import React from 'react';
import { SectionId } from '../../data/portfolio_data';
import { Hotspot } from './Hotspot';

interface SceneProps {
  onInteract: (section: SectionId) => void;
  labels: {
    projects: string;
    profile: string;
    about: string;
    contact: string;
    infographics: string;
  };
}

export function Scene({ onInteract, labels }: SceneProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#2B2B2B]">
      
      {/* Background Container - The user's image goes here */}
      <div className="relative w-full max-w-5xl aspect-[4/3] bg-black/50 shadow-2xl overflow-hidden rounded-[2rem] border-[16px] border-[#222]">
        
        {/* Placeholder text explaining how to set the image, only visible if the image fails to load or is absent */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-retro-text)] text-opacity-50 p-8 text-center z-0">
          <p className="text-3xl mb-4">Awaiting Signal...</p>
          <p className="text-xl">
            Upload your preferred lab background image as <code className="text-[var(--color-retro-accent)]">public/background.png</code>
          </p>
          <p className="text-xl mt-2">
            (The hotspots below match a typical room layout: desks, screens, and doors)
          </p>
        </div>

        {/* The actual image element */}
        <img 
          src="/background.png" 
          alt="Laboratory Background" 
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Hotspots layer - Absolute positioning based on the user's specific pixel art layout */}
        {/* Left Computer Desk -> Projects */}
        <Hotspot id="projects" x={15} y={40} width={12} height={18} label={labels.projects} icon="💻" onSelect={onInteract} 
          style={{ marginTop: '7px', paddingTop: '-19px', paddingLeft: '0px', paddingRight: '0px', marginLeft: '-12px' }} />
        
        {/* Right Computer Desk -> Profile / Titles */}
        <Hotspot id="profile" x={73} y={40} width={12} height={18} label={labels.profile} icon="📊" onSelect={onInteract} />
        
        {/* Center Back Console -> About Me */}
        <Hotspot id="about" x={48} y={15} width={9} height={20} label={labels.about} icon="🗄️" onSelect={onInteract} 
          style={{ paddingLeft: '0px', paddingRight: '0px', marginLeft: '-21px' }} />
        
        {/* Left Door -> Contact */}
        <Hotspot id="contact" x={18} y={20} width={6} height={22} label={labels.contact} icon="🚪" onSelect={onInteract} 
          style={{ marginLeft: '-15px', marginTop: '-11px' }} />
        
        {/* Far Right Bookshelf -> Infographics */}
        <Hotspot id="infographics" x={86} y={20} width={8} height={25} label={labels.infographics} icon="📚" onSelect={onInteract} 
          style={{ marginRight: '0px', marginBottom: '0px', marginTop: '9px', marginLeft: '31px', paddingBottom: '30px' }} />

      </div>

      {/* CRT screen bezel / vignette effect */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] z-20" />
      
      {/* Decorative scanlines overlay for the whole scene */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-30 mix-blend-overlay" />
    </div>
  );
}
