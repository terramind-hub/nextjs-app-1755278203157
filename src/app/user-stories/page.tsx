import type { Metadata } from 'next';
import PRDSection from '@/components/PRDSection';
import { userStories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'User Stories - Coding App PRD',
  description: 'Detailed user stories and use cases for the coding app',
};

// UserStoryCard component for rendering individual user stories
interface UserStoryCardProps {
  story: {
    title: string;
    persona: string;
    scenario: string;
    acceptance: string[];
  };
  index: number;
}

function UserStoryCard({ story, index }: UserStoryCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {story.title}
          </h3>
          <div className="mb-4">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-2 py-1 rounded-md font-medium">
              {story.persona}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {story.scenario}
          </p>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Acceptance Criteria:
            </h4>
            <ul className="space-y-1">
              {(story.acceptance || []).map((criterion, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserStoriesPage() {
  const stories = userStories || [];

  return (
    <PRDSection title="User Stories & Use Cases">
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            These user stories represent the core interactions and workflows that different types of users 
            will have with our coding app. Each story follows the format: "As a [persona], I want [goal] 
            so that [benefit]" and includes specific acceptance criteria for implementation.
          </p>
        </div>

        {stories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-600 text-lg">
              No user stories available yet.
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {stories.map((story, index) => (
              <UserStoryCard key={index} story={story} index={index} />
            ))}
          </div>
        )}

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Story Prioritization
          </h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            User stories are prioritized based on user impact, technical complexity, and business value. 
            Core learning and coding features take precedence, followed by collaboration and advanced features.
          </p>
        </div>
      </div>
    </PRDSection>
  );
}