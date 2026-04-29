export const matrix = [
  "   KK           ",
  "  KWWK          ",
  "  KWwK          ",
  "  KWwK KK       ",
  "   KWWKKWWK     ",
  "   KWWWwWwK  KK ",
  "   KWWWWwwK KWWK",
  "  KKWWWWwwKKWwwK",
  " KWWWwWWWWWWWwwK",
  " KWWwwWWWWWWWWwK",
  " KWWWwWWWWWWWWwK",
  "  KWWWWWWWWWWWwK",
  "  KDWWWWWWWWWWDK",
  "   KDDWWWWWWwDDK",
  "    KKDDDDDDDDK ",
  "      KKKKKKKK  "
];

export const generateCursor = (palette: Record<string, string>, dropShadow: string, sizeMultiplier = 32) => {
  let rects = "";
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const char = matrix[y][x];
      if (palette[char]) {
        rects += `<rect x="${x}" y="${y}" width="1.1" height="1.1" fill="${palette[char]}" />`;
      }
    }
  }
  
  // Using 1.1 width/height prevents weird anti-aliasing gaps between pixel rects
  
  const width = matrix[0].length;
  const height = matrix.length;
  
  // padding to accommodate drop-shadows
  const p = 4;
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-${p} -${p} ${width + p*2} ${height + p*2}" width="${sizeMultiplier}" height="${sizeMultiplier}" style="filter: ${dropShadow}; overflow: visible;">${rects}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const defaultCursor = generateCursor(
  {
    'K': '#242528', 
    'W': '#8b8e96', 
    'w': '#6b6e77',
    'D': '#4a4d55'  
  },
  'drop-shadow(2px 2px 2px rgba(0,0,0,0.8))',
  36
);

export const activeCursor = generateCursor(
  {
    'K': '#242528', 
    'W': '#e2e8f0', 
    'w': '#94a3b8',
    'D': '#64748b'  
  },
  'drop-shadow(1.5px 1.5px 0px #0ea5e9) drop-shadow(-1.5px -1.5px 0px #0ea5e9) drop-shadow(1.5px -1.5px 0px #0ea5e9) drop-shadow(-1.5px 1.5px 0px #0ea5e9) drop-shadow(0px 4px 6px rgba(0,0,0,0.5))',
  36
);
