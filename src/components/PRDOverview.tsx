import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { appOverview } from '@/lib/data';
import { Code, Users, Zap, Target } from 'lucide-react';

/**
 * DATA_SHAPES_USED:
 * - AppOverview { title: string, description: string, highlights: string[] } from '@/lib/data'
 */

export default function PRDOverview() {
  // Null safety: provide fallback for missing overview data
  const overview = appOverview || {
    title: 'Coding App PRD',
    description: 'A comprehensive product requirements document for a modern coding application.',
    highlights: []
  };

  // Ensure highlights array is safe to iterate
  const highlights = overview.highlights || [];

  const icons = [Code, Users, Zap, Target];

  return (
    <div className="space-y-6">
      {/* Main Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{overview.title}</CardTitle>
          <CardDescription className="text-lg">
            {overview.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This Product Requirements Document outlines the comprehensive plan for developing 
            a modern coding application that serves developers, students, and coding enthusiasts. 
            The document covers all aspects from user stories to technical implementation, 
            ensuring a clear roadmap for successful product development.
          </p>
        </CardContent>
      </Card>

      {/* Key Highlights */}
      {highlights.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium">{highlight}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Document Structure Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Document Structure</CardTitle>
          <CardDescription>
            Navigate through the comprehensive sections of this PRD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Core Sections</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Introduction & Scope</li>
                <li>• User Stories & Use Cases</li>
                <li>• Feature Specifications</li>
                <li>• Technical Requirements</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Strategic Sections</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• UI/UX Considerations</li>
                <li>• Monetization Strategy</li>
                <li>• Future Roadmap</li>
                <li>• Success Metrics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}