import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Full-Stack Project Collaboration',
    budget: '$5k - $15k',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const subjectOptions = [
    'Full-Stack Project Collaboration',
    'Cloud / DevOps Architecture Consulting',
    'Full-Time / Contract Engineering Role',
    'Technical Advisory / Mentorship',
    'General Inquiry / Say Hello',
  ];

  const budgetOptions = [
    'Under $5k',
    '$5k - $15k',
    '$15k - $50k',
    '$50k+',
    'Hourly / Retainer',
    'Not Applicable',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address so I can reply to you.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please write a brief message (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'Full-Stack Project Collaboration',
      budget: '$5k - $15k',
      message: '',
    });
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
    <section id="contact" className="py-20 md:py-28 relative bg-[#050505] border-t border-white/10">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            <Mail className="w-4 h-4" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Let's Build Something Impactful Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Have an engineering challenge, an ambitious new project, or an opportunity? Reach out directly via the form below or drop an email to <span className="text-emerald-400 font-mono">{PERSONAL_INFO.email}</span>.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Cards, Direct Email, Socials & Timezone Info (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 backdrop-blur-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-white/[0.04] hover:bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  id="contact-mailto-link-btn"
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="px-4 py-2.5 rounded-2xl text-xs font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                >
                  <span>Open Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Location & Working Hours
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Typical Response Time: &lt; 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Timezone: IST (UTC +5:30) • Flexible for US/EU overlaps</span>
                </div>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Social Profiles & Repositories
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.platform}
                    id={`contact-social-link-${item.platform.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-xl transition-all text-xs font-medium text-slate-300 hover:text-white"
                  >
                    <span className="text-emerald-400">{getSocialIcon(item.icon)}</span>
                    <span className="truncate">{item.platform}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              
              {submitted ? (
                /* Success State */
                <div id="contact-form-success" className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto backdrop-blur-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your message regarding <span className="text-emerald-400 font-medium">"{formData.subject}"</span> has been received. I will review the details and follow up at <span className="text-white font-mono">{formData.email}</span> shortly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      id="contact-send-another-btn"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-2xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form id="contact-portfolio-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-emerald-400" />
                      <span>Send a Direct Message</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">to {PERSONAL_INFO.name}</span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-2xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2 backdrop-blur-md">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-input-name" className="block text-xs font-semibold text-slate-300">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        required
                        className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-emerald-400/30 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-input-email" className="block text-xs font-semibold text-slate-300">
                        Your Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        required
                        className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-emerald-400/30 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                      />
                    </div>
                  </div>

                  {/* Subject and Budget Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-select-subject" className="block text-xs font-semibold text-slate-300">
                        Project / Discussion Topic
                      </label>
                      <select
                        id="contact-select-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-xs text-white focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-emerald-400/30 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#050505] text-slate-200">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-select-budget" className="block text-xs font-semibold text-slate-300">
                        Estimated Scope / Budget
                      </label>
                      <select
                        id="contact-select-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-xs text-white focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-emerald-400/30 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#050505] text-slate-200">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-input-message" className="block text-xs font-semibold text-slate-300">
                        Your Message <span className="text-emerald-400">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-slate-500">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-input-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your product goals, technical stack, timeline, or role requirements..."
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-emerald-400/30 transition-all leading-relaxed resize-y shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-[11px] text-slate-500">
                      Replies typically within 24 hours to your email.
                    </div>

                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
