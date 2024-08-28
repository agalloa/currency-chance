import { useState } from 'react';
import { CurrencySelector } from '../ui/CurrencySelector/CurrencySelector';
import { convertCurrency } from '../../services/convertCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { addConversion } from '../../redux/historySlice';
import { AppDispatch, RootState } from '../../redux/store';
import { History } from '../History/History';

export const ConversionForm = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [baseCurrency, setBaseCurrency] = useState<string>('COP');
  const [targetCurrency, setTargetCurrency] = useState<string>('');
  const [conversionResult, setConversionResult] = useState<number | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const history = useSelector((state: RootState) => state.history.history);

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
        setConversionResult(data.conversion_result);
        dispatch(addConversion({ baseCurrency, targetCurrency, amount, result: data.conversion_result }));
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
          onChange={handleAmountChange}
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
      {history.length > 0 && <History />}
    </div>
  );
};