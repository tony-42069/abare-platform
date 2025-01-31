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

// Document Types
export const DocumentSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['lease', 'rentRoll', 'operatingStatement', 'plStatement', 'other']),
  uploadDate: z.date(),
  propertyId: z.string(),
  content: z.string()
});

export type Document = z.infer<typeof DocumentSchema>;

// Property Types
export const PropertySchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.nativeEnum(PropertyType),
  address: z.string(),
  squareFeet: z.number(),
  documents: z.array(DocumentSchema)
});

export type Property = z.infer<typeof PropertySchema>;
