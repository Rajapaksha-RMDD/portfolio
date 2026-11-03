import React from 'react';
import { ArrowDown, Github, MessageSquare, Video, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Ambient Crimson Glow behind portrait */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[620px] h-[340px] md:h-[620px] rounded-full pointer-events-none blur-[120px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(225,29,72,0.85) 0%, rgba(136,19,55,0.4) 45%, transparent 70%)',
        }}
      />

      {/* Left Vertical Social Bar (Matching the video at 00:01) */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-40">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-zinc-500 hover:text-white hover:scale-110 transition-all p-1.5"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={PERSONAL_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="text-zinc-500 hover:text-rose-400 hover:scale-110 transition-all p-1.5"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
        <a
          href={PERSONAL_INFO.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok"
          className="text-zinc-500 hover:text-rose-400 hover:scale-110 transition-all p-1.5"
        >
          <Video className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-12 bg-zinc-800" />
        <span className="font-mono text-[10px] tracking-widest text-zinc-600 rotate-90 origin-left translate-y-6">
          CONNECT
        </span>
      </div>

      {/* Eyebrow Status */}
      <div className="relative z-20 pt-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{PERSONAL_INFO.status}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>

      {/* Center Stage: Huge Stacked Typography + Cutout Photo */}
      <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center text-center">
        {/* Layer 1: Giant Background Typography */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
          <h1 className="font-display font-extrabold tracking-tighter uppercase leading-[0.88] select-none text-center">
            <span className="block text-[14vw] md:text-[11vw] lg:text-[130px] text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              {PERSONAL_INFO.firstName}
            </span>
            <span
              className="block text-[13vw] md:text-[10vw] lg:text-[120px] text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-rose-500 to-red-600 drop-shadow-[0_0_40px_rgba(225,29,72,0.35)]"
            >
              {PERSONAL_INFO.lastName}
            </span>
          </h1>

          {/* Layer 2: Cutout Photo overlapping the giant letters */}
          <div className="absolute inset-x-0 bottom-[-20px] md:bottom-[-40px] flex justify-center pointer-events-none z-20">
            <div className="relative w-[280px] sm:w-[360px] md:w-[460px] lg:w-[520px] max-w-full">
              {/* Subtle back illumination glow right behind portrait head/shoulders */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-rose-600/35 blur-3xl pointer-events-none" />

              <img
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] contrast-[1.05]"
              />

              {/* Bottom vignette to blend bottom edge cleanly into background */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07060b] via-[#07060b]/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Lead Subtitle & Role */}
        <div className="relative z-30 mt-6 sm:mt-10 max-w-xl mx-auto px-4">
          <p className="text-sm md:text-base font-body text-zinc-300 font-light">
            Frontend Developer <span className="text-rose-500 mx-1.5 font-mono">/</span> Full-Stack Builder <span className="text-rose-500 mx-1.5 font-mono">/</span> Digital Content Creator
          </p>
        </div>

        {/* Hero Actions */}
        <div className="relative z-30 flex items-center justify-center gap-4 mt-8 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full text-xs font-semibold tracking-wider text-white bg-rose-600 hover:bg-rose-500 shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all duration-200 transform hover:-translate-y-0.5"
          >
            VIEW PROJECTS
          </a>
          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full text-xs font-semibold tracking-wider text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white bg-zinc-900/60 backdrop-blur-sm transition-all duration-200"
          >
            SAY HELLO
          </a>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-20 flex items-center justify-between text-zinc-500 text-xs font-mono pt-6 border-t border-zinc-900">
        <div className="flex items-center gap-2">
          <span>01</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">HERO INTRO</span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <span className="tracking-widest text-[11px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-rose-500" />
        </a>
      </div>
    </section>
  );
};
