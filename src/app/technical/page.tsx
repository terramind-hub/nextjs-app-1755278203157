import { technicalRequirements } from '@/lib/data';
import PRDSection from '@/components/PRDSection';

// Technical requirement component for rendering individual requirements
function TechRequirement({ requirement, index }: { requirement: any; index: number }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {index + 1}
          </span>
        </div>
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {requirement.category}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {requirement.description}
          </p>
          {requirement.specifications && requirement.specifications.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Specifications:
              </h4>
              <ul className="space-y-1">
                {requirement.specifications.map((spec: string, specIndex: number) => (
                  <li key={specIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TechnicalPage() {
  const requirements = technicalRequirements || [];

  return (
    <PRDSection title="Technical Requirements">
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This section outlines the technical specifications, platform requirements, 
            and architectural considerations for the coding app development.
          </p>
        </div>

        <div className="grid gap-6">
          {requirements.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                No technical requirements defined yet.
              </p>
            </div>
          ) : (
            requirements.map((requirement, index) => (
              <TechRequirement
                key={index}
                requirement={requirement}
                index={index}
              />
            ))
          )}
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Technical Architecture Overview
          </h3>
          <p className="text-blue-800 dark:text-blue-200">
            The technical requirements ensure scalability, security, and performance 
            while maintaining code quality and development efficiency. Each requirement 
            is designed to support the app's core functionality and future growth.
          </p>
        </div>
      </div>
    </PRDSection>
  );
}