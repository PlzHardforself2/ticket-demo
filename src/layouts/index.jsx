import React from 'react'
import { Layout, Row, Col } from 'antd'
import constant from './constant'
import CusHeader from './CusHeader'
import CusSider from './CusSider'
// import CusContent from './CusContent'

const LayoutMain = props => {
  console.log(props)
  return (
    <Layout style={{ minHeight: '100vh', height: '100%' }}>
      <Layout
        style={{ minWidth: constant.MIN_SCREEN_WIDTH - constant.SIDER_WIDTH }}
      >
        <CusHeader />
        <Row>
          <Col style={{ width: '200px', backgroundColor: '#F0F2F5' }} span={3}>
            <CusSider />
          </Col>
          <Col style={{ width: 'calc(100% - 200px)' }} span={21}>
            {/* <CusContent /> */}
            {props.children}
          </Col>
        </Row>
      </Layout>
    </Layout>
  )
}

export default LayoutMain
