import { clsx, type ClassValue } from 'clsx';

/**
 * Utility for merging class names
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Generate a unique ID for accessibility
 */
export function useId(prefix = 'aiotize'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
