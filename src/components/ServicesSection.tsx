import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="mb-14">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
          [ 03 — CAPABILITIES ]
        </p>
        <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none">
          <span>WHAT </span>
          <span className="text-rose-600">I DO</span>
        </h2>
      </div>

      <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
        {SERVICES.map((service, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={service.number} className="group transition-colors duration-200">
              <button
                onClick={() => toggle(idx)}
                className="w-full py-8 flex items-center justify-between text-left gap-6 cursor-pointer"
              >
                <div className="flex items-center gap-6 sm:gap-12">
                  <span className="font-mono text-sm sm:text-base text-zinc-600 group-hover:text-rose-500 transition-colors">
                    {service.number}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-rose-400 group-hover:translate-x-2 transition-all">
                    {service.title}
                  </h3>
                </div>

                <div className="p-2 rounded-full border border-zinc-800 text-zinc-400 group-hover:border-rose-500 group-hover:text-rose-400 transition-colors shrink-0">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="pb-8 pl-12 sm:pl-20 max-w-3xl animate-fadeIn">
                  <p className="text-zinc-400 text-base font-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono text-rose-300 bg-rose-950/30 border border-rose-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
