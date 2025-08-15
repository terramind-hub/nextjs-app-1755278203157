import { Metadata } from 'next';
import PRDSection from '@/components/PRDSection';
import { successMetrics, metricsData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Success Metrics - Coding App PRD',
  description: 'Key performance indicators and success metrics for the coding app',
};

// MetricCard component for displaying individual metrics
interface MetricCardProps {
  metric: {
    name: string;
    description: string;
    target: string;
    measurement: string;
  };
  index: number;
}

function MetricCard({ metric, index }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {metric.name}
        </h3>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          KPI {index + 1}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {metric.description}
      </p>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Target:
          </span>
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">
            {metric.target}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Measurement:
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {metric.measurement}
          </span>
        </div>
      </div>
    </div>
  );
}

// MetricsChart component for data visualization
interface MetricsChartProps {
  data: Array<{
    name: string;
    value: number;
    trend: string;
  }>;
}

function MetricsChart({ data }: MetricsChartProps) {
  const safeData = data ?? [];
  
  if (safeData.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">No metrics data available</p>
      </div>
    );
  }

  const maxValue = Math.max(...safeData.map(item => item.value || 0));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Current Performance Metrics
      </h3>
      <div className="space-y-4">
        {safeData.map((item, index) => {
          const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
          const trendColor = item.trend === 'up' ? 'text-green-600' : 
                           item.trend === 'down' ? 'text-red-600' : 'text-gray-600';
          const trendIcon = item.trend === 'up' ? '↗' : 
                           item.trend === 'down' ? '↘' : '→';
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                  <span className={`text-sm ${trendColor}`}>
                    {trendIcon}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MetricsPage() {
  const safeSuccessMetrics = successMetrics ?? [];
  const safeMetricsData = metricsData ?? [];

  return (
    <PRDSection title="Success Metrics & KPIs">
      <div className="space-y-8">
        {/* Overview */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Success will be measured through a comprehensive set of key performance indicators (KPIs) 
            that track user engagement, business growth, and technical performance. These metrics will 
            guide product decisions and validate our strategic objectives.
          </p>
        </div>

        {/* Current Metrics Chart */}
        <MetricsChart data={safeMetricsData} />

        {/* Success Metrics Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Performance Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safeSuccessMetrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} index={index} />
            ))}
          </div>
        </div>

        {/* Measurement Framework */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Measurement Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 text-xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Real-time Tracking
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Continuous monitoring of key metrics with automated alerts for significant changes
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 dark:text-green-400 text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Goal-oriented
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Each metric tied to specific business objectives with clear success thresholds
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 dark:text-purple-400 text-xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Iterative Improvement
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Regular review cycles to refine metrics and adjust targets based on learnings
              </p>
            </div>
          </div>
        </div>

        {/* Reporting Schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Reporting Schedule
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Daily Reports</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Active users, revenue, critical system metrics
                </p>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Automated
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Weekly Reviews</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  User engagement, feature adoption, support metrics
                </p>
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Team Review
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Monthly Analysis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Comprehensive performance review and strategic adjustments
                </p>
              </div>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Executive Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </PRDSection>
  );
}