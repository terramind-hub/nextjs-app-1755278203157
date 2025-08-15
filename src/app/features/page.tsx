import { featureModules } from '@/lib/data';
import PRDSection from '@/components/PRDSection';

// Feature Module Component
interface FeatureModuleProps {
  module: {
    name: string;
    description: string;
    features: string[];
    priority: string;
  };
  index: number;
}

function FeatureModule({ module, index }: FeatureModuleProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const priorityColor = priorityColors[module.priority as keyof typeof priorityColors] || priorityColors.medium;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {index + 1}. {module.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${priorityColor}`}>
          {module.priority} priority
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{module.description}</p>
      
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-2">
          {(module.features || []).map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  const modules = featureModules || [];

  return (
    <PRDSection title="Core Features & Modules">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            The coding app is structured around modular features that provide a comprehensive 
            development environment. Each module is designed to work independently while 
            integrating seamlessly with others to create a cohesive user experience.
          </p>
        </div>

        {modules.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No feature modules defined yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {modules.map((module, index) => (
              <FeatureModule key={index} module={module} index={index} />
            ))}
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Feature Integration Strategy
          </h3>
          <p className="text-blue-800">
            All features are designed with modularity in mind, allowing for independent 
            development, testing, and deployment. The architecture supports feature flags 
            for gradual rollouts and A/B testing of new functionalities.
          </p>
        </div>
      </div>
    </PRDSection>
  );
}