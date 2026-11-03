import React, { useState, useEffect } from 'react';
import { ArrowUp, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: PERSONAL_INFO.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      try {
        setLocalTime(new Intl.DateTimeFormat('en-GB', options).format(now));
      } catch {
        setLocalTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-20 pt-16 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="mb-12 sm:mb-20">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3 sm:mb-4">
          [ 06 — GET IN TOUCH ]
        </p>
        <h2 className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.95] sm:leading-[0.9]">
          <span className="block text-white">LET'S CREATE</span>
          <span className="block text-rose-600 drop-shadow-[0_0_50px_rgba(225,29,72,0.4)]">
            SOMETHING
          </span>
          <span className="block text-white">GREAT.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-zinc-800/80">
        <div className="md:col-span-3 space-y-4">
          <span className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase block">
            SOCIALS
          </span>
          <ul className="space-y-3 font-mono text-xs">
            <li>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <span>WHATSAPP</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={PERSONAL_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <span>TIKTOK</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <span>FACEBOOK</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5 space-y-4">
          <span className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase block">
            DIRECT INQUIRIES
          </span>
          <div>
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-2.5 text-base sm:text-lg font-mono font-bold text-white hover:text-rose-400 transition-colors"
              title="Click to copy email address"
            >
              <span>{PERSONAL_INFO.email}</span>
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-600 group-hover:text-rose-400 transition-colors" />
              )}
            </button>
            <p className="font-mono text-xs text-zinc-500 mt-2">
              {PERSONAL_INFO.whatsapp} · Available for international freelance projects
            </p>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase block md:text-right">
              LOCAL TIME
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                {localTime || '00:00:00'}
              </span>
              <span className="font-mono text-xs text-rose-500 uppercase font-bold">
                LK / UTC+5:30
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="mt-8 p-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
        <span>© {new Date().getFullYear()} DASINDU RAJAPAKSHA. ALL RIGHTS RESERVED.</span>
        <span>ENGINEERED WITH REACT, TYPESCRIPT &amp; VITE</span>
      </div>
    </footer>
  );
};
