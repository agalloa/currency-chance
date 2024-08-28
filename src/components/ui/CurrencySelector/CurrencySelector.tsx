import { useEffect, useState } from "react";
import { getRatesCurrencies } from "../../../services/getRatesCurrencies";
import { CurrencyOption, CurrencySelectorProps } from "../../../interfaces";
import Select from "react-select";
import {
  CurrencySelectorContainer,
  ExchangeRateContainer,
  TitleAmount,
} from "./styled";

export const CurrencySelector = ({
  onBaseCurrencyChange,
  onTargetCurrencyChange,
}: CurrencySelectorProps) => {
  const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
  const [baseCurrency, setBaseCurrency] = useState<string>("COP");
  const [selectedBaseCurrency, setSelectedBaseCurrency] =
    useState<CurrencyOption | null>(null);
  const [selectedTargetCurrency, setSelectedTargetCurrency] =
    useState<CurrencyOption | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRatesCurrencies();
        setRates(data.conversion_rates);

        if (data.conversion_rates) {
          setSelectedBaseCurrency({
            value: baseCurrency,
            label: baseCurrency,
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
      setSelectedTargetCurrency(null);
    }
  };

  const handleTargetCurrencyChange = (
    selectedOption: CurrencyOption | null
  ) => {
    setSelectedTargetCurrency(selectedOption);
    if (selectedOption) {
      onTargetCurrencyChange(selectedOption.value);
    }
  };

  const currencyOptions = rates
    ? Object.keys(rates).map((currency) => ({
        value: currency,
        label: currency,
      }))
    : [];

  const filteredCurrencyOptions = currencyOptions.filter(
    (option) => option.value !== selectedBaseCurrency?.value
  );

  return (
    <div>
      {rates && (
        <CurrencySelectorContainer>
          <ExchangeRateContainer>
            <TitleAmount>Convertir De:</TitleAmount>
            <Select
              value={selectedBaseCurrency}
              onChange={handleBaseCurrencyChange}
              options={currencyOptions}
              isSearchable
              placeholder="Seleccionar moneda..."
            />
          </ExchangeRateContainer>
          <ExchangeRateContainer>
            <TitleAmount>Convertir A:</TitleAmount>
            <Select
              value={selectedTargetCurrency}
              onChange={handleTargetCurrencyChange}
              options={filteredCurrencyOptions}
              isSearchable
              placeholder="Seleccionar moneda..."
            />
          </ExchangeRateContainer>
        </CurrencySelectorContainer>
      )}
    </div>
  );
};
