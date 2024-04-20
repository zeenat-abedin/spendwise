import { Layout, Menu } from 'antd'
import { DollarCircleOutlined, AccountBookOutlined, BarChartOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard() {   

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
      >
        <SubMenu key="sub1" icon={<DollarCircleOutlined />} title="Bills & Payments">
          <Menu.Item key="1">Bill Management</Menu.Item>
          <Menu.Item key="2">Payment History</Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<AccountBookOutlined />}>
          Expenses
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          My Stats
        </Menu.Item>
      </Menu>
      </Sider>
    </Layout>
  )
}

export default Dashboard
