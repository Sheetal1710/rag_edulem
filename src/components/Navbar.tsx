import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Blog & Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          id="navbar-brand-logo"
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-emerald-400 font-extrabold text-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] group-hover:scale-105 group-hover:border-emerald-400/40 transition-all">
            UK
          </div>
          <div>
            <div className="font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for projects</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/15 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="navbar-view-resume-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:text-white transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </button>
          
          <a
            id="navbar-contact-cta"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-resume-quick-btn"
            onClick={onOpenResumeModal}
            aria-label="View Resume"
            className="p-2 rounded-xl text-slate-300 bg-white/5 backdrop-blur-xl border border-white/10 hover:text-white"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-slate-300 bg-white/5 backdrop-blur-xl border border-white/10 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <nav className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/15 border border-white/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                id="mobile-menu-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Full Resume</span>
              </button>

              <a
                id="mobile-menu-contact-btn"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
