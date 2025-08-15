'use client';

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// DATA_SHAPES_USED:
// RevenueProjection { month: string, revenue: number } - from props
// MetricData { name: string, value: number, trend: string } - from props

interface RevenueProjection {
  month: string;
  revenue: number;
}

interface MetricData {
  name: string;
  value: number;
  trend: string;
}

interface RevenueChartProps {
  data?: RevenueProjection[];
}

interface MetricsChartProps {
  data?: MetricData[];
}

// Helper function for safe number formatting
const safeNumber = (value: unknown): number => {
  return Number.isFinite(value as number) ? (value as number) : 0;
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(safeNumber(amount));
};

export function RevenueChart({ data = [] }: RevenueChartProps) {
  // Ensure data is safe and provide fallback
  const chartData = (data ?? []).map(item => ({
    month: item?.month || '',
    revenue: safeNumber(item?.revenue),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Projections</CardTitle>
        <CardDescription>Monthly revenue growth over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                tickFormatter={(value) => formatCurrency(value)}
              />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                labelStyle={{ color: '#000' }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function MetricsChart({ data = [] }: MetricsChartProps) {
  // Ensure data is safe and provide fallback
  const chartData = (data ?? []).map(item => ({
    name: item?.name || '',
    value: safeNumber(item?.value),
    trend: item?.trend || 'neutral',
  }));

  // Get bar color based on trend
  const getBarColor = (trend: string): string => {
    switch (trend) {
      case 'up':
        return '#10b981'; // green
      case 'down':
        return '#ef4444'; // red
      default:
        return '#6b7280'; // gray
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Performance Metrics</CardTitle>
        <CardDescription>Current performance indicators and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value: number, name: string, props: any) => [
                  value.toLocaleString(),
                  name,
                ]}
                labelStyle={{ color: '#000' }}
              />
              <Bar 
                dataKey="value" 
                fill={(entry: any) => getBarColor(entry?.trend || 'neutral')}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}