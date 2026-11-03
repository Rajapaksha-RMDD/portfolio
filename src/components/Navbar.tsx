import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Sliders } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
  onToggleControlPanel: () => void;
  controlPanelOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeSection,
  onToggleControlPanel,
  controlPanelOpen
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#top' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECT', href: '#projects' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CREDENTIALS', href: '#credentials' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06050b]/85 backdrop-blur-md border-b border-rose-950/40 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-1.5 font-display text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          <span className="tracking-wider">DR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-150 transition-transform shadow-[0_0_8px_#f43f5e]" />
        </a>

        {/* Zone 2: Navigation Links (Single-Line Unbroken) */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive ? 'text-white' : 'hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full shadow-[0_0_6px_#f43f5e]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleControlPanel}
            title="Video Scrub & Display Mode Controls"
            className={`p-2 rounded-full border text-xs transition-colors flex items-center gap-1.5 ${
              controlPanelOpen
                ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/60'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span className="hidden sm:inline font-mono text-[11px]">Scrub HUD</span>
          </button>

          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold tracking-wider text-white border border-rose-500/40 rounded-full hover:border-rose-400 hover:bg-rose-600/20 transition-all duration-200 whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(225,29,72,0.15)]"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#08070e]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-wider text-zinc-300 hover:text-rose-400 py-2 border-b border-zinc-800/60"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 text-xs font-semibold tracking-wider text-white bg-rose-600 rounded-full"
          >
            CONTACT ME (WHATSAPP)
          </a>
        </div>
      )}
    </header>
  );
};
