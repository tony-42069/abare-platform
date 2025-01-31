import { z } from 'zod';
import { PropertyType } from '@abare/core';

// Treasury Rate Types
export const TreasuryRateSchema = z.object({
  date: z.date(),
  rate: z.number(),
  term: z.number() // in years
});

export type TreasuryRate = z.infer<typeof TreasuryRateSchema>;

// SOFR Rate Types
export const SofrRateSchema = z.object({
  date: z.date(),
  rate: z.number(),
  term: z.enum(['overnight', '30day', '90day', '180day'])
});

export type SofrRate = z.infer<typeof SofrRateSchema>;

// Market Spread Types
export const MarketSpreadSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  date: z.date(),
  spread: z.number(),
  loanType: z.enum(['fixed', 'floating'])
});

export type MarketSpread = z.infer<typeof MarketSpreadSchema>;

// Cap Rate Types
export const CapRateSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  date: z.date(),
  rate: z.number(),
  market: z.string()
});

export type CapRate = z.infer<typeof CapRateSchema>;
