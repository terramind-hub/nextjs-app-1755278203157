import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Target, Users, Zap } from 'lucide-react';

export default function PRDOverview() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <FileText className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            PRD Generator
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive Product Requirements Document for Coding Applications
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Product Management</Badge>
          <Badge variant="secondary">Software Development</Badge>
          <Badge variant="secondary">Technical Specifications</Badge>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <CardTitle className="text-lg">Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Define comprehensive requirements for building a robust coding application with clear specifications and guidelines.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Users className="h-5 w-5 text-green-600 mr-2" />
            <CardTitle className="text-lg">Target Audience</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Developers, product managers, designers, and stakeholders involved in the application development process.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Zap className="h-5 w-5 text-purple-600 mr-2" />
            <CardTitle className="text-lg">Scope</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Complete product specification covering features, technical requirements, design, monetization, and success metrics.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Document Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Sections</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">25+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Features</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">User Stories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Metrics</div>
          </div>
        </div>
      </div>
    </div>
  );
}