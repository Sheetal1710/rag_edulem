import { Project, ExperienceItem, EducationItem, SkillCategory, BlogPost, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Umashankar K H',
  title: 'Lead Full-Stack Engineer & Cloud Solutions Architect',
  shortBio: 'Building high-performance web applications, scalable distributed backends, and AI-enabled software systems with modern TypeScript, React, Node.js, and Cloud Infrastructure.',
  fullBio: `I am a dedicated software engineer and cloud systems specialist with over 7+ years of experience designing and shipping enterprise-grade digital products. My core focus spans performant web architectures, resilient microservices, high-throughput APIs, and intuitive user experiences.

I thrive at the intersection of robust backend engineering and thoughtful frontend craftsmanship. Whether orchestrating Kubernetes workloads, architecting real-time event-driven systems, or refining client-side interfaces down to the millisecond, I am passionate about delivering software that scales reliably and delights users.`,
  email: 'umashankarkh@email.com',
  location: 'Bangalore, India (Open to Worldwide Remote)',
  availability: 'Available for Select Projects & Roles',
  yearsOfExperience: '7+',
  projectsCompleted: '35+',
  contributions: '1,200+',
  satisfactionRate: '99.4%',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  resumeUrl: '#',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/umashankarkh',
    icon: 'Github',
    username: '@umashankarkh',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/umashankarkh',
    icon: 'Linkedin',
    username: 'in/umashankarkh',
  },
  {
    platform: 'Twitter / X',
    url: 'https://x.com/umashankarkh',
    icon: 'Twitter',
    username: '@umashankarkh',
  },
  {
    platform: 'Email',
    url: 'mailto:umashankarkh@email.com',
    icon: 'Mail',
    username: 'umashankarkh@email.com',
  },
];

export const FEATURED_TECH = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React 19', category: 'Frontend' },
  { name: 'Next.js / Vite', category: 'Framework' },
  { name: 'Node.js & Express', category: 'Backend' },
  { name: 'Go (Golang)', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker & K8s', category: 'Cloud/DevOps' },
  { name: 'AWS & GCP', category: 'Cloud' },
  { name: 'GraphQL & REST', category: 'API' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Gemini & AI SDKs', category: 'AI/ML' },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'CloudMesh - Distributed Observability Platform',
    tagline: 'High-throughput telemetry and metrics pipeline processing 50k+ events/sec with zero drop rate.',
    category: 'Cloud & DevOps',
    description: 'An enterprise-scale microservices observability dashboard providing live trace analytics, anomaly detection, and automated incident triage for Kubernetes clusters.',
    fullDescription: `CloudMesh was designed to solve multi-cluster observability bottlenecks for modern cloud-native infrastructures. Built with an event-driven Go ingestion engine and a lightning-fast React visualization suite, CloudMesh ingests OpenTelemetry traces and Prometheus metrics in real-time, executing continuous anomaly detection algorithms to identify latency degradation before users notice.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'React', 'Go', 'Kubernetes', 'Prometheus', 'TailwindCSS', 'WebSockets'],
    features: [
      'Real-time WebSocket streaming telemetry viewer with sub-50ms latency',
      'Dynamic topology dependency graph rendering with interactive node drill-downs',
      'Automated root-cause analysis scoring for cluster service crashes',
      'Custom alert rules engine integrated with Slack and PagerDuty',
    ],
    metrics: [
      { label: 'Event Ingestion', value: '50k+/sec' },
      { label: 'Query Latency', value: '< 120ms' },
      { label: 'Uptime SLA', value: '99.98%' },
    ],
    demoUrl: 'https://example.com/demo/cloudmesh',
    githubUrl: 'https://github.com/umashankarkh/cloudmesh-core',
    architectureHighlights: [
      'Distributed Kafka buffer layer with partitioned Go worker pools',
      'TimescaleDB time-series storage with automated retention tiering',
      'Virtual canvas rendering for handling 10,000+ simultaneous nodes',
    ],
    year: '2025',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Synthetix AI - Multimodal Workflow Automation',
    tagline: 'Collaborative node-based canvas for chaining LLMs, vector search, and API actions seamlessly.',
    category: 'AI & Data',
    description: 'An interactive canvas application enabling engineering teams to orchestrate Gemini AI pipelines, embed semantic vector search, and deploy webhook automations without boilerplate.',
    fullDescription: `Synthetix AI bridges the gap between raw generative AI models and real business workflows. Users can visually wire together prompt templates, structured output validators, vector embeddings databases, and external third-party APIs into resilient automated jobs with branch evaluation and human-in-the-loop validation checkpoints.`,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Gemini AI', 'FastAPI', 'Pinecone', 'Node.js', 'TailwindCSS'],
    features: [
      'Interactive infinite-canvas node graph editor with drag-and-drop connectors',
      'Live prompt testing sandbox with temperature & token tuning previews',
      'Integrated vector database browser with instant semantic similarity scoring',
      'One-click serverless endpoint compilation for deployed pipelines',
    ],
    metrics: [
      { label: 'Pipelines Built', value: '12,000+' },
      { label: 'Execution Speedup', value: '3.4x' },
      { label: 'Dev Time Saved', value: '45%' },
    ],
    demoUrl: 'https://example.com/demo/synthetix',
    githubUrl: 'https://github.com/umashankarkh/synthetix-engine',
    architectureHighlights: [
      'DAG topological sorting algorithm for deterministic node execution',
      'Server-Sent Events (SSE) for streaming model tokens to canvas nodes',
      'Optimistic UI state with IndexedDB local caching',
    ],
    year: '2025',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Apex Commerce - Headless Multi-Tenant Engine',
    tagline: 'High-speed headless e-commerce store with edge-rendered storefronts and unified inventory.',
    category: 'Full Stack',
    description: 'A modular, high-conversion headless e-commerce platform built with modern React, GraphQL, and Redis edge caching, supporting 10,000+ simultaneous checkouts.',
    fullDescription: `Apex Commerce provides global brands with sub-second page loads, localization, and omnichannel inventory management. Engineered from scratch with a micro-frontend architecture, it delivers 100/100 Google Lighthouse performance scores and dynamic pricing computation.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Stripe', 'Redis', 'TailwindCSS'],
    features: [
      'Multi-currency, localized storefront with instantaneous static-edge hydration',
      'Optimistic cart checkout flow with fraud detection rules',
      'Unified merchant command center with real-time sales & inventory streams',
      'Dynamic promotion builder with complex conditional rule sets',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Checkout Conversion', value: '+28%' },
      { label: 'Avg TTFB', value: '42ms' },
    ],
    demoUrl: 'https://example.com/demo/apex-commerce',
    githubUrl: 'https://github.com/umashankarkh/apex-commerce-stack',
    architectureHighlights: [
      'Redis distributed lock mechanism to eliminate race conditions on low-stock items',
      'Stripe Elements custom embedded payment with automated webhooks verification',
    ],
    year: '2024',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'PulseStack - Real-Time Collaborative Workspace',
    tagline: 'Collaborative rich-text and document editor with CRDT-backed real-time multi-cursor sync.',
    category: 'Frontend/UI',
    description: 'A distraction-free knowledge base and workspace supporting concurrent live multi-user editing, nested blocks, and offline sync using conflict-free replicated data types.',
    fullDescription: `PulseStack delivers a seamless Notion-like documentation experience with zero merge conflicts. Built with Yjs CRDTs over WebSockets, users can collaborate in real-time with live presence avatars, comment threads, code execution playgrounds, and instant markdown export.`,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'WebSockets', 'Yjs CRDT', 'TailwindCSS', 'WebWorkers'],
    features: [
      'Conflict-free multi-user document collaboration with colored user carets',
      'Rich block-based document parser with support for 25+ block types',
      'Offline-first synchronization with automatic conflict resolution',
      'End-to-end encrypted team workspace vaults',
    ],
    metrics: [
      { label: 'Sync Latency', value: '< 25ms' },
      { label: 'Concurrent Users', value: '500+/doc' },
    ],
    demoUrl: 'https://example.com/demo/pulsestack',
    githubUrl: 'https://github.com/umashankarkh/pulsestack-editor',
    architectureHighlights: [
      'Yjs CRDT state trees synced via custom Node.js binary WebSocket protocol',
      'WebWorker background indexing for instant fuzzy workspace search',
    ],
    year: '2024',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'Vanguard SecOps - Automated Security Vulnerability Scanner',
    tagline: 'Continuous container image and dependency audit engine with automated patch PR generation.',
    category: 'Cloud & DevOps',
    description: 'DevSecOps CLI and cloud dashboard that inspects container registries, SBOMs, and npm/pip lockfiles to automatically draft pull requests resolving CVEs.',
    fullDescription: `Vanguard SecOps integrates directly into CI/CD pipelines to protect modern microservices. It scans Docker images and infrastructure-as-code scripts against the latest CVE databases, providing risk prioritization scores and generating pull requests that upgrade dependencies safely.`,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Go', 'TypeScript', 'Docker', 'GitHub Actions', 'Security', 'PostgreSQL'],
    features: [
      'Automated static and dynamic vulnerability analysis for Docker containers',
      'One-click automated GitHub pull request generation for CVE patches',
      'Executive compliance reports for SOC2 and ISO 27001 readiness',
      'Slack bot alerting with severity grading and exploit assessment',
    ],
    metrics: [
      { label: 'Vulnerabilities Fixed', value: '45,000+' },
      { label: 'Scan Duration', value: '< 15s' },
    ],
    demoUrl: 'https://example.com/demo/vanguard',
    githubUrl: 'https://github.com/umashankarkh/vanguard-secops',
    year: '2023',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'FinSight - Algorithmic Portfolio Analytics',
    tagline: 'Institutional-grade asset allocation backtesting and risk modeling platform.',
    category: 'Full Stack',
    description: 'Quantitative investment modeling platform performing Monte Carlo simulations, Sharpe ratio optimizations, and real-time market data visual streaming.',
    fullDescription: `FinSight equips portfolio managers with interactive statistical modeling. Featuring WebAssembly-accelerated math kernels, it performs 10,000-path Monte Carlo simulations directly in the browser while maintaining a responsive 60fps chart rendering experience.`,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'React', 'Python', 'WebAssembly', 'D3.js', 'TailwindCSS'],
    features: [
      'Interactive Monte Carlo asset simulation engine powered by WebAssembly',
      'Multi-factor risk attribution & Value at Risk (VaR) calculations',
      'Real-time financial chart renderer with technical indicators',
      'Automated rebalancing trade recommendations engine',
    ],
    metrics: [
      { label: 'Simulation Speed', value: '10k paths / 1.2s' },
      { label: 'Render FPS', value: '60 FPS' },
    ],
    demoUrl: 'https://example.com/demo/finsight',
    githubUrl: 'https://github.com/umashankarkh/finsight-quant',
    year: '2023',
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Staff / Lead Software Engineer',
    company: 'Nexus Cloud Systems',
    companyUrl: 'https://example.com',
    location: 'Bangalore / Hybrid',
    period: '2022 - Present',
    type: 'Full-time',
    highlights: [
      'Architected distributed microservices platform handling 100M+ monthly API requests with 99.99% availability.',
      'Led a high-velocity engineering team of 12 full-stack and cloud developers across 4 time zones.',
      'Reduced cloud infrastructure costs by 34% through automated autoscaling, Kubernetes spot instances, and optimized caching tiers.',
      'Championed modern TypeScript adoption and established company-wide design system standards and CI/CD pipelines.',
    ],
    skills: ['TypeScript', 'Go', 'React', 'Kubernetes', 'AWS', 'PostgreSQL', 'System Design'],
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Engineer',
    company: 'Stratum Technologies',
    companyUrl: 'https://example.com',
    location: 'Bangalore, India',
    period: '2020 - 2022',
    type: 'Full-time',
    highlights: [
      'Built and scaled enterprise SaaS data visualization dashboards serving over 50,000 active business users.',
      'Engineered real-time collaboration engines using WebSockets and Redis Pub/Sub, dropping latency from 450ms to 35ms.',
      'Authored comprehensive test suites (unit, integration, e2e) increasing code coverage from 55% to 92%.',
      'Mentored 8 junior and mid-level engineers through code reviews, architecture RFCs, and pairing sessions.',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Redis', 'Docker', 'TailwindCSS'],
  },
  {
    id: 'exp-3',
    role: 'Software Development Engineer',
    company: 'Cognitive Matrix Labs',
    companyUrl: 'https://example.com',
    location: 'Bangalore, India',
    period: '2018 - 2020',
    type: 'Full-time',
    highlights: [
      'Developed responsive single-page web applications and RESTful APIs for global fintech and analytics clients.',
      'Spearheaded performance optimization efforts, cutting bundle size by 48% and boosting Lighthouse SEO/Performance to 95+.',
      'Implemented automated database migration tooling and blue-green zero-downtime deployment pipelines.',
    ],
    skills: ['JavaScript / ES6+', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Engineering in Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University (VTU)',
    period: '2014 - 2018',
    grade: 'First Class with Distinction',
    location: 'Karnataka, India',
    highlights: [
      'Specialized in Distributed Systems, Algorithms, and Software Architecture.',
      'Led the University Open Source Club & Hackathon Organizing Committee.',
      'Capstoned project on Decentralized Peer-to-Peer Storage Protocol.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend & UI Craft',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript', level: 96, experience: '7 yrs', featured: true },
      { name: 'React 19 / 18', level: 95, experience: '7 yrs', featured: true },
      { name: 'Next.js / Vite', level: 92, experience: '5 yrs', featured: true },
      { name: 'Tailwind CSS', level: 95, experience: '5 yrs', featured: true },
      { name: 'State Management (Zustand/Redux)', level: 90, experience: '6 yrs' },
      { name: 'Performance & Core Web Vitals', level: 94, experience: '6 yrs' },
      { name: 'WebSockets & Real-Time UI', level: 88, experience: '4 yrs' },
    ],
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js / Express', level: 94, experience: '7 yrs', featured: true },
      { name: 'Go (Golang)', level: 85, experience: '3 yrs', featured: true },
      { name: 'REST & GraphQL APIs', level: 92, experience: '6 yrs', featured: true },
      { name: 'Microservices Architecture', level: 90, experience: '5 yrs' },
      { name: 'Authentication & OAuth2 / JWT', level: 92, experience: '6 yrs' },
      { name: 'gRPC & Protocol Buffers', level: 82, experience: '3 yrs' },
    ],
  },
  {
    category: 'Cloud, DevOps & Data',
    iconName: 'Cloud',
    skills: [
      { name: 'PostgreSQL & SQL', level: 92, experience: '6 yrs', featured: true },
      { name: 'Redis & Caching Strategies', level: 90, experience: '5 yrs', featured: true },
      { name: 'Docker & Containerization', level: 92, experience: '5 yrs', featured: true },
      { name: 'Kubernetes (K8s)', level: 84, experience: '3 yrs' },
      { name: 'AWS & Google Cloud Platform', level: 88, experience: '5 yrs' },
      { name: 'CI/CD (GitHub Actions, ArgoCD)', level: 89, experience: '5 yrs' },
    ],
  },
  {
    category: 'Tools & AI Integrations',
    iconName: 'Cpu',
    skills: [
      { name: 'Gemini & LLM API Integration', level: 88, experience: '2 yrs', featured: true },
      { name: 'Git & Monorepo Tooling (Turborepo)', level: 94, experience: '7 yrs' },
      { name: 'Testing (Jest, Vitest, Playwright)', level: 89, experience: '5 yrs' },
      { name: 'System Design & RFC Authoring', level: 93, experience: '5 yrs' },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Architecting Resilient Real-Time Web Applications at Scale',
    slug: 'architecting-resilient-realtime-web-apps',
    summary: 'Lessons learned building low-latency WebSocket clusters with horizontal Redis pub/sub backplanes and optimistic client reconciliation.',
    category: 'Architecture',
    publishDate: 'August 14, 2026',
    readTime: '6 min read',
    tags: ['WebSockets', 'Architecture', 'TypeScript', 'Redis', 'Scaling'],
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'When scaling real-time interactive apps beyond a single node, naive WebSocket implementations quickly hit connection saturation, state fragmentation, and erratic message sequencing. Here is the architectural blueprint we implemented to handle 100,000+ simultaneous connections with sub-30ms latency.',
      sections: [
        {
          heading: '1. The Problem with Single-Node Stateful Connections',
          body: 'HTTP requests are stateless by nature, making horizontal scaling behind load balancers trivial. WebSockets, on the other hand, maintain long-lived TCP sockets. If User A connects to Node 1 and User B connects to Node 2, direct memory broadcasts are impossible without a high-speed distributed message broker.',
          keyPoints: [
            'Sticky sessions help route initial handshakes but do not solve cross-node broadcast distribution.',
            'Connection drops in mobile networks require idempotent heartbeat loops and reconnect backoff.',
          ],
        },
        {
          heading: '2. Implementing Distributed Pub/Sub Backplanes',
          body: 'We decoupled the socket ingress layer from business logic processing by introducing Redis Streams and cluster-mode Pub/Sub. Each server node subscribes to relevant tenant channels, ensuring broadcast messages reach any connected client across arbitrary clusters.',
          codeSnippet: {
            language: 'typescript',
            code: `// Cluster-aware event publisher pattern
export async function broadcastToChannel(channel: string, event: AppEvent) {
  const payload = JSON.stringify({
    ...event,
    publishedAt: Date.now(),
    nodeId: process.env.NODE_ID,
  });
  await redisClient.publish(\`events:\${channel}\`, payload);
}`,
          },
        },
        {
          heading: '3. Client-Side Optimistic UI and Reconciliation',
          body: 'Never make the user wait for roundtrip server acknowledgement before updating UI state. By applying mutations optimistically on the client while attaching unique idempotency IDs, we reconcile state effortlessly when the server broadcast arrives.',
        },
      ],
      conclusion: 'By separating stateful socket connections from backend state storage and implementing robust client-side reconciliation, you can build real-time experiences that feel instantaneous and survive network interruptions gracefully.',
    },
  },
  {
    id: 'blog-2',
    title: 'Mastering Modern React 19: Server Actions, Compiler, and Clean State',
    slug: 'mastering-modern-react-19',
    summary: 'A deep dive into how React 19 eliminates memoization boilerplate, streamlines data mutations, and redefines full-stack component design.',
    category: 'Frontend',
    publishDate: 'July 28, 2026',
    readTime: '5 min read',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Performance'],
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'React 19 introduces pivotal shifts that fundamentally improve developer ergonomics and runtime efficiency. The new React Compiler removes the mental tax of useMemo and useCallback, while Actions streamline asynchronous mutations with built-in pending states.',
      sections: [
        {
          heading: '1. Farewell to Manual Memoization',
          body: 'In previous versions, senior developers spent significant time guarding against unnecessary renders with useMemo, useCallback, and React.memo. The React Compiler automatically optimizes dependency graphs at build time, yielding smaller runtime overhead and cleaner code.',
        },
        {
          heading: '2. The Power of useActionState and Optimistic Updates',
          body: 'Handling pending states, validation errors, and optimistic feedback previously required cumbersome custom hooks. With native actions, managing asynchronous forms is now succinct and declarative.',
          codeSnippet: {
            language: 'typescript',
            code: `// Simplified form action with optimistic response
const [state, formAction, isPending] = useActionState(
  async (prevState, formData) => {
    const result = await updateProfile(formData);
    return result;
  },
  initialState
);`,
          },
        },
        {
          heading: '3. Asset Loading and Resource Preloading',
          body: 'React 19 introduces automatic stylesheet, script, and font preloading directly within component lifecycles, ensuring critical render paths are unblocked before visual paint.',
        },
      ],
      conclusion: 'Adopting React 19 patterns not only cleans up thousands of lines of boilerplate across enterprise codebases but also guarantees peak Core Web Vitals out of the box.',
    },
  },
  {
    id: 'blog-3',
    title: 'Production Guide: Deploying Resilient Microservices on Kubernetes',
    slug: 'production-guide-microservices-kubernetes',
    summary: 'A battle-tested checklist for zero-downtime rolling deploys, readiness probes, graceful shutdowns, and horizontal pod autoscaling.',
    category: 'Cloud & DevOps',
    publishDate: 'June 19, 2026',
    readTime: '7 min read',
    tags: ['Kubernetes', 'DevOps', 'Docker', 'Cloud', 'Reliability'],
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'Deploying containers to Kubernetes is easy; keeping them running under unpredictable traffic spikes, spot instance terminations, and rolling releases requires deliberate operational patterns.',
      sections: [
        {
          heading: '1. Graceful Termination Lifecycle (SIGTERM Handling)',
          body: 'When Kubernetes terminates a pod, it sends a SIGTERM signal. Applications must stop accepting new requests, allow in-flight connections to complete, and cleanly close database and socket pools before the SIGKILL timeout.',
          codeSnippet: {
            language: 'typescript',
            code: `process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(async () => {
    await dbPool.end();
    await redisClient.quit();
    process.exit(0);
  });
});`,
          },
        },
        {
          heading: '2. Calibrating Liveness vs Readiness Probes',
          body: 'Liveness probes should only check if the process is alive (not deadlocked). Readiness probes must check if downstream dependencies (DB, Redis) are reachable. Confusing these two often causes catastrophic cascading restarts across all replicas.',
        },
        {
          heading: '3. Pod Disruption Budgets and Resource Limits',
          body: 'Always configure PodDisruptionBudgets (PDBs) to ensure minimum available nodes during cluster node upgrades. Pair this with realistic CPU/memory requests to prevent OOMKilled evictions.',
        },
      ],
      conclusion: 'Following these fundamental cloud-native guardrails guarantees that your infrastructure can withstand node failures, load spikes, and routine rollouts without user-facing errors.',
    },
  },
];
