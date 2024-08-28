import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConversionHistoryState {
  history: Array<{ baseCurrency: string; targetCurrency: string; amount: number; result: number }>;
}

const initialState: ConversionHistoryState = {
  history: JSON.parse(localStorage.getItem('conversionHistory') || '[]'),
};

const conversionHistorySlice = createSlice({
  name: 'conversionHistory',
  initialState,
  reducers: {
    addConversion: (state, action: PayloadAction<{ baseCurrency: string; targetCurrency: string; amount: number; result: number }>) => {
      state.history.push(action.payload);
      localStorage.setItem('conversionHistory', JSON.stringify(state.history));
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.removeItem('conversionHistory');
    },
  },
});

export const { addConversion, clearHistory } = conversionHistorySlice.actions;
export default conversionHistorySlice.reducer;
