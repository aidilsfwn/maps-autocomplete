import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'

const { Text } = Typography

const AppFooter = () => {
  return (
    <Row>
      <Col span={24}>
        <Layout style={adStyles.container}>
          <Text italic>Powered by nextjs. Developed by aidilsafwan.</Text>
        </Layout>
      </Col>
    </Row>
  )
}

const adStyles = { container: { marginTop: '5vh', alignItems: 'center' } }

export { AppFooter }
