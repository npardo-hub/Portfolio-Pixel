import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max = 100 }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const blocksCount = 20;
  const filledBlocks = Math.round((percentage / 100) * blocksCount);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 text-sm md:text-xl uppercase tracking-wider text-green-400">
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <div className="flex gap-1 h-6 w-full">
        {Array.from({ length: blocksCount }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 border-b-2 border-r-2 ${
              i < filledBlocks 
                ? 'bg-[var(--color-retro-accent)] border-[#288448]' 
                : 'bg-[#111] border-[#222]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
