import { z } from 'zod';
import { PropertyType } from '@abare/core';

// Treasury Rate Types
export const TreasuryRateSchema = z.object({
  date: z.string().datetime(),
  rate: z.number(),
  change: z.number(),
  source: z.string(),
});

export type TreasuryRate = z.infer<typeof TreasuryRateSchema>;

// SOFR Rate Types
export const SofrRateSchema = z.object({
  date: z.string().datetime(),
  rate: z.number(),
  change: z.number(),
  term: z.enum(['OVERNIGHT', '30DAY', '90DAY', '180DAY', '1YEAR']),
  source: z.string(),
});

export type SofrRate = z.infer<typeof SofrRateSchema>;

// Market Spread Types
export const MarketSpreadSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  baseRate: z.enum(['TREASURY_10Y', 'SOFR_30D', 'SOFR_90D']),
  minSpread: z.number(),
  maxSpread: z.number(),
  typicalSpread: z.number(),
  riskProfile: z.enum(['CORE', 'VALUE_ADD', 'OPPORTUNISTIC']),
  lastUpdated: z.string().datetime(),
});

export type MarketSpread = z.infer<typeof MarketSpreadSchema>;

// Market Cap Rate Types
export const MarketCapRateSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  market: z.string(),
  minRate: z.number(),
  maxRate: z.number(),
  averageRate: z.number(),
  trendDirection: z.enum(['INCREASING', 'DECREASING', 'STABLE']),
  lastUpdated: z.string().datetime(),
});

export type MarketCapRate = z.infer<typeof MarketCapRateSchema>;

// Market Trend Types
export const MarketTrendSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  market: z.string(),
  metric: z.enum(['RENT', 'OCCUPANCY', 'ABSORPTION', 'CONSTRUCTION']),
  value: z.number(),
  change: z.number(),
  period: z.enum(['QTD', 'YTD', 'YOY']),
  lastUpdated: z.string().datetime(),
});

export type MarketTrend = z.infer<typeof MarketTrendSchema>;

// Market Report Types
export const MarketReportSchema = z.object({
  market: z.string(),
  propertyType: z.nativeEnum(PropertyType),
  date: z.string().datetime(),
  metrics: z.object({
    inventory: z.number(),
    vacancy: z.number(),
    netAbsorption: z.number(),
    deliveries: z.number(),
    underConstruction: z.number(),
    averageRent: z.number(),
    rentGrowth: z.number(),
  }),
  trends: z.array(MarketTrendSchema),
  capRates: z.array(MarketCapRateSchema),
  spreads: z.array(MarketSpreadSchema),
});

export type MarketReport = z.infer<typeof MarketReportSchema>;
