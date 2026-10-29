import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, Mail, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.title}**
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}

## Summary
${PERSONAL_INFO.fullBio}

## Experience
${EXPERIENCES.map(
  (e) => `### ${e.role} — ${e.company} (${e.period})
* ${e.highlights.join('\n* ')}
* **Tech**: ${e.skills.join(', ')}`
).join('\n\n')}

## Education
${EDUCATION.map(
  (edu) => `### ${edu.degree}
${edu.institution} (${edu.period}) — ${edu.grade || ''}
* ${edu.highlights.join('\n* ')}`
).join('\n\n')}

## Skills
${SKILL_CATEGORIES.map(
  (cat) => `* **${cat.category}**: ${cat.skills.map((s) => s.name).join(', ')}`
).join('\n')}
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-sheet"
        className="relative w-full max-w-4xl bg-[#050505]/95 border border-white/15 backdrop-blur-3xl rounded-3xl shadow-[0_24px_64px_0_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden text-slate-200 my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="p-4 sm:p-5 bg-[#030303]/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
            <h3 className="text-sm font-semibold text-white tracking-tight">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-copy-md-btn"
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 backdrop-blur-md transition-all"
              title="Copy resume as clean Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.3)]"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white border border-white/15 transition-all ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="printable-resume-content" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#050505] text-slate-300">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-emerald-400 font-semibold text-sm sm:text-base mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>
            <div className="text-xs space-y-1 text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-300 underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/10 pb-1">
              Executive Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.fullBio}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/10 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>Professional Work Experience</span>
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-base">{exp.role}</span>
                      <span className="text-slate-400 text-sm"> — {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/30 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-slate-300 border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/10 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
              <span>Education & Certifications</span>
            </h2>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="text-slate-400 text-xs"> — {edu.institution}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>
                {edu.grade && <div className="text-xs text-emerald-400 font-medium">{edu.grade}</div>}
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-400">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/10 pb-1 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              <span>Skills Matrix</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 backdrop-blur-xl">
                  <div className="text-xs font-bold text-emerald-400 font-mono">{cat.category}</div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
