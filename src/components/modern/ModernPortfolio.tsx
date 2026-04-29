import React, { useState, useEffect } from 'react';
import { data, Language } from '../../data/portfolio_data';
import { ArrowRight, Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const presets = {
  minimal: { name: 'Minimal', primary: '#000000', accent: '#2563eb', bg: '#ffffff', surface: '#f9f9f9', text: '#111111', border: 'rgba(0,0,0,0.12)' },
  oled: { name: 'OLED', primary: '#ffffff', accent: '#3b82f6', bg: '#000000', surface: '#0a0a0a', text: '#ffffff', border: 'rgba(255,255,255,0.12)' },
  tokyo: { name: 'Tokyo', primary: '#bb9af7', accent: '#7dcfff', bg: '#1a1b26', surface: '#24283b', text: '#cfc9c2', border: 'rgba(255,255,255,0.1)' },
  emerald: { name: 'Esmeralda', primary: '#064e3b', accent: '#10b981', bg: '#f0fdf4', surface: '#dcfce7', text: '#064e3b', border: 'rgba(6, 78, 59, 0.12)' },
  nord: { name: 'Nordic', primary: '#2e3440', accent: '#88c0d0', bg: '#eceff4', surface: '#e5e9f0', text: '#2e3440', border: 'rgba(46, 52, 64, 0.12)' },
  rose: { name: 'Rose', primary: '#e11d48', accent: '#fb7185', bg: '#fff1f2', surface: '#ffe4e6', text: '#9f1239', border: 'rgba(159, 18, 57, 0.12)' }
};

export const ModernPortfolio: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = data[lang];
  const [themeKey, setThemeKey] = useState<keyof typeof presets>('minimal');
  const [themePanelOpen, setThemePanelOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'home' | 'proyectos' | 'analisis' | 'educacion'>('home');
  const theme = presets[themeKey];

  useEffect(() => {
    const savedTheme = localStorage.getItem('user-selected-theme') as keyof typeof presets;
    if (savedTheme && presets[savedTheme]) {
      setThemeKey(savedTheme);
    }
  }, []);

  const handleThemeChange = (key: keyof typeof presets) => {
    setThemeKey(key);
    localStorage.setItem('user-selected-theme', key);
    if (window.innerWidth < 640) setThemePanelOpen(false);
  };

  const customStyle = {
    '--primary': theme.primary,
    '--accent': theme.accent,
    '--bg': theme.bg,
    '--surface': theme.surface,
    '--text': theme.text,
    '--border': theme.border,
  } as React.CSSProperties;
  
  return (
    <div style={customStyle} className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-jakarta font-light selection:bg-[var(--accent)] selection:text-[var(--bg)] overflow-x-hidden transition-colors duration-500 relative">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] rounded-[28px] z-50 px-6 py-4 shadow-sm flex justify-between items-center transition-all">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveMenu('home')}>
          <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }}></div>
          <span className="font-extrabold text-sm tracking-tight">Nicolás Bautista Pardo</span>
        </div>
        
        <div className="hidden md:flex gap-8">
           <button onClick={() => setActiveMenu('home')} className="text-sm font-semibold transition-colors" style={{ color: 'var(--text)', opacity: activeMenu === 'home' ? 1 : 0.6 }}>Inicio</button>
           <button onClick={() => setActiveMenu('proyectos')} className="text-sm font-semibold transition-colors" style={{ color: 'var(--text)', opacity: activeMenu === 'proyectos' ? 1 : 0.6 }}>Proyectos</button>
           <button onClick={() => setActiveMenu('analisis')} className="text-sm font-semibold transition-colors" style={{ color: 'var(--text)', opacity: activeMenu === 'analisis' ? 1 : 0.6 }}>Arquitectura</button>
           <button onClick={() => setActiveMenu('educacion')} className="text-sm font-semibold transition-colors" style={{ color: 'var(--text)', opacity: activeMenu === 'educacion' ? 1 : 0.6 }}>Formación</button>
        </div>
        
        <div className="flex gap-4 relative">
           <button 
             onClick={() => setThemePanelOpen(!themePanelOpen)}
             className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors border shadow-sm"
             style={{ backgroundColor: 'var(--surface)', color: 'var(--text)', borderColor: 'var(--border)' }}
           >
              <div className="w-3 h-3 rounded-sm transition-transform" style={{ backgroundColor: 'var(--accent)' }}></div>
              Diseño
           </button>

           {/* Theme Panel */}
           {themePanelOpen && (
             <div className="absolute top-[calc(100%+15px)] right-0 w-[280px] rounded-2xl p-5 shadow-2xl z-[100] transition-all" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', borderWidth: '1px' }}>
                <div className="flex justify-between items-center mb-4 opacity-50">
                  <span className="text-xs font-extrabold uppercase tracking-widest">Estilos de Interfaz</span>
                  <button onClick={() => setThemePanelOpen(false)}><X className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                   {Object.entries(presets).map(([k, t_preset]) => (
                     <button
                       key={k}
                       onClick={() => handleThemeChange(k as keyof typeof presets)}
                       className="flex flex-col items-center gap-2 p-3 rounded-xl border transition-all hover:scale-105"
                       style={{ backgroundColor: 'var(--surface)', borderColor: themeKey === k ? 'var(--accent)' : 'var(--border)' }}
                     >
                        <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: t_preset.accent, borderColor: t_preset.bg }}></div>
                        <span className="text-xs font-bold" style={{ color: t_preset.text }}>{t_preset.name}</span>
                     </button>
                   ))}
                </div>
             </div>
           )}

           <a href={t.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-colors shadow-lg shadow-black/10 hover:opacity-90" style={{ backgroundColor: 'var(--primary)', color: 'var(--bg)' }}>
              Contacto <ArrowRight className="w-4 h-4" />
           </a>
        </div>
      </nav>

      <main className="pt-32 min-h-screen">
        <AnimatePresence mode="wait">
          {activeMenu === 'home' && (
      <motion.header 
        key="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center pb-20 px-6 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-5 py-1.5 border rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}>Web & Arquitectura</span>
            <span className="px-5 py-1.5 border rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}>Java</span>
            <span className="px-5 py-1.5 border rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}>IA</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-balance">
            Ingeniería Front-End & <span style={{ color: 'var(--accent)' }}>Soluciones de Negocio</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-16 text-balance font-medium opacity-80">
            {t.about.content.split('\n\n')[1]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-[var(--border)] pt-12 text-left">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <h3 className="font-bold text-lg mb-2">Arquitectura</h3>
                <p className="font-medium opacity-60">Sistemas escalables y limpios</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <h3 className="font-bold text-lg mb-2">Negocio</h3>
                <p className="font-medium opacity-60">Conversión y cumplimiento legal</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                <h3 className="font-bold text-lg mb-2">Innovación</h3>
                <p className="font-medium opacity-60">IA aplicada a flujos reales</p>
             </motion.div>
          </div>
        </motion.div>
      </motion.header>
      )}

      {activeMenu === 'educacion' && (
      <motion.section 
        key="educacion"
        id="educacion" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="py-12 px-6 max-w-6xl mx-auto"
      >
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
         >
            <span className="text-2xl font-black opacity-30">01</span>
            <h2 className="text-3xl font-bold tracking-tight">Formación & Certificaciones</h2>
         </motion.div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.about.education.map((edu, idx) => (
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 key={idx} 
                 className="p-10 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                 <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-80" style={{ backgroundColor: 'var(--bg)', color: 'var(--accent)' }}>
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                   </div>
                   {edu.institution}
                 </h3>
                 <ul className="space-y-4">
                    {edu.studies.map((study, sIdx) => (
                       <li key={sIdx} className="opacity-70 pb-4 border-b last:border-0 last:pb-0 font-semibold" style={{ borderColor: 'var(--border)' }}>{study}</li>
                    ))}
                 </ul>
              </motion.div>
            ))}
         </div>
      </motion.section>
      )}

      {activeMenu === 'proyectos' && (
      <motion.section 
        key="proyectos"
        id="proyectos" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="py-12 px-6 max-w-6xl mx-auto"
      >
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
         >
            <span className="text-2xl font-black opacity-30">02</span>
            <h2 className="text-3xl font-bold tracking-tight">Proyectos en Producción</h2>
         </motion.div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {t.projects.map((proj, idx) => (
               <motion.a 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  href={proj.link} target="_blank" rel="noopener noreferrer" key={proj.id} className="group rounded-[2.5rem] border overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                     <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                     <div className="absolute top-6 right-6 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#000' }}>
                        {proj.tech.split('|')[0].trim()}
                     </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col" style={{ backgroundColor: 'var(--surface)' }}>
                     <h3 className="text-2xl font-extrabold mb-3 transition-colors tracking-tight group-hover:opacity-80" style={{ color: 'var(--text)' }}>{proj.title}</h3>
                     <p className="mb-8 flex-grow leading-relaxed font-medium opacity-70">{proj.description}</p>
                     <div className="flex items-center gap-2 font-extrabold group-hover:gap-4 transition-all uppercase tracking-wider text-sm" style={{ color: 'var(--accent)' }}>
                        Ver Proyecto <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </motion.a>
            ))}
         </div>
      </motion.section>
      )}

      {activeMenu === 'analisis' && (
      <motion.section 
        key="analisis"
        id="analisis" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="py-12 px-6 max-w-6xl mx-auto"
      >
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
         >
            <span className="text-2xl font-black opacity-30">03</span>
            <h2 className="text-3xl font-bold tracking-tight">Niveles de Infografía</h2>
         </motion.div>
         <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[250px]">
            {t.infographics.items.map((item, i) => (
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={i} className={`relative border rounded-[2rem] overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-4' : 'md:col-span-2'}`} style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white z-10 pointer-events-none transform group-hover:-translate-y-2 transition-transform duration-500">
                     <h4 className="font-extrabold text-xl mb-2 tracking-tight">{item.title}</h4>
                     <p className="text-sm text-gray-300 font-medium">{item.desc}</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </motion.section>
      )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t pt-24 pb-12 px-6" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-3">
               <span className="font-black text-2xl mb-6 block tracking-tight" style={{ color: 'var(--accent)' }}>Nicolás</span>
               <p className="font-medium leading-relaxed max-w-sm opacity-60">Especialista en desarrollo web escalable, optimización de interfaces e integración avanzada de IA.</p>
            </div>
            <div>
               <h5 className="font-bold mb-6 uppercase tracking-widest text-[10px] opacity-40">Navegación</h5>
               <div className="flex flex-col gap-4 font-bold text-sm">
                  <button onClick={() => setActiveMenu('proyectos')} className="hover:opacity-70 transition-colors text-left" style={{ color: 'var(--text)' }}>Proyectos</button>
                  <button onClick={() => setActiveMenu('analisis')} className="hover:opacity-70 transition-colors text-left" style={{ color: 'var(--text)' }}>Arquitectura</button>
                  <a href={t.contact.instagram} className="hover:opacity-70 transition-colors" style={{ color: 'var(--text)' }}>Instagram</a>
               </div>
            </div>
            <div>
               <h5 className="font-bold mb-6 uppercase tracking-widest text-[10px] opacity-40">Disponibilidad</h5>
               <p className="font-bold mb-4 text-sm opacity-80">Bogotá, Colombia • Remoto</p>
               <a href={`mailto:${t.contact.email}`} className="font-extrabold hover:underline transition-colors text-sm" style={{ color: 'var(--accent)' }}>{t.contact.email}</a>
            </div>
         </div>
         <div className="max-w-6xl mx-auto pt-8 border-t text-left font-semibold text-xs tracking-wide opacity-30" style={{ borderColor: 'var(--border)' }}>
            &copy; 2026 Nicolás Bautista Pardo. Bogotá, Colombia.
         </div>
      </footer>
    </div>
  );
};
