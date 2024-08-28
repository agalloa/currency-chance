import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearHistory } from "../../redux/historySlice";

export const History = () => {
  const history = useSelector((state: RootState) => state.history.history);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div>
      <h2>Conversion History</h2>
      {history.length === 0 ? (
        <p>No conversions yet.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.amount} {entry.baseCurrency} to {entry.targetCurrency} ={" "}
              {entry.result}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};
