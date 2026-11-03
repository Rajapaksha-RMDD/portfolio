import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CREDENTIALS } from '../data/portfolioData';
import { Credential } from '../types';

export const CredentialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCred, setSelectedCred] = useState<Credential | null>(null);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? CREDENTIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === CREDENTIALS.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="credentials" className="relative z-20 py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
            [ CERTIFIED TRACK RECORD ]
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tight uppercase leading-none">
            <span>LICENSES & </span>
            <span className="text-rose-600">CREDENTIALS</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous credential"
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-rose-500 text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next credential"
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-rose-500 text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CREDENTIALS.map((cred, idx) => {
          const isFeatured = idx === currentIndex;
          return (
            <div
              key={cred.id}
              onClick={() => {
                setCurrentIndex(idx);
                setSelectedCred(cred);
              }}
              className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                isFeatured
                  ? 'bg-[#121020] border-rose-500/70 shadow-[0_15px_40px_rgba(225,29,72,0.18)] scale-[1.02]'
                  : 'bg-[#0d0c17] border-zinc-800/80 hover:border-zinc-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-zinc-800/90 text-rose-400 border border-rose-500/30">
                    {cred.badge}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{cred.year}</span>
                </div>

                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-900 to-black p-5 border border-zinc-800 flex flex-col justify-between mb-6 relative overflow-hidden group">
                  <div className="absolute -right-8 -top-8 w-28 h-28 bg-rose-600/10 rounded-full blur-xl pointer-events-none" />

                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-6 h-6 text-rose-500" />
                    <span className="text-[10px] font-mono text-zinc-500">{cred.issuer}</span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base text-white leading-snug">
                      {cred.title}
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-400 mt-1">Verified Credential</p>
                  </div>

                  <div className="flex items-center gap-1.5 pt-2 border-t border-zinc-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-mono text-emerald-400">Accredited Status</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs font-body leading-relaxed mb-6">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/70">
                <div className="flex flex-wrap gap-1.5">
                  {cred.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        {CREDENTIALS.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              dotIdx === currentIndex ? 'w-8 bg-rose-600' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
            }`}
          />
        ))}
      </div>

      {selectedCred && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCred(null)}
        >
          <div
            className="max-w-lg w-full bg-[#100e1c] border border-zinc-700 rounded-3xl p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-rose-400">{selectedCred.badge}</span>
              <button
                onClick={() => setSelectedCred(null)}
                className="text-zinc-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              {selectedCred.title}
            </h3>
            <p className="font-mono text-xs text-zinc-500 mb-6">
              Issued by {selectedCred.issuer} · {selectedCred.year}
            </p>
            <p className="text-zinc-300 text-sm font-body leading-relaxed mb-6">
              {selectedCred.description}
            </p>
            <div className="space-y-2 mb-6">
              <span className="font-mono text-xs text-zinc-400 block">Competencies Validated:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCred.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-rose-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedCred(null)}
              className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs tracking-wider transition-colors"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
