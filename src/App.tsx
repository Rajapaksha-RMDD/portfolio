import React, { useState, useEffect } from 'react';
import { VideoScrubber } from './components/VideoScrubber';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsCarousel } from './components/CredentialsCarousel';
import { ServicesSection } from './components/ServicesSection';
import { ContentSection } from './components/ContentSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ScrubModeController } from './components/ScrubModeController';
import { PERSONAL_INFO } from './data/portfolioData';
import { Project, ViewMode } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('top');
  const [viewMode, setViewMode] = useState<ViewMode>('portfolio');
  const [videoOpacity, setVideoOpacity] = useState<number>(0.2);
  const [controlPanelOpen, setControlPanelOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const [scrubStats, setScrubStats] = useState({
    current: 0,
    target: 0,
    duration: 1,
    progress: 0,
    reducedMotion: false,
  });

  // Track scroll progress for the top progress bar and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollPercent(pct);

      const sections = ['contact', 'content', 'credentials', 'services', 'projects', 'about', 'top'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07060b] text-[#f4f2fa] font-body selection:bg-rose-600 selection:text-white">
      {/* Top 2px Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 z-50 transition-all duration-75 pointer-events-none shadow-[0_0_8px_#f43f5e]"
        style={{ width: `${scrollPercent}%` }}
      />

      {/* Video Scrubber Engine (Always actively bound to scroll progress using the requested physics formula) */}
      <VideoScrubber
        videoSrc={PERSONAL_INFO.videoUrl}
        opacity={
          viewMode === 'pure-video'
            ? 1
            : viewMode === 'video-backdrop'
            ? videoOpacity
            : viewMode === 'split-view'
            ? 1
            : videoOpacity > 0
            ? videoOpacity * 0.4
            : 0
        }
        className={
          viewMode === 'split-view'
            ? 'hidden' // Rendered separately inside the split-view column
            : ''
        }
        onStatsUpdate={setScrubStats}
      />

      {/* Split-View Mode Layout */}
      {viewMode === 'split-view' ? (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Column: Fixed Sticky Scrubbing Video Viewer */}
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 bg-black flex flex-col justify-between p-6 border-r border-zinc-800 z-30">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="font-mono text-xs text-rose-400 font-bold tracking-widest uppercase">
                SCROLL-SCRUBBED VIDEO STREAM
              </span>
              <span className="font-mono text-xs text-zinc-400">
                {(scrubStats.progress * 100).toFixed(1)}% SCROLLED
              </span>
            </div>

            <div className="relative flex-1 my-4 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
              <VideoScrubber
                videoSrc={PERSONAL_INFO.videoUrl}
                opacity={1}
                className="!absolute inset-0"
                onStatsUpdate={setScrubStats}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-zinc-300">Timecode:</span>
                <span className="text-rose-400 font-bold tabular-nums">
                  {scrubStats.current.toFixed(2)}s / {scrubStats.duration.toFixed(2)}s
                </span>
              </div>
            </div>

            <div className="text-zinc-500 font-mono text-[11px] flex justify-between">
              <span>Object-fit: cover · playsinline</span>
              <span>Smooth seek: dt * 8</span>
            </div>
          </div>

          {/* Right Column: Scrollable Redesigned Portfolio */}
          <div className="lg:w-1/2 relative z-20">
            <Navbar
              onOpenContact={handleOpenContact}
              activeSection={activeSection}
              onToggleControlPanel={() => setControlPanelOpen(!controlPanelOpen)}
              controlPanelOpen={controlPanelOpen}
            />
            <Hero onOpenContact={handleOpenContact} />
            <AboutSection />
            <MarqueeTicker />
            <ProjectsSection onSelectProject={setSelectedProject} />
            <ServicesSection />
            <CredentialsCarousel />
            <ContentSection />
            <ContactSection />
          </div>
        </div>
      ) : viewMode === 'pure-video' ? (
        /* Pure Video Scrubber Inspection Mode */
        <div className="relative z-20 min-h-[400vh] flex flex-col justify-between p-8 text-white select-none">
          <div className="fixed top-8 left-8 z-40 bg-black/80 backdrop-blur-md border border-zinc-700/80 rounded-2xl p-4 max-w-sm">
            <h2 className="font-display font-bold text-lg text-white mb-1">
              Scroll-Scrubbed Video Mode
            </h2>
            <p className="font-mono text-xs text-zinc-400 mb-3 leading-relaxed">
              Scroll up and down to scrub the video timeline smoothly. Playback is paused and playhead position is continuously driven by scroll progress.
            </p>
            <div className="space-y-1 font-mono text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Current time:</span>
                <span className="text-rose-400 font-bold tabular-nums">
                  {scrubStats.current.toFixed(2)}s
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Duration:</span>
                <span className="text-zinc-200 tabular-nums">
                  {scrubStats.duration.toFixed(2)}s
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Scroll Progress:</span>
                <span className="text-white font-bold">
                  {(scrubStats.progress * 100).toFixed(1)}%
                </span>
              </div>
            </div>
            <button
              onClick={() => setViewMode('portfolio')}
              className="mt-4 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 font-mono text-xs font-bold tracking-wider text-white transition-colors"
            >
              RETURN TO REDESIGNED PORTFOLIO
            </button>
          </div>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 font-mono text-xs tracking-wider text-zinc-300">
            SCROLL DOWN TO SCRUB TIMELINE ↓
          </div>
        </div>
      ) : (
        /* Standard Portfolio Experience (with background glow / optional video backdrop) */
        <div className="relative z-10">
          <Navbar
            onOpenContact={handleOpenContact}
            activeSection={activeSection}
            onToggleControlPanel={() => setControlPanelOpen(!controlPanelOpen)}
            controlPanelOpen={controlPanelOpen}
          />

          <main id="main-content">
            <Hero onOpenContact={handleOpenContact} />
            <AboutSection />
            <MarqueeTicker />
            <ProjectsSection onSelectProject={setSelectedProject} />
            <ServicesSection />
            <CredentialsCarousel />
            <ContentSection />
            <ContactSection />
          </main>
        </div>
      )}

      {/* Floating HUD Controller */}
      <ScrubModeController
        isOpen={controlPanelOpen}
        onClose={() => setControlPanelOpen(false)}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
        videoOpacity={videoOpacity}
        onChangeVideoOpacity={setVideoOpacity}
        stats={scrubStats}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
