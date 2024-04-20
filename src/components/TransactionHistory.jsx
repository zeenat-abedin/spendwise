import React from 'react'
import { useSelector } from 'react-redux';

import { Layout, Menu } from 'antd'
const { Sider } = Layout;

function TransactionHistory() {
  const expenses = useSelector(state => state.expenses);
  const { description, amount, id } = expenses[0];
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
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        theme="dark"
      >
        <Menu.Item key={id} >
            {description} - Rs.{amount}
          </Menu.Item>
      </Menu>
     </Sider>
      
  )
}

export default TransactionHistory
