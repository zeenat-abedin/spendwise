import { Col, Layout, Row } from 'antd'

import Chart from './Chart'
import TransactionHistory from './TransactionHistory'

const { Content } = Layout

function MainContent() {
  return (
    <Layout>
            <div>
              <Row gutter={8}>
                <Col span={18}>
                  <Chart />
                </Col>
                <Col span={6}>
                  <TransactionHistory />
                </Col>
              </Row>
            </div>
    </Layout>
  )
}

export default MainContent
