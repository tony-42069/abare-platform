import { z } from 'zod';

// Property Types
export enum PropertyType {
  Office = 'office',
  Retail = 'retail',
  Industrial = 'industrial',
  Multifamily = 'multifamily',
  Mixed = 'mixed',
  Other = 'other'
}

// Financial Analysis Types
export const FinancialMetricsSchema = z.object({
  noi: z.number(),
  capRate: z.number(),
  irr: z.number(),
  cashOnCash: z.number(),
  debtServiceCoverage: z.number(),
  loanToValue: z.number()
});

export type FinancialMetrics = z.infer<typeof FinancialMetricsSchema>;

// Investment Analysis Types
export const InvestmentAnalysisSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  purchasePrice: z.number(),
  squareFeet: z.number(),
  occupancyRate: z.number(),
  metrics: FinancialMetricsSchema
});

export type InvestmentAnalysis = z.infer<typeof InvestmentAnalysisSchema>;

// Risk Analysis Types
export const RiskAnalysisSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  marketRisk: z.number(),
  tenantRisk: z.number(),
  locationRisk: z.number(),
  propertyConditionRisk: z.number(),
  overallRisk: z.number()
});

export type RiskAnalysis = z.infer<typeof RiskAnalysisSchema>;
