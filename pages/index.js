import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { Layout, Input, Row, Col, Button } from 'antd'
import { GoogleMap, StandaloneSearchBox, LoadScript, Marker } from '@react-google-maps/api'
import { colors } from '../constants/colors'
import styles from '../styles/Home.module.css'

const API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY

const { Search } = Input

const Home = () => {
  const inputRef = useRef()
  const [center, setCenter] = useState({ lat: 3.1474660277202906, lng: 101.69953519998894 })
  const [recent, setRecent] = useState([])
  const zoom = 15

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces()
    if (place) {
      let temp = [...recent]
      temp.push(place.formatted_address)
      setRecent(temp)
      setCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() })
    }
  }

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>Maps Autocomplete</title>
      </Head>
      <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
        <Layout style={{ height: '100%', backgroundColor: colors.primary }}>
          <Row style={adStyles.searchContainer}>
            <Col span={24}>
              <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
                <Search placeholder='Enter a location...' />
              </StandaloneSearchBox>
              <Button onClick={() => console.log(process.env)}>Press</Button>
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
          <Row style={adStyles.mapContainer}>
            <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} zoom={zoom} center={center}>
              <Marker position={center} />
            </GoogleMap>
          </Row>
        </Layout>
      </LoadScript>
    </div>
  )
}

const adStyles = {
  searchContainer: {
    color: '#6e6e6e',
    backgroundColor: colors.primary,
    padding: '2vh',
    margin: '2vh 5vw 1vh 5vw',
    borderRadius: 20,
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)',
  },
  mapContainer: {
    height: '100%',
    backgroundColor: colors.primary,
    padding: '2vh',
    margin: '1vh 5vw 3vh 5vw',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)',
  },
}

export default Home
