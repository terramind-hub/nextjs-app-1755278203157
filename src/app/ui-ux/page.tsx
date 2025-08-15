import { Metadata } from 'next';
import PRDSection from '@/components/PRDSection';
import { designPrinciples, wireframeConcepts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'UI/UX Considerations - Coding App PRD',
  description: 'Design principles and wireframe concepts for the coding app',
};

// Design Principle Component
interface DesignPrincipleProps {
  principle: {
    title: string;
    description: string;
    examples: string[];
  };
  index: number;
}

function DesignPrinciple({ principle, index }: DesignPrincipleProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-semibold text-sm">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {principle.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {principle.description}
          </p>
          {principle.examples && principle.examples.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Examples:
              </h4>
              <ul className="space-y-1">
                {principle.examples.map((example, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{example}</span>
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

// Wireframe Concept Component
interface WireframeConceptProps {
  concept: {
    screen: string;
    description: string;
    elements: string[];
  };
}

function WireframeConcept({ concept }: WireframeConceptProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {concept.screen}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {concept.description}
      </p>
      {concept.elements && concept.elements.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Key Elements:
          </h4>
          <div className="flex flex-wrap gap-2">
            {concept.elements.map((element, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function UIUXPage() {
  // Safely handle data with defaults
  const safeDesignPrinciples = (designPrinciples ?? []).filter(Boolean);
  const safeWireframeConcepts = (wireframeConcepts ?? []).filter(Boolean);

  return (
    <div className="space-y-8">
      <PRDSection title="UI/UX Considerations">
        <div className="space-y-8">
          {/* Design Principles Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Design Principles
            </h2>
            {safeDesignPrinciples.length === 0 ? (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No design principles defined yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {safeDesignPrinciples.map((principle, index) => (
                  <DesignPrinciple
                    key={index}
                    principle={principle}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Wireframe Concepts Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Wireframe Concepts
            </h2>
            {safeWireframeConcepts.length === 0 ? (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No wireframe concepts defined yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {safeWireframeConcepts.map((concept, index) => (
                  <WireframeConcept key={index} concept={concept} />
                ))}
              </div>
            )}
          </div>

          {/* Additional UI/UX Guidelines */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Guidelines
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Accessibility Standards
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• WCAG 2.1 AA compliance</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Screen reader compatibility</li>
                    <li>• High contrast mode support</li>
                    <li>• Focus indicators</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Performance Considerations
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lazy loading for code editors</li>
                    <li>• Virtual scrolling for large files</li>
                    <li>• Optimized syntax highlighting</li>
                    <li>• Minimal bundle size</li>
                    <li>• Progressive enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PRDSection>
    </div>
  );
}