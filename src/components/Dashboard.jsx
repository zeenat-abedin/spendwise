import {Layout, Menu, theme } from 'antd'
const { Sider } = Layout;

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
        style={{
          height: '100%',
        }}
        items=""
      />
      </Sider>
    </Layout>
  )
}

export default Dashboard
