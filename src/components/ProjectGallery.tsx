import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Github, 
  Maximize2, 
  Sparkles, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full Stack', 'Cloud & DevOps', 'AI & Data', 'Frontend/UI'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#050505]/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore selected projects spanning distributed microservices, AI pipelines, headless web engines, and real-time collaboration platforms.
            </p>
          </div>

          {/* Quick stats counter */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 self-start md:self-auto text-xs font-mono text-slate-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span>Showing:</span>
            <span className="text-emerald-400 font-bold">{filteredProjects.length}</span>
            <span>of</span>
            <span className="text-white font-bold">{PROJECTS.length}</span>
            <span>Projects</span>
          </div>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-x-auto shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
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
              id="project-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, tag, or tech..."
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

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative flex flex-col rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-2xl border border-white/10 hover:border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden"
              >
                {/* Project Image Box with Hover Overlay */}
                <div className="relative h-48 sm:h-52 w-full bg-[#030303] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-95" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-xl text-[11px] font-semibold bg-[#050505]/75 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-xl text-[11px] font-mono bg-[#050505]/75 text-slate-300 border border-white/10 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Quick Detail Click Button overlay */}
                  <button
                    id={`project-quick-view-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-[#050505]/80 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 border border-white/15 backdrop-blur-md transition-colors opacity-90 group-hover:opacity-100"
                    title="View Full Architecture Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics snapshot if available */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-[11px]">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="px-2">
                          <span className="text-slate-400 font-medium">{m.label}: </span>
                          <span className="text-emerald-300 font-mono font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-white/[0.03] text-[10px] font-mono text-slate-500 border border-white/5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      id={`project-details-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          id={`project-github-link-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/10 border border-white/10 transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          id={`project-demo-link-${project.id}`}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-400 hover:text-emerald-400 bg-white/[0.03] hover:bg-white/10 border border-white/10 transition-colors"
                          title="Open Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 space-y-3">
            <Filter className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-slate-200 font-medium">No projects matched your criteria.</p>
            <p className="text-xs text-slate-500">Try changing the category filter or clearing your search term.</p>
            <button
              id="project-reset-filters-btn"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
