export * from './types';

// Re-export dependencies for convenience
export { z } from 'zod';
export { create, all } from 'mathjs';

// Initialize mathjs with required configuration
export const math = create(all, {
  number: 'BigNumber',
  precision: 64
});
