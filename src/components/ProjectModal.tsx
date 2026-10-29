import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl bg-[#050505]/95 border border-white/15 backdrop-blur-3xl rounded-3xl shadow-[0_24px_64px_0_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden text-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-56 sm:h-72 w-full bg-[#030303] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          
          {/* Close button */}
          <button
            id="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/15 backdrop-blur-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges in image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono bg-[#050505]/80 text-slate-300 border border-white/10 backdrop-blur-md">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  id="project-modal-demo-btn"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  id="project-modal-github-btn"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 backdrop-blur-xl transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-emerald-400 font-medium text-sm mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Metrics bar if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Overview & Problem Statement
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Key Capabilities & Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="text-emerald-400 font-bold text-xs mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                Architectural Highlights
              </h4>
              <div className="space-y-1.5">
                {project.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-300">
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl bg-white/[0.04] text-xs font-mono font-medium text-emerald-300 border border-white/10 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#030303] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Designed & Engineered by Umashankar K H
          </span>
          <button
            id="project-modal-footer-close-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
