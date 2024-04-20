import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: []
};

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses = action.payload
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    }
  }
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
