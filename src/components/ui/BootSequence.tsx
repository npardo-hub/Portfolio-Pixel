import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { data } from '../../data/portfolio_data';

interface BootSequenceProps {
  onComplete: () => void;
  lang: 'es' | 'en';
}

export function BootSequence({ onComplete, lang }: BootSequenceProps) {
  const [booting, setBooting] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md cursor-pointer"
      onClick={() => {
        if (!booting) onComplete();
      }}
    >
      <div className="z-20 flex flex-col items-start px-4 w-full max-w-4xl text-left font-mono">
        <AnimatePresence>
          {!booting && showPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-center flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest uppercase mb-4 text-center leading-tight">
                Nicolás Bautista Pardo
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl text-[var(--color-retro-accent)] mb-16 tracking-[0.2em] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] uppercase">
                {lang === 'es' ? 'Portafolio Interactivo' : 'Interactive Portfolio'}
              </h2>
              <div
                className="animate-pulse text-lg md:text-2xl text-yellow-500 uppercase tracking-widest flex items-center justify-center gap-4 bg-black/60 px-6 py-3 border-2 border-yellow-500 hover:bg-yellow-500/10 transition-colors pixel-box"
              >
                {lang === 'es' ? '> INICIAR SISTEMA <' : '> INITIALIZE SYSTEM <'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
