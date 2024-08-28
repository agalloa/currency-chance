import { useState } from 'react';
import { CurrencySelector } from './ui/CurrencySelector/CurrencySelector';
import { convertCurrency } from '../services/convertCurrency';

export const ConversionForm = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [baseCurrency, setBaseCurrency] = useState<string>('COP');
  const [targetCurrency, setTargetCurrency] = useState<string>('');
  const [conversionResult, setConversionResult] = useState<number | null>(null);

  const handleBaseCurrencyChange = (value: string) => {
    setBaseCurrency(value);
  };

  const handleTargetCurrencyChange = (value: string) => {
    setTargetCurrency(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value === '' ? '' : Number(value));
  };
  
  const handleConversion = async () => {
    if (amount !== '' && baseCurrency && targetCurrency) {
      try {
        const data = await convertCurrency(baseCurrency, targetCurrency, amount);
        console.log(data.conversion_result);
        setConversionResult(data.conversion_result);
      } catch (error) {
        console.error("Error during conversion:", error);
      }
    } else {
      console.warn("Please provide amount, base currency, and target currency.");
    }
  };

  return (
    <div>
      <div className="input-amount">
        <label>Amount:</label>
        <input 
          type='number'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder='Amount'
        />
      </div>
      <CurrencySelector 
        onBaseCurrencyChange={handleBaseCurrencyChange} 
        onTargetCurrencyChange={handleTargetCurrencyChange} 
      />
      <button onClick={handleConversion}>Convert</button>
      {conversionResult !== null && (
        <p>Conversion Result: {conversionResult}</p>
      )}
    </div>
  );
};
