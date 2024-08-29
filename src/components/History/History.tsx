import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearHistory } from "../../redux/historySlice";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  CardHistory,
  CardHistoryContent,
  ContainerHistorialButton,
  HistorialButton,
  TitleHistory,
} from "./styled";

export const History = () => {
  const history = useSelector((state: RootState) => state.history.history);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div>
      <TitleHistory>Historial de Conversión</TitleHistory>
      {history.length === 0 ? (
        <p>No conversions yet.</p>
      ) : (
        <CardHistory>
          {history.map((entry, index) => (
            <CardHistoryContent key={index}>
              <div>
                La conversión de: {formatCurrency(entry.amount, entry.baseCurrency)}
              </div>
              <div>
                equivale a: {formatCurrency(entry.result, entry.targetCurrency)}
              </div>
            </CardHistoryContent>
          ))}
        </CardHistory>
      )}
      <ContainerHistorialButton>
        <HistorialButton onClick={handleClearHistory}>
          Limpiar Historial
        </HistorialButton>
      </ContainerHistorialButton>
    </div>
  );
};
