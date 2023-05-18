import React from 'react'
import { Row, Col, Input } from 'antd'
import { StandaloneSearchBox } from '@react-google-maps/api'
import styles from '../styles/Home.module.css'

const { Search } = Input

const SearchCard = ({ inputRef, onPlacesChanged, recent }) => {
  return (
    <Row style={adStyles.searchContainer}>
      <Col span={24}>
        <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={onPlacesChanged}>
          <Search placeholder='Enter a location...' />
        </StandaloneSearchBox>
        {recent.length > 0 && (
          <>
            <p className={styles.text}>Recent searches:</p>
            {recent.map((item, index) => {
              if (index < 5) return <p key={item}>{item}</p>
            })}
          </>
        )}
      </Col>
    </Row>
  )
}

const adStyles = {
  searchContainer: {
    padding: '2vh',
    margin: '2vh 5vw 1vh 5vw',
    borderRadius: 20,
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)',
  },
}

export { SearchCard }
