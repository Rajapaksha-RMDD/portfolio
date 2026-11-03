import React from 'react';
import { ArrowDown, Github, MessageSquare, Video, ArrowUpRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
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

      {/* Center Stage: Bold Architectural Typography & Clean Hero Presentation */}
      <div className="relative z-10 my-auto py-10 sm:py-16 flex flex-col items-center justify-center text-center">
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
          <h1 className="font-display font-extrabold tracking-tight uppercase leading-[0.92] select-none text-center">
            <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              {PERSONAL_INFO.firstName}
            </span>
            <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-rose-500 to-red-600 drop-shadow-[0_0_40px_rgba(225,29,72,0.35)] mt-1 sm:mt-2">
              {PERSONAL_INFO.lastName}
            </span>
          </h1>
        </div>

        {/* Lead Subtitle & Role */}
        <div className="relative z-30 mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
          <p className="text-sm sm:text-base md:text-lg font-body text-zinc-300 font-light leading-relaxed">
            Frontend Developer <span className="text-rose-500 mx-1.5 font-mono">/</span> Full-Stack Builder <span className="text-rose-500 mx-1.5 font-mono">/</span> Digital Content Creator
          </p>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 mt-3">
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        {/* Hero Actions */}
        <div className="relative z-30 flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 flex-wrap w-full max-w-xl px-4">
          <a
            href="#projects"
            className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold tracking-wider text-white bg-rose-600 hover:bg-rose-500 shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all duration-200 transform hover:-translate-y-0.5"
          >
            VIEW PROJECTS
          </a>
          <a
            href={PERSONAL_INFO.cvUrl}
            download={PERSONAL_INFO.cvFileName}
            title="Download Dasindu Rajapaksha CV (PDF)"
            className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-white border border-rose-500/40 hover:border-rose-400 bg-rose-950/40 hover:bg-rose-900/50 backdrop-blur-sm transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5 text-rose-400" />
            <span>DOWNLOAD CV</span>
          </a>
          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white bg-zinc-900/60 backdrop-blur-sm transition-all duration-200"
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
