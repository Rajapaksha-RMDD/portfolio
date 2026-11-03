import React from 'react';
import { ArrowUpRight, Film, Share2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContentSection: React.FC = () => {
  return (
    <section id="content" className="relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            [ 05 — VIDEOGRAPHY & MEDIA ]
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight uppercase">
            SAME EYE FOR DETAIL, <span className="text-rose-600">POINTED AT A CAMERA.</span>
          </h2>
          <p className="text-zinc-400 font-body text-base leading-relaxed">
            Alongside software development, I direct and edit short-form visual content — filming, pacing, and color-grading on TikTok and building digital storytelling for audiences on Facebook.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Film className="w-4 h-4 text-rose-500" /> High-Retention Editing
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-rose-500" /> Digital Reach
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href={PERSONAL_INFO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-3xl bg-[#0e0d19] border border-zinc-800/90 hover:border-rose-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-rose-950/40 text-rose-400 border border-rose-500/30">
                  TIKTOK CREATOR
                </span>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-rose-400 transition-colors" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-rose-300 transition-colors">
                {PERSONAL_INFO.tiktokHandle}
              </h3>
              <p className="text-zinc-400 text-xs font-body leading-relaxed">
                Short-form creative videography, camera gear experiments, and cinematic micro-stories.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs text-rose-400">
              <span>View Profile</span>
              <span>↗</span>
            </div>
          </a>

          <a
            href={PERSONAL_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-3xl bg-[#0e0d19] border border-zinc-800/90 hover:border-rose-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-zinc-800 text-zinc-300 border border-zinc-700">
                  FACEBOOK PAGE
                </span>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-rose-400 transition-colors" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-rose-300 transition-colors">
                Digital Creator
              </h3>
              <p className="text-zinc-400 text-xs font-body leading-relaxed">
                Creator channel sharing production updates, behind-the-scenes footage, and technical projects.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs text-zinc-300 group-hover:text-rose-400 transition-colors">
              <span>Visit Page</span>
              <span>↗</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
