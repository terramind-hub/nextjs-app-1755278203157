'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText, Users, Layers, Settings, Palette, DollarSign, Map, BarChart3 } from 'lucide-react';

// Navigation items data
const navigationItems = [
  { label: 'Overview', href: '/', icon: 'FileText' },
  { label: 'Introduction', href: '/introduction', icon: 'FileText' },
  { label: 'User Stories', href: '/user-stories', icon: 'Users' },
  { label: 'Features', href: '/features', icon: 'Layers' },
  { label: 'Technical', href: '/technical', icon: 'Settings' },
  { label: 'UI/UX', href: '/ui-ux', icon: 'Palette' },
  { label: 'Monetization', href: '/monetization', icon: 'DollarSign' },
  { label: 'Roadmap', href: '/roadmap', icon: 'Map' },
  { label: 'Metrics', href: '/metrics', icon: 'BarChart3' }
];

// Icon mapping
const iconMap = {
  FileText,
  Users,
  Layers,
  Settings,
  Palette,
  DollarSign,
  Map,
  BarChart3
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">PRD Builder</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  >
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start flex items-center space-x-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}