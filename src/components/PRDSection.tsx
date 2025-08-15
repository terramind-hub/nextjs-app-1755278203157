import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PRDSectionProps {
  title?: string;
  children?: React.ReactNode;
}

/**
 * Reusable section wrapper component for PRD pages
 * Provides consistent styling and structure across all PRD sections
 */
export default function PRDSection({ title = '', children = null }: PRDSectionProps) {
  return (
    <Card className="w-full">
      {title && (
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
}