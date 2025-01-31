import { z } from 'zod';
import { PropertyType } from '@abare/core';

// Financial Calculation Types
export const FinancialMetricsSchema = z.object({
  noi: z.number(),
  capRate: z.number(),
  irr: z.number(),
  cashOnCash: z.number(),
  dscr: z.number(),
  debtYield: z.number(),
  equityMultiple: z.number(),
  leveragedIrr: z.number(),
  breakEvenOccupancy: z.number(),
  operatingExpenseRatio: z.number(),
});

export type FinancialMetrics = z.infer<typeof FinancialMetricsSchema>;

// Investment Analysis Types
export const InvestmentAssumptionsSchema = z.object({
  purchasePrice: z.number(),
  downPayment: z.number(),
  loanAmount: z.number(),
  interestRate: z.number(),
  amortizationYears: z.number(),
  holdingPeriod: z.number(),
  capRateAtSale: z.number(),
  annualRentGrowth: z.number(),
  annualExpenseGrowth: z.number(),
  closingCosts: z.number(),
  renovationCosts: z.number(),
});

export type InvestmentAssumptions = z.infer<typeof InvestmentAssumptionsSchema>;

// Operating Statement Types
export const OperatingStatementSchema = z.object({
  grossPotentialRent: z.number(),
  otherIncome: z.number(),
  vacancy: z.number(),
  effectiveGrossIncome: z.number(),
  operatingExpenses: z.record(z.string(), z.number()),
  netOperatingIncome: z.number(),
  debtService: z.number(),
  cashFlow: z.number(),
});

export type OperatingStatement = z.infer<typeof OperatingStatementSchema>;

// Market Analysis Types
export const MarketAnalysisSchema = z.object({
  propertyType: z.nativeEnum(PropertyType),
  marketRents: z.record(z.string(), z.number()),
  occupancyRates: z.record(z.string(), z.number()),
  capRates: z.record(z.string(), z.number()),
  rentGrowth: z.number(),
  absorption: z.number(),
  newSupply: z.number(),
  demographics: z.record(z.string(), z.unknown()),
});

export type MarketAnalysis = z.infer<typeof MarketAnalysisSchema>;

// Risk Analysis Types
export const RiskFactorsSchema = z.object({
  marketRisk: z.number(),
  tenantRisk: z.number(),
  locationRisk: z.number(),
  propertyConditionRisk: z.number(),
  financialRisk: z.number(),
  overallRisk: z.number(),
  riskFactors: z.array(z.object({
    name: z.string(),
    score: z.number(),
    weight: z.number(),
    description: z.string(),
  })),
});

export type RiskFactors = z.infer<typeof RiskFactorsSchema>;

// Sensitivity Analysis Types
export const SensitivityAnalysisSchema = z.object({
  variable: z.string(),
  baseValue: z.number(),
  range: z.array(z.number()),
  results: z.array(z.object({
    value: z.number(),
    metrics: FinancialMetricsSchema,
  })),
});

export type SensitivityAnalysis = z.infer<typeof SensitivityAnalysisSchema>;
