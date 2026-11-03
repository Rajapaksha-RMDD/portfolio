import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const phrases = [
    'SCALABLE SYSTEMS',
    'CLEAN CODE',
    'IOT FIRMWARE',
    'FRONTEND ARCHITECTURE',
    'FULL-STACK SYSTEMS',
    'DIGITAL CONTENT',
  ];

  return (
    <div className="relative z-20 py-8 bg-[#090812] border-y border-zinc-800/80 overflow-hidden select-none">
      <div className="animate-marquee flex items-center">
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {phrases.map((phrase, idx) => (
              <div key={`${loopIdx}-${idx}`} className="flex items-center mx-6 sm:mx-10">
                <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-zinc-300 hover:text-white transition-colors">
                  {phrase}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 mx-6 sm:mx-10 shadow-[0_0_10px_#e11d48]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
