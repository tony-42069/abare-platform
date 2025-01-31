import { z } from 'zod';

// Base Types
export type UUID = string;
export type Timestamp = string;

// Property Types
export const PropertyTypeEnum = z.enum(['MULTIFAMILY', 'OFFICE', 'RETAIL', 'INDUSTRIAL', 'MIXED_USE']);
export type PropertyType = z.infer<typeof PropertyTypeEnum>;

export const PropertySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string().default('USA'),
  }),
  type: PropertyTypeEnum,
  size: z.object({
    totalSF: z.number(),
    floors: z.number(),
    units: z.number().optional(),
  }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Property = z.infer<typeof PropertySchema>;

// Document Types
export const DocumentTypeEnum = z.enum([
  'OFFERING_MEMORANDUM',
  'RENT_ROLL',
  'OPERATING_STATEMENT',
  'LEASE',
  'MARKET_REPORT',
]);
export type DocumentType = z.infer<typeof DocumentTypeEnum>;

export const DocumentSchema = z.object({
  id: z.string().uuid(),
  type: DocumentTypeEnum,
  propertyId: z.string().uuid(),
  name: z.string(),
  content: z.string(),
  metadata: z.record(z.string(), z.unknown()),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Document = z.infer<typeof DocumentSchema>;

// Analysis Types
export const AnalysisTypeEnum = z.enum([
  'VALUATION',
  'INVESTMENT',
  'RISK',
  'MARKET',
  'UNDERWRITING',
]);
export type AnalysisType = z.infer<typeof AnalysisTypeEnum>;

export const AnalysisSchema = z.object({
  id: z.string().uuid(),
  type: AnalysisTypeEnum,
  propertyId: z.string().uuid(),
  inputs: z.record(z.string(), z.unknown()),
  results: z.record(z.string(), z.unknown()),
  metrics: z.object({
    noi: z.number(),
    capRate: z.number(),
    irr: z.number(),
    cashOnCash: z.number(),
    dscr: z.number(),
  }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Analysis = z.infer<typeof AnalysisSchema>;

// Market Data Types
export const MarketMetricsSchema = z.object({
  treasuryRate: z.number(),
  sofrRate: z.number(),
  spreads: z.record(PropertyTypeEnum, z.number()),
  capRates: z.record(PropertyTypeEnum, z.number()),
  timestamp: z.string().datetime(),
});

export type MarketMetrics = z.infer<typeof MarketMetricsSchema>;

// API Response Types
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown(),
  error: z.string().optional(),
  timestamp: z.string().datetime(),
});

export type ApiResponse = z.infer<typeof ApiResponseSchema>;
