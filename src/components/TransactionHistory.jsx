import React from 'react'
import { useSelector } from 'react-redux';

import { Layout } from 'antd'
const { Sider } = Layout;

function TransactionHistory() {
  const expenses = useSelector(state => state.expenses) || [];
  console.log(expenses);

  if (expenses.length === 0) {
    return <div>No transactions yet.</div>;
  }

  return (
    <Sider
        width={300}
        theme="dark"  
        style={{ height: '100vh' }}     
    >
      <h2>Your Transaction History</h2>      
      <div>
      {expenses.map((expense, index) => {
        if (!expense ||!expense.description ||!expense.amount) {
          return null;
        }

        return (
          <div key={index}>
            <p>Description: {expense.description}</p>
            <p>Amount: {expense.amount}</p>
          </div>
        );
      })}
    </div>
    </Sider>
      
  )
}

export default TransactionHistory
