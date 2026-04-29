import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId } from '../../data/portfolio_data';

interface RetroDialogProps {
  id: SectionId;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function RetroDialog({ id, title, onClose, children }: RetroDialogProps) {
  // Simple hack to force re-animation when dialog mounts
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!id) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="pixel-box relative w-full max-w-2xl max-h-[80vh] flex flex-col pointer-events-auto bg-[#1a1c2c]/95"
          onClick={(e) => e.stopPropagation()} // Prevent click from closing
        >
          {/* CRT Overlay on Dialog */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 opacity-70" />

          {/* Header */}
          <div className="relative z-20 bg-[var(--color-retro-primary)] border-b-4 border-[var(--color-retro-border)] p-4 flex justify-between items-center shadow-md">
            <h2 className="text-3xl md:text-4xl text-white tracking-widest uppercase shadow-black drop-shadow-md">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-[#ff0044] text-3xl px-2 active:translate-y-1 transition-transform"
            >
              [X]
            </button>
          </div>

          {/* Content Body */}
          <div className="relative z-20 p-6 md:p-8 overflow-y-auto text-xl md:text-3xl text-[var(--color-retro-text)] leading-relaxed h-[60vh] custom-scroll">
            {children}
          </div>
          
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--color-retro-border)]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--color-retro-border)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--color-retro-border)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--color-retro-border)]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
