import PRDOverview from '@/components/PRDOverview';
import { prdSections } from '@/lib/data';
import Link from 'next/link';

// Navigation card component for section links
function NavigationCard({ title, description, href, icon }: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link href={href} className="block">
      <div className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  );
}

export default function Page() {
  // Ensure sections is always an array to prevent runtime errors
  const sections = prdSections ?? [];

  return (
    <div className="space-y-8">
      {/* PRD Overview Section */}
      <PRDOverview />
      
      {/* Navigation Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Explore PRD Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <NavigationCard
              key={section.href}
              title={section.title}
              description={section.description}
              href={section.href}
              icon={section.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}