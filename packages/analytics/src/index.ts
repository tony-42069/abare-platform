import { z } from 'zod';
import * as math from 'mathjs';
import { InvestmentAnalysis, InvestmentAnalysisSchema, RiskAnalysis, RiskAnalysisSchema } from './types';

// Create math.js instance with all functions
const mathInstance = math.create(math.all);

// Financial Analysis Functions
export function calculateNOI(income: number, expenses: number): number {
  return mathInstance.round(income - expenses, 2);
}

export function calculateCapRate(noi: number, propertyValue: number): number {
  return mathInstance.round((noi / propertyValue) * 100, 2);
}

export function calculateIRR(cashFlows: number[]): number {
  return mathInstance.round(mathInstance.irr(cashFlows) * 100, 2);
}

// Investment Analysis Functions
export function analyzeInvestment(data: InvestmentAnalysis): InvestmentAnalysis {
  return InvestmentAnalysisSchema.parse(data);
}

// Risk Analysis Functions
export function analyzeRisk(data: RiskAnalysis): RiskAnalysis {
  return RiskAnalysisSchema.parse(data);
}

// Re-export types
export * from './types';
