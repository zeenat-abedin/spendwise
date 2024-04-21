import React from 'react'
import { useSelector } from 'react-redux';

import { Table } from 'antd'

function TransactionHistory() {
  const expenses = useSelector(state => state.expenses) || [];
  console.log(expenses);

  // if (expenses.length === 0) {
  //   return <div>No transactions yet.</div>;
  // }

  const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

  const dataSource = expenses.map((expense, index) => {
    if (!expense || !expense.description || !expense.amount) {
      return null;
    }
    return {
      key: index,
      description: expense.description,
      amount: expense.amount,
    };
  })
        
  return (
    <Table dataSource={dataSource} columns={columns} />    
  )
  
}

export default TransactionHistory
