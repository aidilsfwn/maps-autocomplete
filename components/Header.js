import React from 'react'
import { Switch, Row } from 'antd'
import { colors } from '../constants/colors'
import styles from '../styles/Header.module.css'

const AppHeader = () => {
  return (
    <Row style={adStyles.container}>
      <h1 className={styles.title}>Maps Autocomplete</h1>
      <Switch />
    </Row>
  )
}

const adStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    color: colors.secondary,
    padding: '0 5vw',
  },
}

export { AppHeader }
