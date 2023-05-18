import React from 'react'
import { Layout, Row, Col } from 'antd'
import { colors } from '../constants/colors'
import styles from '../styles/Footer.module.css'

const AppFooter = () => {
  return (
    <Row>
      <Col span={24}>
        <Layout style={adStyles.container}>
          <p className={styles.text}>Powered by nextjs. Developed by aidilsafwan.</p>
        </Layout>
      </Col>
    </Row>
  )
}

const adStyles = { container: { backgroundColor: colors.primary, color: colors.secondary, alignItems: 'center' } }

export { AppFooter }
