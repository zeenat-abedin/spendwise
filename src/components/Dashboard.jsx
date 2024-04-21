import { Layout, Menu } from 'antd'
import { DollarCircleOutlined, AccountBookOutlined, BarChartOutlined } from '@ant-design/icons';

import MainContent from './MainContent';
import { Route, useNavigate } from 'react-router-dom';
import TransactionHistory from './TransactionHistory';
const { Sider } = Layout;

function Dashboard() {   
    const navigate = useNavigate();

  const menuItems = [
  {
    key: '1',
    icon: <DollarCircleOutlined />,
    label: 'Bills & Payments',
    path: '/bills-and-payments'
   
  },
  {
    key: '2',
    icon: <AccountBookOutlined />,
    label: 'Transaction History',
    path: '/transaction-history',
  },
  {
    key: '3',
    icon: <BarChartOutlined />,
    label: 'My Stats',
    path: '/my-stats'
  },
  ];
  
  const handleMenuItemClick = (key) => {
  switch (key) {
    case '1':
      navigate('/bills-and-payments');
      break;
    case '2':
      navigate('/transaction-history');
      break;
    case '3':
      navigate('/my-stats');
      break;
    default:
      break;
  }
};

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
        onClick={({ key }) => {
        handleMenuItemClick(key);
        }}
      />
      </Sider>
      <MainContent>
        <Route path="/transaction-history" component={TransactionHistory} />
      </MainContent>
    </Layout>
  )
}

export default Dashboard
