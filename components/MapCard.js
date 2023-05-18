import React from 'react'
import { Row } from 'antd'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { colors } from '../constants/colors'

const MapCard = ({ center, zoom }) => {
  return (
    <Row style={adStyles.mapContainer}>
      <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} zoom={zoom} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </Row>
  )
}

const adStyles = {
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

export { MapCard }
