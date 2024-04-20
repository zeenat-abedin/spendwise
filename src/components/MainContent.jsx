import { Col, Row } from 'antd'

import Chart from './Chart'
import TransactionHistory from './TransactionHistory'

function MainContent() {
  return (
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
  )
}

export default MainContent
