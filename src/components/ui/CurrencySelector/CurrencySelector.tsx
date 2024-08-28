import { useEffect, useState } from 'react';
import { getRatesCurrencies } from '../../../services/getRatesCurrencies';
import { CurrencyOption, CurrencySelectorProps } from '../../../interfaces';
import Select from 'react-select';

export const CurrencySelector = ({ onBaseCurrencyChange, onTargetCurrencyChange }: CurrencySelectorProps) => {
    const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
  const [baseCurrency, setBaseCurrency] = useState<string>('COP');
  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState<CurrencyOption | null>(null);
  const [selectedTargetCurrency, setSelectedTargetCurrency] = useState<CurrencyOption | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRatesCurrencies();
        setRates(data.conversion_rates);

        // Establecer el valor inicial para la moneda base
        if (data.conversion_rates) {
          setSelectedBaseCurrency({
            value: baseCurrency,
            label: baseCurrency
          });
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [baseCurrency]);

  const handleBaseCurrencyChange = (selectedOption: CurrencyOption | null) => {
    setSelectedBaseCurrency(selectedOption);
    if (selectedOption) {
      onBaseCurrencyChange(selectedOption.value);
    }
  };

  const handleTargetCurrencyChange = (selectedOption: CurrencyOption | null) => {
    setSelectedTargetCurrency(selectedOption);
    if (selectedOption) {
      onTargetCurrencyChange(selectedOption.value);
    }
  };
  const currencyOptions = rates ? Object.keys(rates).map(currency => ({
    value: currency,
    label: currency
  })) : [];

    return (
        <div>
      <h1>Exchange Rates</h1>
      {rates && (
        <div>
          <label>Base Currency:</label>
          <Select
            value={selectedBaseCurrency}
            onChange={handleBaseCurrencyChange}
            options={currencyOptions}
            isSearchable
            placeholder="Select base currency"
          />
          <label>Target Currency:</label>
          <Select
            value={selectedTargetCurrency}
            onChange={handleTargetCurrencyChange}
            options={currencyOptions}
            isSearchable
            placeholder="Select target currency"
          />
        </div>
      )}
    </div>
    );
}