// Comprehensive seed data for PRD application
// DATA_SHAPES_USED: PRDSection, UserStory, FeatureModule, TechnicalRequirement, DesignPrinciple, WireframeConcept, PricingModel, RevenueProjection, RoadmapItem, SuccessMetric, NavigationItem, AppOverview
// All data shapes defined in src/types/prd.ts

// Navigation items for the PRD application
export const navigationItems = [
  { id: 'overview', label: 'Overview', href: '/', icon: 'home' },
  { id: 'introduction', label: 'Introduction', href: '/introduction', icon: 'info' },
  { id: 'user-stories', label: 'User Stories', href: '/user-stories', icon: 'users' },
  { id: 'features', label: 'Features', href: '/features', icon: 'layers' },
  { id: 'technical', label: 'Technical', href: '/technical', icon: 'code' },
  { id: 'ui-ux', label: 'UI/UX', href: '/ui-ux', icon: 'palette' },
  { id: 'monetization', label: 'Monetization', href: '/monetization', icon: 'dollar-sign' },
  { id: 'roadmap', label: 'Roadmap', href: '/roadmap', icon: 'map' },
  { id: 'metrics', label: 'Metrics', href: '/metrics', icon: 'bar-chart' }
];

// App overview data
export const appOverview = {
  title: 'CodeCraft Pro',
  subtitle: 'Professional Code Editor & Development Environment',
  description: 'A comprehensive coding application designed for developers of all skill levels, featuring intelligent code completion, collaborative editing, and integrated development tools.',
  version: '1.0.0',
  lastUpdated: '2024-01-15',
  status: 'In Development',
  team: 'CodeCraft Development Team',
  estimatedLaunch: 'Q2 2024'
};

// PRD sections overview
export const prdSections = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Project overview, purpose, scope, and target audience',
    status: 'complete',
    progress: 100,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'user-stories',
    title: 'User Stories',
    description: 'Detailed user scenarios and use cases',
    status: 'in-progress',
    progress: 85,
    lastUpdated: '2024-01-14'
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Core functionalities and feature modules',
    status: 'in-progress',
    progress: 75,
    lastUpdated: '2024-01-13'
  },
  {
    id: 'technical',
    title: 'Technical Requirements',
    description: 'Platform, languages, integrations, and performance specs',
    status: 'draft',
    progress: 60,
    lastUpdated: '2024-01-12'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Design principles and wireframe concepts',
    status: 'draft',
    progress: 45,
    lastUpdated: '2024-01-11'
  },
  {
    id: 'monetization',
    title: 'Monetization',
    description: 'Pricing models and revenue strategies',
    status: 'draft',
    progress: 30,
    lastUpdated: '2024-01-10'
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    description: 'Future enhancements and development timeline',
    status: 'draft',
    progress: 25,
    lastUpdated: '2024-01-09'
  },
  {
    id: 'metrics',
    title: 'Success Metrics',
    description: 'KPIs and success measurement criteria',
    status: 'draft',
    progress: 20,
    lastUpdated: '2024-01-08'
  }
];

// Introduction section data
export const introductionData = {
  purpose: 'To create a modern, feature-rich coding application that enhances developer productivity and provides an intuitive development environment for programmers of all skill levels.',
  scope: 'A cross-platform desktop and web application supporting multiple programming languages with features including syntax highlighting, intelligent code completion, version control integration, collaborative editing, and extensible plugin architecture.',
  targetAudience: [
    {
      segment: 'Professional Developers',
      description: 'Experienced programmers working on complex projects requiring advanced tooling',
      size: '40%',
      needs: ['Advanced debugging', 'Performance optimization', 'Team collaboration']
    },
    {
      segment: 'Student Developers',
      description: 'Computer science students and coding bootcamp participants learning to code',
      size: '35%',
      needs: ['Learning resources', 'Simple interface', 'Educational features']
    },
    {
      segment: 'Hobbyist Programmers',
      description: 'Enthusiasts working on personal projects and open-source contributions',
      size: '25%',
      needs: ['Free tier', 'Community features', 'Project templates']
    }
  ],
  marketAnalysis: {
    marketSize: '$2.3B',
    growthRate: '12.5%',
    competitors: ['VS Code', 'IntelliJ IDEA', 'Sublime Text', 'Atom'],
    differentiators: ['AI-powered assistance', 'Real-time collaboration', 'Integrated learning resources']
  }
};

// User stories data
export const userStories = [
  {
    id: 'us-001',
    title: 'Code with Syntax Highlighting',
    description: 'As a developer, I want syntax highlighting for multiple programming languages so that I can easily read and understand my code.',
    priority: 'high',
    status: 'completed',
    acceptanceCriteria: [
      'Support for 20+ programming languages',
      'Customizable color themes',
      'Real-time syntax validation'
    ],
    estimatedHours: 40,
    assignee: 'Frontend Team'
  },
  {
    id: 'us-002',
    title: 'Intelligent Code Completion',
    description: 'As a developer, I want intelligent code completion suggestions so that I can write code faster and with fewer errors.',
    priority: 'high',
    status: 'in-progress',
    acceptanceCriteria: [
      'Context-aware suggestions',
      'Support for popular frameworks',
      'Machine learning-based recommendations'
    ],
    estimatedHours: 80,
    assignee: 'AI Team'
  },
  {
    id: 'us-003',
    title: 'Real-time Collaboration',
    description: 'As a team lead, I want real-time collaborative editing so that my team can work together on code simultaneously.',
    priority: 'medium',
    status: 'planned',
    acceptanceCriteria: [
      'Multiple users can edit simultaneously',
      'Live cursor tracking',
      'Conflict resolution system'
    ],
    estimatedHours: 120,
    assignee: 'Backend Team'
  },
  {
    id: 'us-004',
    title: 'Version Control Integration',
    description: 'As a developer, I want integrated Git support so that I can manage my code versions without leaving the editor.',
    priority: 'high',
    status: 'in-progress',
    acceptanceCriteria: [
      'Git commands in UI',
      'Visual diff viewer',
      'Branch management'
    ],
    estimatedHours: 60,
    assignee: 'DevOps Team'
  },
  {
    id: 'us-005',
    title: 'Plugin Ecosystem',
    description: 'As a power user, I want to install and create plugins so that I can extend the editor\'s functionality.',
    priority: 'medium',
    status: 'planned',
    acceptanceCriteria: [
      'Plugin marketplace',
      'Plugin development API',
      'Easy installation process'
    ],
    estimatedHours: 100,
    assignee: 'Platform Team'
  }
];

// Feature modules data
export const featureModules = [
  {
    id: 'editor-core',
    name: 'Core Editor',
    description: 'Basic text editing functionality with syntax highlighting',
    priority: 'critical',
    status: 'completed',
    progress: 100,
    features: [
      'Multi-language syntax highlighting',
      'Code folding and indentation',
      'Find and replace functionality',
      'Multiple tabs and split views'
    ],
    dependencies: [],
    estimatedEffort: '3 months',
    team: 'Frontend Team'
  },
  {
    id: 'ai-assistant',
    name: 'AI Code Assistant',
    description: 'Intelligent code completion and suggestions powered by machine learning',
    priority: 'high',
    status: 'in-progress',
    progress: 70,
    features: [
      'Context-aware code completion',
      'Code generation from comments',
      'Bug detection and fixes',
      'Code optimization suggestions'
    ],
    dependencies: ['editor-core'],
    estimatedEffort: '4 months',
    team: 'AI Team'
  },
  {
    id: 'collaboration',
    name: 'Real-time Collaboration',
    description: 'Multi-user editing and team collaboration features',
    priority: 'medium',
    status: 'planned',
    progress: 0,
    features: [
      'Live collaborative editing',
      'Voice and video chat integration',
      'Shared workspaces',
      'Comment and review system'
    ],
    dependencies: ['editor-core', 'user-management'],
    estimatedEffort: '5 months',
    team: 'Backend Team'
  },
  {
    id: 'version-control',
    name: 'Version Control',
    description: 'Integrated Git support and version management',
    priority: 'high',
    status: 'in-progress',
    progress: 45,
    features: [
      'Git integration',
      'Visual diff viewer',
      'Branch management',
      'Merge conflict resolution'
    ],
    dependencies: ['editor-core'],
    estimatedEffort: '2 months',
    team: 'DevOps Team'
  },
  {
    id: 'debugging',
    name: 'Debugging Tools',
    description: 'Integrated debugging and testing capabilities',
    priority: 'high',
    status: 'planned',
    progress: 0,
    features: [
      'Breakpoint debugging',
      'Variable inspection',
      'Call stack visualization',
      'Performance profiling'
    ],
    dependencies: ['editor-core', 'language-servers'],
    estimatedEffort: '3 months',
    team: 'Tools Team'
  }
];

// Technical requirements data
export const technicalRequirements = [
  {
    category: 'Platform',
    requirements: [
      {
        id: 'platform-web',
        name: 'Web Application',
        description: 'Browser-based application supporting modern web standards',
        priority: 'critical',
        status: 'implemented'
      },
      {
        id: 'platform-desktop',
        name: 'Desktop Application',
        description: 'Native desktop app for Windows, macOS, and Linux',
        priority: 'high',
        status: 'planned'
      }
    ]
  },
  {
    category: 'Frontend',
    requirements: [
      {
        id: 'frontend-react',
        name: 'React Framework',
        description: 'Modern React with TypeScript for component-based architecture',
        priority: 'critical',
        status: 'implemented'
      },
      {
        id: 'frontend-monaco',
        name: 'Monaco Editor',
        description: 'VS Code editor engine for advanced text editing capabilities',
        priority: 'critical',
        status: 'implemented'
      }
    ]
  },
  {
    category: 'Backend',
    requirements: [
      {
        id: 'backend-node',
        name: 'Node.js Runtime',
        description: 'Server-side JavaScript runtime for API and real-time features',
        priority: 'critical',
        status: 'implemented'
      },
      {
        id: 'backend-websockets',
        name: 'WebSocket Support',
        description: 'Real-time communication for collaborative features',
        priority: 'high',
        status: 'in-progress'
      }
    ]
  },
  {
    category: 'Performance',
    requirements: [
      {
        id: 'perf-load-time',
        name: 'Fast Load Times',
        description: 'Application loads in under 3 seconds on average connection',
        priority: 'high',
        status: 'testing'
      },
      {
        id: 'perf-large-files',
        name: 'Large File Support',
        description: 'Handle files up to 100MB without performance degradation',
        priority: 'medium',
        status: 'planned'
      }
    ]
  }
];

// Design principles data
export const designPrinciples = [
  {
    id: 'simplicity',
    title: 'Simplicity First',
    description: 'Clean, uncluttered interface that focuses on the code',
    examples: ['Minimal toolbar', 'Hidden panels by default', 'Keyboard-first navigation'],
    priority: 'high'
  },
  {
    id: 'accessibility',
    title: 'Universal Accessibility',
    description: 'Ensure the application is usable by developers with disabilities',
    examples: ['Screen reader support', 'High contrast themes', 'Keyboard navigation'],
    priority: 'high'
  },
  {
    id: 'customization',
    title: 'Extensive Customization',
    description: 'Allow users to personalize their development environment',
    examples: ['Custom themes', 'Configurable shortcuts', 'Layout preferences'],
    priority: 'medium'
  },
  {
    id: 'performance',
    title: 'Performance Focused',
    description: 'Responsive interface that doesn\'t slow down the development workflow',
    examples: ['Lazy loading', 'Virtual scrolling', 'Optimized rendering'],
    priority: 'high'
  }
];

// Wireframe concepts data
export const wireframeConcepts = [
  {
    id: 'main-layout',
    name: 'Main Editor Layout',
    description: 'Primary workspace with editor, sidebar, and panels',
    components: ['File explorer', 'Code editor', 'Terminal', 'Status bar'],
    priority: 'critical',
    status: 'approved'
  },
  {
    id: 'collaboration-view',
    name: 'Collaboration Interface',
    description: 'Multi-user editing view with participant indicators',
    components: ['User avatars', 'Live cursors', 'Chat panel', 'Share controls'],
    priority: 'medium',
    status: 'draft'
  },
  {
    id: 'settings-panel',
    name: 'Settings and Preferences',
    description: 'Configuration interface for customizing the editor',
    components: ['Theme selector', 'Keyboard shortcuts', 'Plugin manager', 'Account settings'],
    priority: 'low',
    status: 'concept'
  }
];

// Pricing models data
export const pricingModels = [
  {
    id: 'free',
    name: 'Community',
    price: 0,
    period: 'forever',
    description: 'Perfect for individual developers and open source projects',
    features: [
      'Core editor functionality',
      'Basic syntax highlighting',
      'Local file editing',
      'Community support'
    ],
    limitations: [
      'No cloud sync',
      'Limited to 3 projects',
      'No collaboration features'
    ],
    popular: false
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 15,
    period: 'month',
    description: 'Advanced features for professional developers',
    features: [
      'All Community features',
      'AI code completion',
      'Cloud sync and backup',
      'Unlimited projects',
      'Advanced debugging tools',
      'Priority support'
    ],
    limitations: [
      'Limited to 5 collaborators'
    ],
    popular: true
  },
  {
    id: 'team',
    name: 'Team',
    price: 45,
    period: 'month',
    description: 'Collaboration tools for development teams',
    features: [
      'All Professional features',
      'Real-time collaboration',
      'Team workspaces',
      'Advanced version control',
      'Team analytics',
      'Dedicated support'
    ],
    limitations: [],
    popular: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'custom',
    period: 'contact',
    description: 'Custom solutions for large organizations',
    features: [
      'All Team features',
      'On-premise deployment',
      'SSO integration',
      'Custom integrations',
      'SLA guarantee',
      '24/7 support'
    ],
    limitations: [],
    popular: false
  }
];

// Revenue projections data
export const revenueProjections = [
  { month: 'Jan', free: 1000, pro: 50, team: 5, enterprise: 0, total: 800 },
  { month: 'Feb', free: 1500, pro: 85, team: 8, enterprise: 0, total: 1635 },
  { month: 'Mar', free: 2200, pro: 140, team: 12, enterprise: 1, total: 2640 },
  { month: 'Apr', free: 3100, pro: 220, team: 18, enterprise: 1, total: 4110 },
  { month: 'May', free: 4200, pro: 320, team: 25, enterprise: 2, total: 6025 },
  { month: 'Jun', free: 5500, pro: 450, team: 35, enterprise: 2, total: 8325 },
  { month: 'Jul', free: 7000, pro: 600, team: 48, enterprise: 3, total: 11160 },
  { month: 'Aug', free: 8800, pro: 780, team: 62, enterprise: 3, total: 14490 },
  { month: 'Sep', free: 10800, pro: 980, team: 78, enterprise: 4, total: 18210 },
  { month: 'Oct', free: 13200, pro: 1200, team: 95, enterprise: 5, total: 22275 },
  { month: 'Nov', free: 16000, pro: 1450, team: 115, enterprise: 6, total: 26925 },
  { month: 'Dec', free: 19200, pro: 1720, team: 138, enterprise: 7, total: 32106 }
];

// Roadmap items data
export const roadmapItems = [
  {
    id: 'q1-2024',
    quarter: 'Q1 2024',
    title: 'Core Platform Launch',
    description: 'Release MVP with essential editing features',
    status: 'in-progress',
    progress: 75,
    features: [
      'Basic code editor',
      'Syntax highlighting',
      'File management',
      'User authentication'
    ],
    milestones: [
      { name: 'Alpha release', date: '2024-01-15', completed: true },
      { name: 'Beta testing', date: '2024-02-15', completed: false },
      { name: 'Public launch', date: '2024-03-15', completed: false }
    ]
  },
  {
    id: 'q2-2024',
    quarter: 'Q2 2024',
    title: 'AI Integration',
    description: 'Add intelligent code completion and AI assistance',
    status: 'planned',
    progress: 0,
    features: [
      'AI code completion',
      'Code generation',
      'Bug detection',
      'Performance suggestions'
    ],
    milestones: [
      { name: 'AI model training', date: '2024-04-01', completed: false },
      { name: 'Integration testing', date: '2024-05-15', completed: false },
      { name: 'Feature release', date: '2024-06-30', completed: false }
    ]
  },
  {
    id: 'q3-2024',
    quarter: 'Q3 2024',
    title: 'Collaboration Features',
    description: 'Enable real-time collaborative editing',
    status: 'planned',
    progress: 0,
    features: [
      'Real-time editing',
      'Voice chat',
      'Shared workspaces',
      'Comment system'
    ],
    milestones: [
      { name: 'WebSocket infrastructure', date: '2024-07-15', completed: false },
      { name: 'Collaboration UI', date: '2024-08-15', completed: false },
      { name: 'Beta testing', date: '2024-09-30', completed: false }
    ]
  },
  {
    id: 'q4-2024',
    quarter: 'Q4 2024',
    title: 'Enterprise Features',
    description: 'Add enterprise-grade security and deployment options',
    status: 'planned',
    progress: 0,
    features: [
      'SSO integration',
      'On-premise deployment',
      'Advanced analytics',
      'Custom integrations'
    ],
    milestones: [
      { name: 'Security audit', date: '2024-10-15', completed: false },
      { name: 'Enterprise pilot', date: '2024-11-15', completed: false },
      { name: 'General availability', date: '2024-12-31', completed: false }
    ]
  }
];

// Success metrics data
export const successMetrics = [
  {
    id: 'user-growth',
    name: 'User Growth',
    description: 'Monthly active users and user acquisition rate',
    target: '10,000 MAU by Q4 2024',
    current: '2,500 MAU',
    progress: 25,
    trend: 'up',
    category: 'Growth'
  },
  {
    id: 'retention',
    name: 'User Retention',
    description: '30-day user retention rate',
    target: '70%',
    current: '45%',
    progress: 64,
    trend: 'up',
    category: 'Engagement'
  },
  {
    id: 'revenue',
    name: 'Monthly Recurring Revenue',
    description: 'Subscription revenue growth',
    target: '$50,000 MRR by Q4 2024',
    current: '$8,500 MRR',
    progress: 17,
    trend: 'up',
    category: 'Revenue'
  },
  {
    id: 'satisfaction',
    name: 'User Satisfaction',
    description: 'Net Promoter Score (NPS)',
    target: 'NPS > 50',
    current: 'NPS 32',
    progress: 64,
    trend: 'stable',
    category: 'Quality'
  },
  {
    id: 'performance',
    name: 'App Performance',
    description: 'Average page load time',
    target: '< 2 seconds',
    current: '2.8 seconds',
    progress: 71,
    trend: 'down',
    category: 'Technical'
  }
];

// Metrics data for charts
export const metricsData = {
  userGrowth: [
    { month: 'Jan', users: 500, target: 1000 },
    { month: 'Feb', users: 750, target: 1500 },
    { month: 'Mar', users: 1200, target: 2000 },
    { month: 'Apr', users: 1800, target: 2500 },
    { month: 'May', users: 2500, target: 3000 },
    { month: 'Jun', users: 3200, target: 3500 }
  ],
  retention: [
    { period: 'Week 1', rate: 85 },
    { period: 'Week 2', rate: 65 },
    { period: 'Week 3', rate: 52 },
    { period: 'Week 4', rate: 45 },
    { period: 'Month 2', rate: 38 },
    { period: 'Month 3', rate: 32 }
  ],
  featureUsage: [
    { feature: 'Code Editor', usage: 95 },
    { feature: 'Syntax Highlighting', usage: 88 },
    { feature: 'File Explorer', usage: 76 },
    { feature: 'Git Integration', usage: 54 },
    { feature: 'AI Completion', usage: 42 },
    { feature: 'Collaboration', usage: 18 }
  ]
};

// Alias exports for import consistency
export { prdSections as seedPRDSections };
export { userStories as seedUserStories };
export { featureModules as seedFeatureModules };

// Ecommerce baseline exports (required for consistency)
export const products = [];
export const categories = [];
export const users = [];
export const orders = [];
export const reviews = [];
export const inventory = [];

// Alias exports for ecommerce baseline
export { products as seedProducts };
export { categories as seedCategories };
export { users as seedUsers };
export { orders as seedOrders };
export { reviews as seedReviews };
export { inventory as seedInventory };