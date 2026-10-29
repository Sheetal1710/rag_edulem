import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, ExternalLink, Code } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <footer id="portfolio-footer" className="bg-[#030303] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand and Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-emerald-400 font-extrabold text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                UK
              </div>
              <span className="font-bold text-white text-base">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {PERSONAL_INFO.title}. Specializing in modern scalable cloud applications, distributed systems, and real-time frontend engineering.
            </p>
            <div className="text-emerald-400 font-mono text-xs">
              {PERSONAL_INFO.email}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About & Focus</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#resume" className="hover:text-emerald-400 transition-colors">Resume & Experience</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">Technical Insights</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Socials & Resume CTA */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Connect & Profile
            </div>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.platform}
                  id={`footer-social-${item.platform.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className="p-2.5 rounded-xl bg-white/[0.04] text-slate-400 hover:text-emerald-400 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition-all"
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>

            <div className="pt-1">
              <button
                id="footer-view-resume-btn"
                onClick={onOpenResumeModal}
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4 decoration-emerald-500/60 transition-colors"
              >
                View Printable Curriculum Vitae →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono text-[11px]">
              Frosted Glass Theme • TypeScript & Tailwind CSS
            </span>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-400 hover:text-emerald-400 border border-white/10 backdrop-blur-xl transition-all flex items-center gap-1.5"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
