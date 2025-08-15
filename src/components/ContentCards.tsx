import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, 
  Users, 
  Code, 
  Smartphone, 
  DollarSign, 
  Calendar, 
  BarChart3,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';

// DATA_SHAPES_USED:
// - NavigationCard: { title: string, description: string, href: string, icon?: string }
// - UserStory: { id: string, title: string, description: string, priority: 'high' | 'medium' | 'low', persona: string }
// - FeatureModule: { id: string, name: string, description: string, priority: 'high' | 'medium' | 'low', complexity: 'low' | 'medium' | 'high', dependencies: string[] }
// - TechnicalRequirement: { id: string, category: string, requirement: string, priority: 'high' | 'medium' | 'low', status: 'planned' | 'in-progress' | 'completed' }
// - DesignPrinciple: { id: string, principle: string, description: string, examples: string[] }
// - PricingModel: { id: string, name: string, price: number, features: string[], popular?: boolean }
// - RoadmapItem: { id: string, title: string, description: string, quarter: string, status: 'planned' | 'in-progress' | 'completed', priority: 'high' | 'medium' | 'low' }
// - MetricCard: { id: string, name: string, description: string, target: string, measurement: string }
// - ContentBlock: { id: string, title: string, content: string, type: 'text' | 'list' | 'code' }

interface NavigationCardProps {
  title?: string;
  description?: string;
  href?: string;
  icon?: string;
}

interface UserStoryCardProps {
  story?: {
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    persona: string;
  };
  index?: number;
}

interface FeatureModuleProps {
  feature?: {
    id: string;
    name: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    complexity: 'low' | 'medium' | 'high';
    dependencies: string[];
  };
}

interface TechRequirementProps {
  requirement?: {
    id: string;
    category: string;
    requirement: string;
    priority: 'high' | 'medium' | 'low';
    status: 'planned' | 'in-progress' | 'completed';
  };
}

interface DesignPrincipleProps {
  principle?: {
    id: string;
    principle: string;
    description: string;
    examples: string[];
  };
}

interface PricingModelProps {
  model?: {
    id: string;
    name: string;
    price: number;
    features: string[];
    popular?: boolean;
  };
}

interface RoadmapItemProps {
  item?: {
    id: string;
    title: string;
    description: string;
    quarter: string;
    status: 'planned' | 'in-progress' | 'completed';
    priority: 'high' | 'medium' | 'low';
  };
}

interface MetricCardProps {
  metric?: {
    id: string;
    name: string;
    description: string;
    target: string;
    measurement: string;
  };
}

interface ContentBlockProps {
  block?: {
    id: string;
    title: string;
    content: string;
    type: 'text' | 'list' | 'code';
  };
}

// Helper function to get priority color
const getPriorityColor = (priority: string = 'medium') => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'low':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

// Helper function to get status color
const getStatusColor = (status: string = 'planned') => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'planned':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

// Helper function to get complexity color
const getComplexityColor = (complexity: string = 'medium') => {
  switch (complexity) {
    case 'high':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'low':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

// Helper function to get icon component
const getIconComponent = (iconName: string = '') => {
  switch (iconName) {
    case 'users':
      return Users;
    case 'code':
      return Code;
    case 'smartphone':
      return Smartphone;
    case 'dollar-sign':
      return DollarSign;
    case 'calendar':
      return Calendar;
    case 'bar-chart':
      return BarChart3;
    case 'lightbulb':
      return Lightbulb;
    case 'shield':
      return Shield;
    case 'zap':
      return Zap;
    default:
      return ArrowRight;
  }
};

export function NavigationCard({ 
  title = '', 
  description = '', 
  href = '#', 
  icon = '' 
}: NavigationCardProps) {
  const IconComponent = getIconComponent(icon);

  return (
    <Link href={href} className="block group">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 group-hover:border-primary">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <IconComponent className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
          <div className="flex items-center gap-2 mt-4 text-sm text-primary">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function UserStoryCard({ 
  story = {
    id: '',
    title: '',
    description: '',
    priority: 'medium',
    persona: ''
  }, 
  index = 0 
}: UserStoryCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Story #{index + 1}
              </span>
              <Badge className={cn('text-xs', getPriorityColor(story.priority))}>
                {story.priority}
              </Badge>
            </div>
            <CardTitle className="text-lg leading-tight">
              {story.title || 'Untitled Story'}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed mb-3">
          {story.description || 'No description provided.'}
        </CardDescription>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {story.persona || 'General User'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function FeatureModule({ 
  feature = {
    id: '',
    name: '',
    description: '',
    priority: 'medium',
    complexity: 'medium',
    dependencies: []
  }
}: FeatureModuleProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg leading-tight flex-1">
            {feature.name || 'Untitled Feature'}
          </CardTitle>
          <div className="flex flex-col gap-1">
            <Badge className={cn('text-xs', getPriorityColor(feature.priority))}>
              {feature.priority}
            </Badge>
            <Badge className={cn('text-xs', getComplexityColor(feature.complexity))}>
              {feature.complexity}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed mb-3">
          {feature.description || 'No description provided.'}
        </CardDescription>
        {feature.dependencies && feature.dependencies.length > 0 && (
          <div className="space-y-2">
            <span className="text-sm font-medium text-muted-foreground">Dependencies:</span>
            <div className="flex flex-wrap gap-1">
              {feature.dependencies.map((dep, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {dep}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function TechRequirement({ 
  requirement = {
    id: '',
    category: '',
    requirement: '',
    priority: 'medium',
    status: 'planned'
  }
}: TechRequirementProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {requirement.category || 'General'}
              </Badge>
              <Badge className={cn('text-xs', getPriorityColor(requirement.priority))}>
                {requirement.priority}
              </Badge>
              <Badge className={cn('text-xs', getStatusColor(requirement.status))}>
                {requirement.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {requirement.requirement || 'No requirement specified.'}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function DesignPrinciple({ 
  principle = {
    id: '',
    principle: '',
    description: '',
    examples: []
  }
}: DesignPrincipleProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          {principle.principle || 'Untitled Principle'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed mb-3">
          {principle.description || 'No description provided.'}
        </CardDescription>
        {principle.examples && principle.examples.length > 0 && (
          <div className="space-y-2">
            <span className="text-sm font-medium text-muted-foreground">Examples:</span>
            <ul className="text-sm text-muted-foreground space-y-1">
              {principle.examples.map((example, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function PricingModel({ 
  model = {
    id: '',
    name: '',
    price: 0,
    features: [],
    popular: false
  }
}: PricingModelProps) {
  return (
    <Card className={cn(
      "h-full relative",
      model.popular && "border-primary shadow-lg"
    )}>
      {model.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="pb-3 text-center">
        <CardTitle className="text-xl">
          {model.name || 'Untitled Plan'}
        </CardTitle>
        <div className="text-3xl font-bold text-primary">
          ${Number.isFinite(model.price) ? model.price.toFixed(2) : '0.00'}
          <span className="text-sm font-normal text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        {model.features && model.features.length > 0 && (
          <ul className="space-y-2">
            {model.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function RoadmapItem({ 
  item = {
    id: '',
    title: '',
    description: '',
    quarter: '',
    status: 'planned',
    priority: 'medium'
  }
}: RoadmapItemProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg leading-tight flex-1">
            {item.title || 'Untitled Item'}
          </CardTitle>
          <div className="flex flex-col gap-1">
            <Badge variant="outline" className="text-xs">
              {item.quarter || 'TBD'}
            </Badge>
            <Badge className={cn('text-xs', getStatusColor(item.status))}>
              {item.status}
            </Badge>
            <Badge className={cn('text-xs', getPriorityColor(item.priority))}>
              {item.priority}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {item.description || 'No description provided.'}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function MetricCard({ 
  metric = {
    id: '',
    name: '',
    description: '',
    target: '',
    measurement: ''
  }
}: MetricCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          {metric.name || 'Untitled Metric'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed mb-3">
          {metric.description || 'No description provided.'}
        </CardDescription>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Target:</span>
            <span className="text-sm font-semibold text-primary">
              {metric.target || 'Not specified'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Measurement:</span>
            <span className="text-sm">
              {metric.measurement || 'Not specified'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ContentBlock({ 
  block = {
    id: '',
    title: '',
    content: '',
    type: 'text'
  }
}: ContentBlockProps) {
  const renderContent = () => {
    const content = block.content || 'No content provided.';
    
    switch (block.type) {
      case 'list':
        const items = content.split('\n').filter(item => item.trim());
        return (
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">•</span>
                <span>{item.trim()}</span>
              </li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
            <code>{content}</code>
          </pre>
        );
      default:
        return (
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        );
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight">
          {block.title || 'Untitled Block'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
    </Card>
  );
}