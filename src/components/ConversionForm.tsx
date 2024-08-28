import { useEffect, useState } from "react";
import { Currency } from "../interfaces";
import { getAllCurrencies } from "../services/getAllCurrencies";
import Select from 'react-select';


export interface ConversionFormProps {
  onConversion: (conversion: Conversion) => void;
}

export interface Conversion {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  result: number;
}

export const ConversionForm = () => {
  const [allCurrencies, setAllCurrencies] = useState<Currency[]>([]);


  useEffect(() => {
    getAllCurrencies().then(data => {
      const currencyOptions = data.currencies.map((currency: Currency) => ({
        value: currency.iso,
        label: `${currency.iso} - ${currency.currency_name}`
      }));
      setAllCurrencies(currencyOptions);
    });
  }, []);

  const handleConversion = () => {
    console.log("Conversion");
  };

  

  return (
    <div>
      <input
        type="number"
        value="value"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Cantidad"
      />
      <Select
        options={allCurrencies}
        onChange={handleConversion}
        isSearchable
        placeholder="Escribe la moneda a convertir..."
      />
      <Select
        options={allCurrencies}
        onChange={handleConversion}
        isSearchable
        placeholder="Escribe la moneda de destino..."
      />
      <button onClick={handleConversion}>Convertir</button>
    </div>
  );
};
