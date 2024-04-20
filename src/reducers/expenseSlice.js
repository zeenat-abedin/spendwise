import { createSlice } from '@reduxjs/toolkit';

let nextExpenseId = 1;

const initialState = {
    expenses: [
        {
            id: 1,
            description: "",
            amount: ""
        }
  ]
};

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action) {
    const { description, amount } = action.payload;
      state.expenses.push({
        id: nextExpenseId++,
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
