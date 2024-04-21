import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: []
};

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action) {
      const { description, amount } = action.payload;
      const id = crypto.randomUUID();

      state.expenses.push({
        id,
        description,
        amount
      })
      },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    }
  }
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
