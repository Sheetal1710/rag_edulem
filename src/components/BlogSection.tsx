import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Search, 
  Sparkles,
  Tag,
  ArrowUpRight
} from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Architecture', 'Frontend', 'Cloud & DevOps'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="blog" className="py-20 md:py-28 relative bg-[#050505]/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <BookOpen className="w-4 h-4" />
              <span>Engineering Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Insights & Articles
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              In-depth articles covering real-time systems, React 19 internals, Kubernetes cloud orchestration, and enterprise software craftsmanship.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 self-start md:self-auto text-xs font-mono text-slate-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span>Showing:</span>
            <span className="text-emerald-400 font-bold">{filteredPosts.length}</span>
            <span>Articles</span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-white/15 border border-white/20 text-white font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="blog-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic..."
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-emerald-400/30 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                id={`blog-card-${post.id}`}
                className="group relative flex flex-col rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-2xl border border-white/10 hover:border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => onSelectPost(post)}
              >
                {/* Cover Image */}
                <div className="relative h-48 w-full bg-[#030303] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-95" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-xl text-[11px] font-semibold bg-[#050505]/75 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-300 font-mono bg-[#050505]/75 px-3 py-1 rounded-xl backdrop-blur-md border border-white/10">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{post.publishDate}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono text-slate-400 border border-white/10 backdrop-blur-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Read Action */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
                      Read Full Article
                    </span>
                    <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-emerald-400 group-hover:text-slate-950 group-hover:border-emerald-400 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-3">
            <p className="text-slate-300 font-medium">No articles found matching your query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
