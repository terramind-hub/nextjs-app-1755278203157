// TypeScript type definitions for all PRD entities

// Navigation and UI types
export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

export interface PRDSection {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface AppOverview {
  title: string;
  description: string;
  highlights: string[];
}

// Introduction section types
export interface IntroductionData {
  purpose: string;
  scope: string[];
  targetAudience: string[];
}

// User Stories section types
export interface UserStory {
  title: string;
  persona: string;
  scenario: string;
  acceptance: string[];
}

// Features section types
export interface FeatureModule {
  name: string;
  description: string;
  features: string[];
  priority: string;
}

// Technical Requirements section types
export interface TechnicalRequirement {
  category: string;
  description: string;
  specifications: string[];
}

// UI/UX section types
export interface DesignPrinciple {
  title: string;
  description: string;
  examples: string[];
}

export interface WireframeConcept {
  screen: string;
  description: string;
  elements: string[];
}

// Monetization section types
export interface PricingModel {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export interface RevenueProjection {
  month: string;
  revenue: number;
}

// Roadmap section types
export interface RoadmapItem {
  phase: string;
  timeline: string;
  features: string[];
  priority: string;
}

// Metrics section types
export interface SuccessMetric {
  name: string;
  description: string;
  target: string;
  measurement: string;
}

export interface MetricData {
  name: string;
  value: number;
  trend: string;
}

// Chart data types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

// Priority levels
export type Priority = 'High' | 'Medium' | 'Low';

// Trend directions
export type TrendDirection = 'up' | 'down' | 'stable';

// Phase types for roadmap
export type RoadmapPhase = 'Phase 1' | 'Phase 2' | 'Phase 3' | 'Phase 4';

// Pricing tiers
export type PricingTier = 'Free' | 'Basic' | 'Pro' | 'Enterprise';

// User personas
export type UserPersona = 'Beginner Developer' | 'Experienced Developer' | 'Team Lead' | 'Student' | 'Educator';

// Technical categories
export type TechnicalCategory = 'Platform' | 'Languages' | 'Integrations' | 'Performance' | 'Security' | 'Infrastructure';

// Design categories
export type DesignCategory = 'Visual Design' | 'User Experience' | 'Accessibility' | 'Responsive Design';

// Metric categories
export type MetricCategory = 'User Engagement' | 'Business' | 'Technical' | 'Quality';

// Complete PRD data structure
export interface PRDData {
  overview: AppOverview;
  introduction: IntroductionData;
  userStories: UserStory[];
  features: FeatureModule[];
  technical: TechnicalRequirement[];
  designPrinciples: DesignPrinciple[];
  wireframes: WireframeConcept[];
  pricing: PricingModel[];
  revenueProjections: RevenueProjection[];
  roadmap: RoadmapItem[];
  metrics: SuccessMetric[];
  metricData: MetricData[];
}