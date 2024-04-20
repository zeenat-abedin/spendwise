import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/expenseSlice';


const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export default store;