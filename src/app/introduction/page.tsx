import type { Metadata } from 'next';
import PRDSection from '@/components/PRDSection';

export const metadata: Metadata = {
  title: 'Introduction - Coding App PRD',
  description: 'Purpose, scope, and target audience for the coding app product requirements document',
};

// DATA_SHAPES_USED: IntroductionData { purpose: string, scope: string[], targetAudience: string[] } from '@/lib/data'

// Local content block component for this page
interface ContentBlockProps {
  title: string;
  content?: string;
  items?: string[];
}

function ContentBlock({ title, content, items = [] }: ContentBlockProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{title}</h3>
      {content && (
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{content}</p>
      )}
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function IntroductionPage() {
  // Fallback data in case external data is not available
  const introductionData = {
    purpose: "To create a comprehensive, user-friendly coding application that serves as an all-in-one platform for developers to write, test, collaborate, and learn programming across multiple languages and frameworks.",
    scope: [
      "Multi-language code editor with syntax highlighting and intelligent autocomplete",
      "Integrated development environment (IDE) features including debugging and testing tools",
      "Real-time collaboration capabilities for team development",
      "Educational resources and interactive coding tutorials",
      "Project management and version control integration",
      "Cloud-based storage and deployment solutions",
      "Community features for code sharing and peer review"
    ],
    targetAudience: [
      "Beginner programmers seeking an intuitive learning environment",
      "Professional developers looking for a comprehensive coding platform",
      "Educational institutions requiring tools for teaching programming",
      "Development teams needing collaborative coding solutions",
      "Freelancers and consultants working on multiple client projects",
      "Open source contributors participating in community projects",
      "Students learning computer science and software development"
    ]
  };

  return (
    <PRDSection title="Introduction">
      <div className="space-y-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
            Coding App Product Requirements Document
          </h2>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
            This document outlines the comprehensive requirements for developing a modern, 
            feature-rich coding application that addresses the needs of developers across 
            all skill levels and use cases.
          </p>
        </div>

        <ContentBlock
          title="Purpose"
          content={introductionData.purpose}
        />

        <ContentBlock
          title="Scope"
          content="The coding app will encompass the following key areas:"
          items={introductionData.scope}
        />

        <ContentBlock
          title="Target Audience"
          content="This application is designed to serve a diverse range of users:"
          items={introductionData.targetAudience}
        />

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Key Success Factors
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">User Experience</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intuitive interface that reduces learning curve while providing powerful features
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fast, responsive application that handles large codebases efficiently
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Collaboration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Seamless real-time collaboration tools for team development
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Extensibility</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Plugin architecture supporting community-driven feature expansion
              </p>
            </div>
          </div>
        </div>
      </div>
    </PRDSection>
  );
}