import React, { useState } from 'react';
import { X, Clock, Calendar, Tag, Share2, Check, Copy, BookOpen, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2500);
  };

  return (
    <div
      id="blog-reader-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="blog-reader-modal-content"
        className="relative w-full max-w-3xl bg-[#050505]/95 border border-white/15 backdrop-blur-3xl rounded-3xl shadow-[0_24px_64px_0_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden text-slate-200 my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#030303]/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              id="blog-modal-share-btn"
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 backdrop-blur-md transition-all"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              id="blog-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/15 transition-all"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Article Header Meta */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold backdrop-blur-md">
                {post.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {post.publishDate}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-emerald-300 text-xs backdrop-blur-md shadow-sm">
                UK
              </div>
              <div>
                <div className="text-xs font-bold text-white">{PERSONAL_INFO.name}</div>
                <div className="text-[11px] text-slate-400">{PERSONAL_INFO.title}</div>
              </div>
            </div>
          </div>

          {/* Cover image if available */}
          <div className="rounded-2xl overflow-hidden bg-[#030303] border border-white/10 max-h-72">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Intro statement */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border-l-4 border-emerald-400 border-y border-r border-white/10 text-sm sm:text-base text-slate-200 leading-relaxed italic backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            "{post.content.intro}"
          </div>

          {/* Article Sections */}
          <div className="space-y-8">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {section.body}
                </p>

                {/* Key takeaways box */}
                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 backdrop-blur-xl">
                    <div className="text-xs font-mono font-bold uppercase text-emerald-400">
                      Key Takeaways
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {section.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Code snippet block */}
                {section.codeSnippet && (
                  <div className="rounded-2xl bg-[#030303] border border-white/10 overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] border-b border-white/10 text-xs font-mono text-slate-400">
                      <span>{section.codeSnippet.language}</span>
                      <button
                        onClick={() => handleCopyCode(section.codeSnippet!.code, idx)}
                        className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
                      >
                        {copiedCodeIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px] font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 backdrop-blur-xl">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
              Final Thoughts
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-xl bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/10 backdrop-blur-md"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Bottom footer */}
        <div className="p-4 sm:p-5 bg-[#030303]/90 border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 font-mono">
            Published by {PERSONAL_INFO.name}
          </span>
          <button
            id="blog-modal-bottom-close-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
