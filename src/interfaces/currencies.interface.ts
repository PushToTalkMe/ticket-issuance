export type CurrencyType = "RUB" | "USD" | "EUR";

export interface CurrencyI {
  RATE: number;
  SIGN: string;
}

export type CurrenciesType = {
  [key in CurrencyType]: CurrencyI;
};
