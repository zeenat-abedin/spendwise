import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Menu } from 'antd'
const { Sider } = Layout;

function TransactionHistory() {
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();

  return (
    <Sider
        width={300}
        theme="dark"  
        style={{ height: '100vh' }}     
    >
      <h2>Your Transaction History</h2>      
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        theme="dark"
      >
        {expenses.map(expense => (
        <Menu.Item key={expense.id} >
            {expense.description} - Rs.{expense.amount}
          </Menu.Item>
        ))}
      </Menu>
     </Sider>
      
  )
}

export default TransactionHistory
