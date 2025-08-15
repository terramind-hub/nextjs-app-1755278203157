import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely formats a number as currency
 * @param amount - The amount to format (handles null/undefined)
 * @param currency - The currency code (defaults to 'USD')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number | null | undefined, currency: string = 'USD'): string {
  const safeAmount = Number.isFinite(amount as number) ? (amount as number) : 0;
  
  // Validate ISO-4217 currency code
  const safeCurrency = /^[A-Z]{3}$/.test(currency) ? currency : 'USD';
  
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safeCurrency,
    }).format(safeAmount);
  } catch (error) {
    // Fallback if currency is invalid
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(safeAmount);
  }
}

/**
 * Safely formats a number as percentage
 * @param value - The value to format (handles null/undefined)
 * @param decimals - Number of decimal places (defaults to 1)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number | null | undefined, decimals: number = 1): string {
  const safeValue = Number.isFinite(value as number) ? (value as number) : 0;
  
  // Clamp percentage to [0, 100] range
  const clampedValue = Math.max(0, Math.min(100, safeValue));
  
  return `${clampedValue.toFixed(decimals)}%`;
}

/**
 * Safely formats a date
 * @param date - The date to format (handles null/undefined/invalid dates)
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number | null | undefined,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
): string {
  if (!date) return 'N/A';
  
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date';
    }
    
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
  } catch (error) {
    return 'Invalid Date';
  }
}

/**
 * Safely converts a value to a number
 * @param value - The value to convert
 * @param fallback - Fallback value if conversion fails (defaults to 0)
 * @returns Safe number value
 */
export function safeNumber(value: any, fallback: number = 0): number {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

/**
 * Safely divides two numbers, preventing division by zero
 * @param numerator - The numerator
 * @param denominator - The denominator
 * @param fallback - Fallback value if division is invalid (defaults to 0)
 * @returns Safe division result
 */
export function safeDivide(numerator: number, denominator: number, fallback: number = 0): number {
  if (denominator === 0 || !Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    return fallback;
  }
  return numerator / denominator;
}

/**
 * Truncates text to a specified length with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string | null | undefined, maxLength: number = 50): string {
  const safeText = text || '';
  if (safeText.length <= maxLength) return safeText;
  return safeText.slice(0, maxLength).trim() + '...';
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string | null | undefined): string {
  const safeStr = str || '';
  if (safeStr.length === 0) return safeStr;
  return safeStr.charAt(0).toUpperCase() + safeStr.slice(1).toLowerCase();
}

/**
 * Generates a random ID string
 * @param length - Length of the ID (defaults to 8)
 * @returns Random ID string
 */
export function generateId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Debounces a function call
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}