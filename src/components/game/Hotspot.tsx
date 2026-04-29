import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../data/portfolio_data';

interface HotspotProps {
  id: SectionId;
  x: number; // Percentage X
  y: number; // Percentage Y
  width: number; // Percentage Width
  height: number; // Percentage Height
  label: string;
  onSelect: (id: SectionId) => void;
  icon?: string;
  style?: React.CSSProperties;
}

export function Hotspot({ id, x, y, width, height, label, onSelect, icon, style }: HotspotProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute cursor-pointer flex items-center justify-center group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(id)}
    >
      {/* Hitbox area with subtle pulsing light */}
      <div className="absolute inset-0 border-2 border-[var(--color-retro-accent)]/40 group-hover:border-4 group-hover:border-[var(--color-retro-accent)] bg-[var(--color-retro-accent)]/10 group-hover:bg-[var(--color-retro-accent)]/30 transition-all pointer-events-none shadow-[0_0_15px_rgba(56,183,100,0.3)] group-hover:shadow-[0_0_25px_rgba(56,183,100,0.7)] animate-pulse" />
      
      {/* Floating tooltip/label on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -20 : 10, scale: isHovered ? 1 : 0.8 }}
        className="absolute -top-16 bg-[var(--color-retro-bg)] text-white text-2xl px-4 py-2 pixel-borders pointer-events-none whitespace-nowrap flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-50 text-[var(--color-retro-accent)]"
      >
        <span>{icon}</span> {label}
      </motion.div>
    </div>
  );
}
