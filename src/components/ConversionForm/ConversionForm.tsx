import { useState } from "react";
import { CurrencySelector } from "../ui/CurrencySelector/CurrencySelector";
import { convertCurrency } from "../../services/convertCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addConversion } from "../../redux/historySlice";
import { AppDispatch, RootState } from "../../redux/store";
import { History } from "../History/History";
import Swal from "sweetalert2";
import { FullScreenLoader } from "../ui/FullScreenLoader/FullScreenLoader";
import {
  AmountContainer,
  ContainerResult,
  ConversionButton,
  ConversionFormContainer,
  InputAmount,
  ResultContainer,
  TitleAmount,
  TitleResult,
} from "./styled";
import { formatCurrency } from "../../utils/formatCurrency";


export const ConversionForm = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [baseCurrency, setBaseCurrency] = useState<string>("COP");
  const [targetCurrency, setTargetCurrency] = useState<string>("");
  const [conversionResult, setConversionResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    setAmount(value === "" ? "" : Number(value));
  };

  const handleConversion = async () => {
    if (amount === "" || !baseCurrency || !targetCurrency) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, proporciona la cantidad, la moneda base y la moneda de destino.",
      });
      return;
    }
    setLoading(true);
    try {
      const data = await convertCurrency(baseCurrency, targetCurrency, amount);
      setConversionResult(data.conversion_result);
      dispatch(
        addConversion({
          baseCurrency,
          targetCurrency,
          amount,
          result: data.conversion_result,
        })
      );
    } catch (error) {
      console.error("Error during conversion:", error);
      Swal.fire({
        icon: "error",
        title: "Error en la conversión",
        text: "Hubo un problema al realizar la conversión. Por favor, intenta nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isConvertButtonDisabled =
    amount === "" || !baseCurrency || !targetCurrency;

  return (
    <>
      <ConversionFormContainer>
        <FullScreenLoader visible={loading} />
        <AmountContainer>
          <TitleAmount>Cantidad:</TitleAmount>
          <InputAmount
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Cantidad"
          />
        </AmountContainer>
        <CurrencySelector
          onBaseCurrencyChange={handleBaseCurrencyChange}
          onTargetCurrencyChange={handleTargetCurrencyChange}
        />
        <ConversionButton
          onClick={handleConversion}
          disabled={isConvertButtonDisabled}
        >
          Convertir
        </ConversionButton>
      </ConversionFormContainer>
      <ContainerResult>
        {conversionResult !== null && (
          <>
            <TitleResult>El resultado de la conversión es:</TitleResult>
            <ResultContainer>
              {formatCurrency(conversionResult, targetCurrency)}
            </ResultContainer>
          </>
        )}
      </ContainerResult>
      {history.length > 0 && <History />}
    </>
  );
};
