import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f0e1c] border border-zinc-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/40 border border-rose-500/20">
              {project.visualTag}
            </span>
            <span className="font-mono text-xs text-zinc-500">PROJECT {project.number}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {project.title}
          </h3>

          <p className="text-zinc-300 font-body text-base leading-relaxed">
            {project.longDescription}
          </p>

          {/* Key Architecture Highlights */}
          <div className="bg-[#141224] rounded-2xl p-6 border border-zinc-800 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-rose-500" />
              <span>Key Architecture Highlights</span>
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Chips */}
          <div>
            <span className="block font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs tracking-wider transition-colors shadow-lg shadow-rose-900/20"
            >
              <Github className="w-4 h-4" />
              <span>OPEN GITHUB REPOSITORY</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-zinc-500">Commercial / Internal Build</span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
