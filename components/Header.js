import React from 'react'
import { Layout, Typography } from 'antd'

const { Title } = Typography

const AppHeader = () => {
  return (
    <Layout style={adStyles.container}>
      <Title>Maps Autocomplete</Title>
    </Layout>
  )
}

const adStyles = {
  container: {
    alignItems: 'center',
    padding: '0 5vw',
  },
}

export { AppHeader }
