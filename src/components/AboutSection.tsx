import React from 'react';
import { Download, ArrowUpRight, Sparkles, Code2, Server, Cpu, Video, Layers, Database, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCv, viewCvPdf } from '../utils/downloadCv';

export const AboutSection: React.FC = () => {

  return (
    <section id="about" className="relative z-20 pt-6 sm:pt-8 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8">
      {/* Curved White Inverted Container (Matching frame 00:11 in the video) */}
      <div className="max-w-7xl mx-auto bg-[#faf8fc] text-[#0d0c15] rounded-[1.75rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] p-5 sm:p-8 md:p-14 lg:p-20 shadow-[0_25px_70px_rgba(0,0,0,0.5)] border border-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column: Profile Headline & Metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
                [ 01 — PROFILE ]
              </p>

              <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase mb-8 sm:mb-12">
                <span>ABOUT </span>
                <span className="text-rose-600">ME</span>
              </h2>

              <div className="space-y-6 border-t border-zinc-200/80 pt-8">
                <div>
                  <span className="block font-mono text-[11px] tracking-wider text-zinc-400 uppercase">
                    NAME
                  </span>
                  <span className="font-display font-bold text-lg md:text-xl text-zinc-900 uppercase">
                    {PERSONAL_INFO.name}
                  </span>
                </div>

                <div>
                  <span className="block font-mono text-[11px] tracking-wider text-zinc-400 uppercase">
                    LOCATION
                  </span>
                  <span className="font-display font-semibold text-base text-zinc-800">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div>
                  <span className="block font-mono text-[11px] tracking-wider text-zinc-400 uppercase">
                    SPECIALIZATION
                  </span>
                  <span className="font-display font-semibold text-base text-zinc-800">
                    {PERSONAL_INFO.role}
                  </span>
                </div>

                <div>
                  <span className="block font-mono text-[11px] tracking-wider text-zinc-400 uppercase">
                    STATUS
                  </span>
                  <span className="font-display font-semibold text-base text-rose-600">
                    COMPUTING STUDENT / BUILDER
                  </span>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-10 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.cvUrl}
                download={PERSONAL_INFO.cvFileName}
                onClick={(e) => downloadCv(e)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-xs tracking-wider text-white bg-zinc-950 hover:bg-rose-600 transition-colors shadow-lg shadow-black/10 cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => viewCvPdf(e)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-bold text-xs tracking-wider text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-rose-600" />
                <span>VIEW PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio Prose & Structured Skill Grids */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              <p className="text-lg md:text-xl font-body text-zinc-800 leading-relaxed font-normal mb-6">
                I build web and mobile systems from front to back — crafting clean, responsive interfaces with{' '}
                <strong className="font-semibold text-zinc-950">React, TypeScript, and Flutter</strong>, and powering them with{' '}
                <strong className="font-semibold text-zinc-950">ASP.NET Core, Node.js, and SQL</strong> on the server.
              </p>

              <p className="text-sm md:text-base font-body text-zinc-600 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Stack Cards Grid (Matching frame 00:16–00:22 in video) */}
            <div className="space-y-6 pt-4 border-t border-zinc-200/80">
              {/* Category 1: Software Engineer */}
              <div className="bg-zinc-100/90 rounded-2xl p-6 border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-rose-600" />
                  <span className="font-mono text-xs font-bold tracking-widest text-zinc-900 uppercase">
                    SOFTWARE & FRONTEND
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Flutter', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-white border border-zinc-200/80 text-xs font-medium text-zinc-800 shadow-2xs"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Category 2: Backend & Databases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-100/90 rounded-2xl p-5 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="w-4 h-4 text-rose-600" />
                    <span className="font-mono text-xs font-bold tracking-widest text-zinc-900 uppercase">
                      BACKEND & DATA
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['ASP.NET Core', 'C#', 'Node.js', 'Express', 'SQL Server', 'MySQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white border border-zinc-200/80 text-[11px] font-medium text-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category 3: Hardware & Creative */}
                <div className="bg-zinc-100/90 rounded-2xl p-5 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-rose-600" />
                    <span className="font-mono text-xs font-bold tracking-widest text-zinc-900 uppercase">
                      HARDWARE & VIDEO
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['ESP32', 'Arduino C++', 'Sensors & I2C', 'TikTok Video', 'Content Pacing'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white border border-zinc-200/80 text-[11px] font-medium text-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
