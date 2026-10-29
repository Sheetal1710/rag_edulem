import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { ResumeSection } from './components/ResumeSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BlogModal } from './components/BlogModal';
import { ResumeModal } from './components/ResumeModal';
import { ChatBot } from './components/ChatBot';
import { Project, BlogPost } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'resume', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e2e8f0] font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      {/* Subtle global ambient frosted glass background glows */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-30 z-0" />
      <div className="fixed top-[-10%] left-[15%] w-[500px] sm:w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[35%] right-[5%] w-[450px] sm:w-[600px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] left-[10%] w-[500px] sm:w-[650px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main App Canvas */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Navbar
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Project Gallery Section */}
          <ProjectGallery onSelectProject={(project) => setSelectedProject(project)} />

          {/* Resume & Skills Timeline Section */}
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Blog & Professional Insights Section */}
          <BlogSection onSelectPost={(post) => setSelectedPost(post)} />

          {/* Contact Form Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Resume-grounded chatbot (backend/ FastAPI + FAISS + NVIDIA) */}
      <ChatBot />
    </div>
  );
}
