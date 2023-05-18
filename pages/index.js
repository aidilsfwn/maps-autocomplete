import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import { LoadScript } from '@react-google-maps/api'
import { SearchCard, MapCard } from '../components'
import { colors } from '../constants/colors'

const API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY

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
          <SearchCard inputRef={inputRef} onPlacesChanged={handlePlaceChanged} recent={recent} />
          <MapCard center={center} zoom={zoom} />
        </Layout>
      </LoadScript>
    </div>
  )
}

export default Home
