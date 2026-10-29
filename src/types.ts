export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Cloud & DevOps' | 'AI & Data' | 'Frontend/UI';
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  architectureHighlights?: string[];
  year: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    featured?: boolean;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Architecture' | 'Frontend' | 'Cloud & DevOps' | 'Engineering';
  publishDate: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
      };
      keyPoints?: string[];
    }[];
    conclusion: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
}
