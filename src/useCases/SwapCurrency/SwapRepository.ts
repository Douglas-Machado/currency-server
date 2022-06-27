export interface SwapData {
  from: string;
  to: string;
  amount?: number;
}

export type amount = number
export type value = number

export interface SwapRepository {
  execute: (data: SwapData) => Promise<string>;
  calculateValue: (amount: amount, value: value) => number
}