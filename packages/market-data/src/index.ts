export * from './types';

// Re-export dependencies for convenience
export { z } from 'zod';
export { format, parseISO } from 'date-fns';

// Constants
export const TREASURY_API_URL = 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv';
export const SOFR_API_URL = 'https://www.newyorkfed.org/markets/reference-rates/sofr';

// Rate update intervals (in milliseconds)
export const UPDATE_INTERVALS = {
  TREASURY: 5 * 60 * 1000, // 5 minutes
  SOFR: 15 * 60 * 1000,    // 15 minutes
  MARKET: 60 * 60 * 1000,  // 1 hour
} as const;
