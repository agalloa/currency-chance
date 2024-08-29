import React, { useEffect, useState } from "react";
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
  baseCurrency,
  targetCurrency,
}: CurrencySelectorProps) => {
  const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
  const [selectedBaseCurrency, setSelectedBaseCurrency] =
    useState<CurrencyOption | null>(null);
  const [selectedTargetCurrency, setSelectedTargetCurrency] =
    useState<CurrencyOption | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRatesCurrencies();
        setRates(data.conversion_rates);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (rates) {
      setSelectedBaseCurrency({
        value: baseCurrency,
        label: baseCurrency,
      });
      setSelectedTargetCurrency({
        value: targetCurrency,
        label: targetCurrency,
      });
    }
  }, [baseCurrency, targetCurrency, rates]);

  const handleBaseCurrencyChange = (selectedOption: CurrencyOption | null) => {
    setSelectedBaseCurrency(selectedOption);
    if (selectedOption) {
      onBaseCurrencyChange(selectedOption.value);
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

  return (
    <CurrencySelectorContainer>
      {rates && (
        <>
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
              options={currencyOptions}
              isSearchable
              placeholder="Seleccionar moneda..."
            />
          </ExchangeRateContainer>
        </>
      )}
    </CurrencySelectorContainer>
  );
};
