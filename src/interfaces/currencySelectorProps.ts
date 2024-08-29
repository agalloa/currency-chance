export interface CurrencySelectorProps {
    onBaseCurrencyChange: (value: string) => void;
    onTargetCurrencyChange: (value: string) => void;
    baseCurrency: string;
    targetCurrency: string;
  }