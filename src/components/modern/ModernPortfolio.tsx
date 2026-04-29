import React from 'react';
import { data, Language } from '../../data/portfolio_data';
import { ArrowRight } from 'lucide-react';

export const ModernPortfolio: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = data[lang];
  
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-jakarta font-light selection:bg-blue-200 overflow-x-hidden">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/80 backdrop-blur-md border border-gray-100 rounded-full z-50 px-6 py-4 shadow-sm flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="font-extrabold text-sm tracking-tight">Nicolás Bautista Pardo</span>
        </div>
        
        <div className="hidden md:flex gap-8">
           <a href="#proyectos" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors">Proyectos</a>
           <a href="#analisis" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors">Arquitectura</a>
           <a href="#educacion" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors">Formación</a>
        </div>
        
        <div className="flex gap-4">
           <a href={t.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-black/10">
              Contacto <ArrowRight className="w-4 h-4" />
           </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-extrabold uppercase tracking-widest text-gray-700 shadow-sm">Web & Arquitectura</span>
            <span className="px-5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-extrabold uppercase tracking-widest text-gray-700 shadow-sm">Java</span>
            <span className="px-5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-extrabold uppercase tracking-widest text-gray-700 shadow-sm">IA</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-balance">
            Ingeniería Front-End & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-900">Soluciones de Negocio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-16 text-balance font-medium">
            {t.about.content.split('\n\n')[1]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-gray-200 pt-12 text-left">
             <div>
                <h3 className="font-bold text-lg mb-2 text-black">Arquitectura</h3>
                <p className="text-gray-500 font-medium">Sistemas escalables y limpios</p>
             </div>
             <div>
                <h3 className="font-bold text-lg mb-2 text-black">Negocio</h3>
                <p className="text-gray-500 font-medium">Conversión y cumplimiento legal</p>
             </div>
             <div>
                <h3 className="font-bold text-lg mb-2 text-black">Innovación</h3>
                <p className="text-gray-500 font-medium">IA aplicada a flujos reales</p>
             </div>
          </div>
        </div>
      </header>
      
      {/* Education */}
      <section id="educacion" className="py-24 px-6 max-w-6xl mx-auto">
         <div className="flex items-center gap-4 mb-16 opacity-80">
            <span className="text-2xl font-black text-gray-300">01</span>
            <h2 className="text-3xl font-bold tracking-tight">Formación & Certificaciones</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.about.education.map((edu, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300">
                 <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                   </div>
                   {edu.institution}
                 </h3>
                 <ul className="space-y-4">
                    {edu.studies.map((study, sIdx) => (
                       <li key={sIdx} className="text-gray-600 pb-4 border-b border-gray-50 last:border-0 last:pb-0 font-semibold">{study}</li>
                    ))}
                 </ul>
              </div>
            ))}
         </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
         <div className="flex items-center gap-4 mb-16 opacity-80">
            <span className="text-2xl font-black text-gray-300">02</span>
            <h2 className="text-3xl font-bold tracking-tight">Proyectos en Producción</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {t.projects.map((proj) => (
               <a href={proj.link} target="_blank" rel="noopener noreferrer" key={proj.id} className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                     <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                     <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold shadow-sm text-black">
                        {proj.tech.split('|')[0].trim()}
                     </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col bg-white">
                     <h3 className="text-2xl font-extrabold mb-3 group-hover:text-blue-600 transition-colors tracking-tight">{proj.title}</h3>
                     <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-medium">{proj.description}</p>
                     <div className="flex items-center gap-2 text-blue-600 font-extrabold group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
                        Ver Proyecto <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </a>
            ))}
         </div>
      </section>

      {/* Infographics / Analytics */}
      <section id="analisis" className="py-24 px-6 max-w-6xl mx-auto">
         <div className="flex items-center gap-4 mb-16 opacity-80">
            <span className="text-2xl font-black text-gray-300">03</span>
            <h2 className="text-3xl font-bold tracking-tight">Niveles de Infografía</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[250px]">
            {t.infographics.items.map((item, i) => (
               <div key={i} className={`relative bg-gray-900 border border-transparent rounded-[2rem] overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-4' : 'md:col-span-2'}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white z-10 pointer-events-none transform group-hover:-translate-y-2 transition-transform duration-500">
                     <h4 className="font-extrabold text-xl mb-2 tracking-tight">{item.title}</h4>
                     <p className="text-sm text-gray-300 font-medium">{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-3">
               <span className="font-black text-2xl text-blue-600 mb-6 block tracking-tight">Nicolás</span>
               <p className="text-gray-500 font-medium leading-relaxed max-w-sm">Especialista en desarrollo web escalable, optimización de interfaces e integración avanzada de IA.</p>
            </div>
            <div>
               <h5 className="font-bold mb-6 text-gray-400 uppercase tracking-widest text-[10px]">Navegación</h5>
               <div className="flex flex-col gap-4 font-bold text-gray-700 text-sm">
                  <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
                  <a href="#analisis" className="hover:text-blue-600 transition-colors">Arquitectura</a>
                  <a href={t.contact.instagram} className="hover:text-blue-600 transition-colors">Instagram</a>
               </div>
            </div>
            <div>
               <h5 className="font-bold mb-6 text-gray-400 uppercase tracking-widest text-[10px]">Disponibilidad</h5>
               <p className="text-gray-700 font-bold mb-4 text-sm">Bogotá, Colombia • Remoto</p>
               <a href={`mailto:${t.contact.email}`} className="font-extrabold text-blue-600 hover:text-blue-800 transition-colors text-sm">{t.contact.email}</a>
            </div>
         </div>
         <div className="max-w-6xl mx-auto pt-8 border-t border-gray-50 text-left text-gray-400 font-semibold text-xs tracking-wide">
            &copy; 2026 Nicolás Bautista Pardo. Bogotá, Colombia.
         </div>
      </footer>
    </div>
  );
};
