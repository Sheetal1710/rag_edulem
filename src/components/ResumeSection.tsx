import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Layout,
  Server,
  Cloud,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>(SKILL_CATEGORIES[0].category);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="resume" className="py-20 md:py-28 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <Briefcase className="w-4 h-4" />
              <span>Career Milestones & Capability Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Resume & Experience
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A chronological overview of leadership roles, system scaling challenges tackled, and technical proficiency across modern software engineering stacks.
            </p>
          </div>

          <button
            id="resume-section-open-modal-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] self-start md:self-auto group"
          >
            <FileText className="w-4 h-4" />
            <span>View Full CV & Print</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 2-Column Layout: Work Experience Timeline (Left) & Skills Matrix / Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left: Work Experience Timeline (Col span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <span>Work Experience Timeline</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">7+ Years Industry</span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-10 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-emerald-400 before:via-white/20 before:to-white/5">
              {EXPERIENCES.map((exp, idx) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-slate-950 transition-colors" />
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono font-medium px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 self-start sm:self-auto backdrop-blur-md">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-400 mb-4 flex items-center gap-2">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="text-slate-500">{exp.type}</span>
                    </div>

                    {/* Highlights bullet points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-4">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-400 font-bold text-xs mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono text-slate-300 border border-white/10 backdrop-blur-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Box */}
            <div className="pt-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-teal-400" />
                  <span>Education</span>
                </h3>
              </div>

              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">{edu.institution}</span> — {edu.location}
                  </div>
                  {edu.grade && (
                    <div className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/30 backdrop-blur-md">
                      {edu.grade}
                    </div>
                  )}
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-300 pt-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Technical Skills Matrix & Proficiency (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>Technical Skills Matrix</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">Domain Breakdown</span>
            </div>

            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 gap-2">
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  id={`skill-cat-btn-${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveSkillCategory(cat.category)}
                  className={`flex items-center gap-2 p-3 rounded-2xl text-left text-xs font-semibold transition-all border ${
                    activeSkillCategory === cat.category
                      ? 'bg-white/15 border-white/25 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/[0.07] backdrop-blur-xl'
                  }`}
                >
                  <span className={activeSkillCategory === cat.category ? 'text-emerald-400' : 'text-slate-500'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span className="truncate">{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Skill list with progress bars */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Skill & Experience</span>
                <span>Proficiency</span>
              </div>

              {SKILL_CATEGORIES.find((c) => c.category === activeSkillCategory)?.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      {skill.name}
                      {skill.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Core Specialty" />
                      )}
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                      <span>{skill.experience}</span>
                      <span className="text-emerald-400 font-bold">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-[#050505] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 transition-all duration-700 shadow-[0_0_10px_rgba(52,211,153,0.3)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Architecture Philosophy Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "Simple code scales best. I prioritize maintainable architectures, test coverage, strict type contracts, and zero-downtime deployments over unnecessary complexity."
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-1">
                — {PERSONAL_INFO.name}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
