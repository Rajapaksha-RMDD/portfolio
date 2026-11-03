import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PROJECTS, MORE_REPOSITORIES } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showMore, setShowMore] = useState(false);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'mobile', label: 'MOBILE & FLUTTER' },
    { id: 'fullstack', label: 'FULL-STACK SYSTEMS' },
    { id: 'iot', label: 'IOT & EMBEDDED' },
  ];

  return (
    <section id="projects" className="relative z-20 py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
            [ SELECTED BUILDS ]
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tight uppercase leading-none">
            <span>ARCHIVED </span>
            <span className="text-rose-600">WORKS</span>
          </h2>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#0e0d18] border border-zinc-800/90 hover:border-rose-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(225,29,72,0.12)] hover:-translate-y-1"
          >
            <div>
              <div
                className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 flex flex-col justify-between p-5 border border-white/5"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColors.from} 0%, ${project.accentColors.to} 100%)`,
                }}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-black/40 backdrop-blur-md text-zinc-300 border border-white/10">
                    {project.visualTag}
                  </span>
                  <span className="font-display font-extrabold text-2xl text-white/40 group-hover:text-white/80 transition-colors">
                    {project.number}
                  </span>
                </div>

                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-end justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-zinc-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white transition-colors border border-white/10"
                    title="Inspect details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-rose-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm font-body leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between gap-4">
              <button
                onClick={() => onSelectProject(project)}
                className="text-xs font-mono tracking-wider text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
              >
                <span>VIEW CASE DETAILS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 p-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPO</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-800 hover:border-rose-500 bg-zinc-900/60 hover:bg-zinc-900 text-xs font-mono tracking-widest text-zinc-300 hover:text-white transition-all shadow-lg"
        >
          <span>{showMore ? 'HIDE EXTRA REPOSITORIES' : 'LOAD MORE EXPERIENCE'}</span>
          <ChevronDown
            className={`w-4 h-4 text-rose-500 transition-transform duration-300 ${
              showMore ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showMore && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left animate-fadeIn">
            {MORE_REPOSITORIES.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#0d0c17] border border-zinc-800/80 hover:border-rose-500/50 hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider text-rose-400 uppercase">
                      {repo.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-rose-400 transition-colors" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {repo.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-body">
                    {repo.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center justify-between text-zinc-500 text-[11px] font-mono">
                  <span>GitHub Repository</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
