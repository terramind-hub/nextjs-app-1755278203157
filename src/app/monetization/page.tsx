import type { Metadata } from 'next';
import PRDSection from '@/components/PRDSection';
import { pricingModels, revenueProjections } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Monetization Strategy - Coding App PRD',
  description: 'Comprehensive monetization strategy including pricing models and revenue projections for the coding app.',
};

// Local PricingModel component for this page
interface PricingModelProps {
  model: {
    name: string;
    description: string;
    price: number;
    features: string[];
  };
  index: number;
}

function PricingModel({ model, index }: PricingModelProps) {
  const isPopular = index === 1; // Make the middle tier popular

  return (
    <div className={`relative rounded-lg border p-6 ${isPopular ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' : 'border-gray-200 dark:border-gray-700'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{model.description}</p>
        <div className="text-3xl font-bold">
          ${model.price}
          <span className="text-lg font-normal text-gray-500">/month</span>
        </div>
      </div>
      <ul className="space-y-3">
        {model.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors ${
        isPopular 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}

// Local RevenueChart component for this page
interface RevenueChartProps {
  data: Array<{
    month: string;
    revenue: number;
  }>;
}

function RevenueChart({ data }: RevenueChartProps) {
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold mb-4">Revenue Projections</h3>
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 0;
          
          return (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium w-16">{item.month}</span>
              <div className="flex-1 mx-4">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-semibold w-20 text-right">
                ${item.revenue.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MonetizationPage() {
  // Safely handle data with defaults
  const safePricingModels = (pricingModels ?? []).slice();
  const safeRevenueProjections = (revenueProjections ?? []).slice();

  return (
    <div className="space-y-8">
      <PRDSection title="Monetization Strategy">
        <div className="space-y-8">
          {/* Overview */}
          <div className="prose dark:prose-invert max-w-none">
            <h2>Revenue Model Overview</h2>
            <p>
              Our monetization strategy focuses on sustainable growth through multiple revenue streams, 
              balancing accessibility for individual developers with premium features for teams and enterprises.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Pricing Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {safePricingModels.map((model, index) => (
                <PricingModel key={index} model={model} index={index} />
              ))}
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Primary Revenue Streams</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Subscription Revenue</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monthly and annual subscriptions for Pro and Team plans, providing predictable recurring revenue.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Enterprise Licensing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Custom enterprise solutions with dedicated support, on-premise deployment options, and advanced security features.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Marketplace Commission</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Revenue sharing from third-party extensions, templates, and integrations sold through our marketplace.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Secondary Revenue Streams</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Training & Certification</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Premium courses, workshops, and certification programs for advanced coding techniques and best practices.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Professional Services</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Consulting, custom development, and implementation services for enterprise clients.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">API Access</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tiered API access for developers building integrations and third-party applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Projections */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Revenue Projections</h2>
            <RevenueChart data={safeRevenueProjections} />
          </div>

          {/* Pricing Strategy */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Pricing Strategy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Value-Based Pricing</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Pricing aligned with developer productivity gains</li>
                  <li>• ROI-focused messaging for enterprise clients</li>
                  <li>• Competitive analysis against similar tools</li>
                  <li>• Regular pricing optimization based on usage data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Growth Strategy</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Freemium model to drive user acquisition</li>
                  <li>• Annual subscription discounts (20% off)</li>
                  <li>• Volume discounts for team plans</li>
                  <li>• Student and open-source project discounts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Market Analysis</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">$2.8B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Developer Tools Market Size</div>
              </div>
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-green-500 mb-2">15%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Annual Market Growth Rate</div>
              </div>
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-purple-500 mb-2">28M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Global Developer Population</div>
              </div>
            </div>
          </div>
        </div>
      </PRDSection>
    </div>
  );
}