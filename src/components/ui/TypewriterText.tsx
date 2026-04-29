import React, { useState, useEffect } from 'react';

export function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText(""); // Reset text on remount or text change
    
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="whitespace-pre-line">
      {displayedText}
      <span className="animate-pulse inline-block ml-1 w-2 h-5 bg-white align-middle"></span>
    </span>
  );
}
