import { Layout, Menu, theme } from 'antd'
import { DollarCircleOutlined, AccountBookOutlined, BarChartOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
    const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
     <Sider
      style={{
        background: colorBgContainer,
      }}
      width={200}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
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
