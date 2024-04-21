import { useState } from 'react';

import { Layout, Menu } from 'antd'
import { DollarCircleOutlined, AccountBookOutlined, BarChartOutlined } from '@ant-design/icons';

import MainContent from './MainContent';

const { Sider } = Layout;

function Dashboard() {   
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const menuItems = [
  {
    key: '1',
    icon: <DollarCircleOutlined />,
    label: 'Bills & Payments',
    submenu: [
      {
        key: '1-1',
        label: 'Bill Management',
      },
      {
        key: '1-2',
        label: 'Payment History',
      },
    ],
  },
  {
    key: '2',
    icon: <AccountBookOutlined />,
    label: 'Expense Form',
    onClick: () => setShowExpenseForm(true),
  },
  {
    key: '3',
    icon: <BarChartOutlined />,
    label: 'My Stats',
  },
];

  return (
    <Layout>
     <Sider
        width={200}
        theme="dark"  
        style={{ height: '100vh' }}     
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
          theme="dark"
          items={menuItems}
      />
        </Sider>
     <MainContent/>
    </Layout>
  )
}

export default Dashboard
