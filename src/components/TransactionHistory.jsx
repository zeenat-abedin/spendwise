import React from 'react'
import { Layout, Menu } from 'antd'
const { Sider } = Layout;

function TransactionHistory() {
  return (
    <Sider
        width={300}
        theme="dark"  
        style={{ height: '100vh' }}     
    >
      
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        theme="dark"
      >
        <Menu.Item key="3" >
           Your Transaction History
        </Menu.Item>
        <Menu.Item key="4" >
          Burger King
        </Menu.Item>
      </Menu>
     </Sider>
      
  )
}

export default TransactionHistory
