import React from 'react'
import { Switch, Row, Typography } from 'antd'

const { Title } = Typography

const AppHeader = () => {
  return (
    <Row style={adStyles.container}>
      <Title>Maps Autocomplete</Title>
      <Switch />
    </Row>
  )
}

const adStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5vw',
  },
}

export { AppHeader }
