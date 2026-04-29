import React, { useState, useEffect } from 'react';
import { Scene } from './components/game/Scene';
import { RetroDialog } from './components/ui/RetroDialog';
import { data, SectionId, Language } from './data/portfolio_data';
import { Globe, Monitor, TerminalSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { defaultCursor, activeCursor } from './utils/cursors';
import { BootSequence } from './components/ui/BootSequence';
import { SectionRenderer } from './components/ui/SectionRenderer';
import { ModernPortfolio } from './components/modern/ModernPortfolio';

type Mode = 'retro' | 'modern' | null;

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(null);
  const [lang, setLang] = useState<Language>('es');
  const [bootCompleted, setBootCompleted] = useState(false);
  const [interfaceMode, setInterfaceMode] = useState<Mode>(null);
  
  const t = data[lang];

  useEffect(() => {
    // Only apply retro cursors when in retro mode or during boot
    if (interfaceMode === 'modern') {
      document.body.classList.remove('overflow-hidden');
      document.getElementById('root')?.classList.remove('h-screen');
      document.body.style.cursor = '';
      const s = document.getElementById('wow-cursors');
      if (s) s.remove();
      return;
    } else {
      document.body.classList.add('overflow-hidden');
      document.getElementById('root')?.classList.add('h-screen');
    }

    document.body.style.cursor = `url('${defaultCursor}') 6 6, default`;
    const style = document.createElement('style');
    style.id = 'wow-cursors';
    style.innerHTML = `
      a, button, .cursor-pointer, .hotspot, [role="button"] {
        cursor: url('${activeCursor}') 6 6, pointer !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      const s = document.getElementById('wow-cursors');
      if (s) s.remove();
      document.body.style.cursor = '';
    };
  }, [interfaceMode]);

  const getTitle = () => {
    if (!activeSection) return '';
    return t.ui.labels[activeSection] || activeSection.toUpperCase();
  };

  if (interfaceMode === 'modern') {
    return (
      <div className="relative">
        <ModernPortfolio lang={lang} />
        {/* Modern Language Toggle */}
        <div className="fixed bottom-6 right-6 z-[60] flex gap-2">
           <button
             onClick={() => setInterfaceMode('retro')}
             className="bg-black text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center opacity-70 hover:opacity-100"
             title="Switch to Retro"
           >
             <TerminalSquare className="w-5 h-5" />
           </button>
           <button
             onClick={() => setLang(prev => prev === 'en' ? 'es' : 'en')}
             className="bg-white border text-black border-gray-200 p-3 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center font-bold text-xs w-11 h-11 pointer-events-auto"
           >
             {lang === 'es' ? 'EN' : 'ES'}
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black text-white overflow-hidden relative selection:bg-[var(--color-retro-accent)] font-vt323" style={{ imageRendering: 'pixelated' }}>
      <AnimatePresence>
        {!bootCompleted && (
           <BootSequence lang={lang} onComplete={() => setBootCompleted(true)} />
        )}
        
        {bootCompleted && interfaceMode === null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm" 
          >
             <div className="z-20 text-center flex flex-col items-center px-4 max-w-4xl w-full">
               <h1 className="text-2xl sm:text-4xl md:text-5xl text-white tracking-widest uppercase mb-16 text-center text-shadow-sm font-vt323 border-b-2 border-white/20 pb-4 inline-block">
                 SELECT INTERFACE MODE
               </h1>
               <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                  <button onClick={() => setInterfaceMode('retro')} className="pixel-box group p-8 bg-black hover:bg-[#111] hover:border-[var(--color-retro-accent)] transition-colors flex flex-col items-center gap-6 md:w-80 border-4 border-gray-600 relative overflow-hidden">
                     <TerminalSquare className="w-16 h-16 text-green-500 group-hover:scale-110 transition-transform" />
                     <div>
                       <h3 className="text-2xl font-bold text-green-400 mb-2 tracking-widest font-vt323">RETRO TERMINAL</h3>
                       <p className="text-gray-400 text-base font-vt323">Interactive game environment with system simulation.</p>
                     </div>
                  </button>
                  <button onClick={() => setInterfaceMode('modern')} className="pixel-box group p-8 bg-[#f9f9f9] text-black hover:bg-white border-blue-500 transition-colors flex flex-col items-center gap-6 md:w-80 border-4 relative overflow-hidden">
                     <Monitor className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" />
                     <div className="font-jakarta">
                       <h3 className="text-xl font-extrabold text-blue-600 mb-2 tracking-tight">MODERN WEB</h3>
                       <p className="text-gray-600 text-sm font-medium">Clean, professional portfolio with smooth animations.</p>
                     </div>
                  </button>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Scene */}
      <div className={`transition-all duration-1000 w-full h-full ${bootCompleted && interfaceMode === 'retro' ? 'opacity-100 scale-100 blur-none' : 'opacity-50 scale-105 blur-sm'}`}>
        <Scene onInteract={setActiveSection} labels={t.ui.labels} />
      </div>
      
      {/* Overlay UI when activeSection is set */}
      <RetroDialog 
        id={activeSection} 
        title={getTitle()} 
        onClose={() => setActiveSection(null)}
      >
        <SectionRenderer activeSection={activeSection || ''} data={t} />
      </RetroDialog>

      {/* Global CSS Scanlines for complete retro affect */}
      <div className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-20 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.5))] bg-[length:100%_4px]" />
      
      {/* HUD Info */}
      <div className={`fixed top-4 left-4 z-40 bg-[var(--color-retro-bg)] p-2 md:p-3 text-xs md:text-sm border-2 border-[var(--color-retro-border)] shadow-lg flex flex-col gap-1 max-w-[50%] md:max-w-xs pixel-borders transition-all duration-1000 ${bootCompleted && interfaceMode === 'retro' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
         <div className="text-[var(--color-retro-accent)] animate-pulse flex items-center gap-2">
            <span>●</span> {t.ui.sysReq}
         </div>
         <div className="text-gray-400 text-[10px] md:text-xs mt-1 hidden sm:block">STATUS: ONLINE</div>
      </div>

      {/* Language Toggle & Switch Mode */}
      <div className="fixed top-4 right-4 z-[70] flex gap-2">
        {interfaceMode === 'retro' && (
          <button
            onClick={() => setInterfaceMode('modern')}
            className="pixel-box flex items-center gap-2 p-2 bg-[var(--color-retro-bg)] hover:bg-[#111] border-[var(--color-retro-border)] hover:border-[var(--color-retro-accent)] hover:text-[var(--color-retro-accent)] transition-colors shadow-lg active:translate-y-1 relative group"
            title="Switch to Modern"
          >
            <Monitor className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[var(--color-retro-accent)]" />
          </button>
        )}
        <button
          onClick={() => setLang(prev => prev === 'en' ? 'es' : 'en')}
          className="pixel-box flex items-center gap-2 p-2 bg-[var(--color-retro-bg)] hover:bg-[#111] border-[var(--color-retro-border)] hover:border-[var(--color-retro-accent)] hover:text-[var(--color-retro-accent)] transition-colors shadow-lg active:translate-y-1 relative"
        >
          <Globe className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs md:text-base uppercase font-bold">{lang === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>
    </div>
  );
}
