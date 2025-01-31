import { format, parseISO } from 'date-fns';

// Re-export all types
export * from './types';

// Date formatting utilities
export function formatDate(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'yyyy-MM-dd');
}

export function formatDateTime(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'yyyy-MM-dd HH:mm:ss');
}

// Validation utilities
export function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

export function isValidNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
