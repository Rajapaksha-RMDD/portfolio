import React from 'react';
import { Eye, SplitSquareVertical, Tv, Activity, PlayCircle, X } from 'lucide-react';
import { ViewMode } from '../types';

interface ScrubModeControllerProps {
  isOpen: boolean;
  onClose: () => void;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  videoOpacity: number;
  onChangeVideoOpacity: (val: number) => void;
  stats: {
    current: number;
    target: number;
    duration: number;
    progress: number;
    reducedMotion: boolean;
  };
}

export const ScrubModeController: React.FC<ScrubModeControllerProps> = ({
  isOpen,
  onClose,
  viewMode,
  onChangeViewMode,
  videoOpacity,
  onChangeVideoOpacity,
  stats,
}) => {
  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(2);
    return `${mins < 10 ? '0' : ''}${mins}:${parseFloat(secs) < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-[#0c0b16]/95 border border-zinc-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-fadeIn text-white font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-rose-500" />
          <span className="font-bold tracking-wider uppercase text-zinc-200">
            Scroll Scrub Engine
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
          title="Close HUD"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="my-4 p-3 rounded-xl bg-black/60 border border-zinc-800 space-y-2">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-zinc-500">Page Progress:</span>
          <span className="text-rose-400 font-bold">
            {(stats.progress * 100).toFixed(1)}%
          </span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-zinc-500">Video Current / Target:</span>
          <span className="text-zinc-200 tabular-nums">
            {formatTime(stats.current)} / {formatTime(stats.target)}
          </span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-zinc-500">Total Duration:</span>
          <span className="text-zinc-400 tabular-nums">{formatTime(stats.duration)}</span>
        </div>
        <div className="flex justify-between items-center text-[10px] pt-1 border-t border-zinc-800/80 text-zinc-500">
          <span>Formula:</span>
          <span className="text-zinc-400">current += (target - current) * (1 - e^(-dt*8))</span>
        </div>
        {stats.reducedMotion && (
          <div className="text-[10px] text-amber-400 bg-amber-950/40 px-2 py-1 rounded border border-amber-800/50">
            Reduced motion detected: frozen on frame 0
          </div>
        )}
      </div>

      <div className="space-y-2">
        <span className="text-[10px] tracking-wider text-zinc-400 uppercase block">
          Display Layout:
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => onChangeViewMode('portfolio')}
            className={`py-2 px-2.5 rounded-lg text-[11px] text-left transition-colors flex items-center gap-1.5 ${
              viewMode === 'portfolio'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive</span>
          </button>

          <button
            onClick={() => onChangeViewMode('video-backdrop')}
            className={`py-2 px-2.5 rounded-lg text-[11px] text-left transition-colors flex items-center gap-1.5 ${
              viewMode === 'video-backdrop'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Backdrop Scrub</span>
          </button>

          <button
            onClick={() => onChangeViewMode('pure-video')}
            className={`py-2 px-2.5 rounded-lg text-[11px] text-left transition-colors flex items-center gap-1.5 ${
              viewMode === 'pure-video'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5" />
            <span>Pure Video</span>
          </button>

          <button
            onClick={() => onChangeViewMode('split-view')}
            className={`py-2 px-2.5 rounded-lg text-[11px] text-left transition-colors flex items-center gap-1.5 ${
              viewMode === 'split-view'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Side-by-Side</span>
          </button>
        </div>
      </div>

      {(viewMode === 'video-backdrop' || viewMode === 'portfolio') && (
        <div className="mt-4 pt-3 border-t border-zinc-800">
          <div className="flex justify-between items-center text-[10px] text-zinc-400 mb-1.5">
            <span>Video Backdrop Opacity:</span>
            <span className="text-white">{Math.round(videoOpacity * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={videoOpacity}
            onChange={(e) => onChangeVideoOpacity(parseFloat(e.target.value))}
            className="w-full accent-rose-600 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
          />
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-zinc-800">
        <a
          href="./dasindu-rajapaksha-portfolio.zip"
          download="dasindu-rajapaksha-portfolio.zip"
          className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-rose-600 border border-zinc-700 hover:border-rose-500 text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition-all text-xs font-mono"
        >
          <span>Download Project ZIP</span>
          <span className="text-rose-400 text-[10px]">(.zip)</span>
        </a>
      </div>
    </div>
  );
};
