import { roadmapItems } from '@/lib/data';
import PRDSection from '@/components/PRDSection';

// RoadmapItem component for rendering individual roadmap items
interface RoadmapItemProps {
  item: {
    phase: string;
    timeline: string;
    features: string[];
    priority: string;
  };
  index: number;
}

function RoadmapItem({ item, index }: RoadmapItemProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const priorityColor = priorityColors[item.priority as keyof typeof priorityColors] || priorityColors.medium;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Phase {index + 1}: {item.phase}
          </h3>
          <p className="text-gray-600 font-medium">{item.timeline}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${priorityColor}`}>
          {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)} Priority
        </span>
      </div>
      
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3">Key Features</h4>
        <ul className="space-y-2">
          {(item.features || []).map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const items = roadmapItems || [];

  return (
    <PRDSection title="Future Enhancements & Roadmap">
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Development Roadmap</h2>
          <p className="text-blue-800 leading-relaxed">
            Our roadmap outlines the planned evolution of the coding app, focusing on delivering 
            value to users through iterative development phases. Each phase builds upon previous 
            functionality while introducing new capabilities that enhance the learning and coding experience.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Development Phases</h2>
          
          {items.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-lg">No roadmap items available at this time.</p>
              <p className="text-gray-500 mt-2">Check back later for updates on our development plans.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <RoadmapItem key={index} item={item} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Future Considerations */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Long-term Vision</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Technology Evolution</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI-powered code suggestions and debugging</li>
                <li>• Advanced collaboration features</li>
                <li>• Integration with popular development tools</li>
                <li>• Support for emerging programming languages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Community Growth</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Expanded mentorship programs</li>
                <li>• Industry partnerships for real-world projects</li>
                <li>• Global coding competitions and events</li>
                <li>• Professional certification pathways</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Release Strategy */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Release Strategy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-green-900 mb-2">Agile Development</h3>
              <p className="text-green-800">
                We follow an agile development methodology with 2-week sprints, allowing for 
                rapid iteration and continuous user feedback integration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-900 mb-2">Beta Testing</h3>
              <p className="text-green-800">
                Each major feature undergoes extensive beta testing with select user groups 
                before general release, ensuring quality and usability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-900 mb-2">Continuous Deployment</h3>
              <p className="text-green-800">
                Minor updates and bug fixes are deployed continuously, while major features 
                follow scheduled monthly releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PRDSection>
  );
}