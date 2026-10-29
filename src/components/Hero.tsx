import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  Layers, 
  Terminal, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, FEATURED_TECH } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-emerald-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Title, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status pill badge */}
            <div 
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-xs font-medium text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.availability}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Name & Main Heading */}
            <div className="space-y-3">
              <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase font-mono">
                Hello, my name is
              </div>
              <h1 
                id="hero-developer-name"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/10 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume & Experience</span>
              </button>

              <a
                id="hero-contact-button"
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Email Copy */}
            <div className="pt-4 border-t border-white/10 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Connect:</span>
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.platform}
                      id={`hero-social-${item.platform.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.platform}
                      className="p-2.5 rounded-xl bg-white/[0.04] text-slate-400 hover:text-emerald-400 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all"
                    >
                      {getSocialIcon(item.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct email click-to-copy */}
              <button
                id="hero-copy-email-chip"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/10 backdrop-blur-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="flex items-center gap-1 text-emerald-400 font-sans font-medium text-[11px]">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Tech Architecture & Stats Box */}
          <div className="lg:col-span-5">
            <div 
              id="hero-tech-card"
              className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 sm:p-7 shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden"
            >
              {/* Subtle top reflection */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Terminal header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">engineer@umashankar-kh:~$</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Developer stats grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.yearsOfExperience}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Years Industry Exp
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                    {PERSONAL_INFO.projectsCompleted}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Shipped Projects
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">
                    {PERSONAL_INFO.contributions}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Git Commits & PRs
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 tracking-tight">
                    {PERSONAL_INFO.satisfactionRate}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Reliability / SLA
                  </div>
                </div>
              </div>

              {/* Core capabilities list */}
              <div className="space-y-2.5 mb-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Competencies</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Distributed Systems & High-Load Microservices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full-Stack React, Next.js & Modern TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Kubernetes, Cloud Infrastructure & DevOps CI/CD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Generative AI Pipelines & LLM Tool Chaining</span>
                  </div>
                </div>
              </div>

              {/* Featured tech chips */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-teal-400" />
                  <span>Tech Stack Snapshot</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_TECH.slice(0, 8).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300 hover:text-white hover:border-emerald-400/40 transition-colors"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
