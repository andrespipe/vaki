export interface ICurrency {
  entity: string;
  currency: string;
  code: string;
  minorUnit: number | null;
  conversionFactor: number;
}
