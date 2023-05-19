import React from 'react'
import { Row } from 'antd'
import GoogleMapReact from 'google-map-react'
import { FaMapMarker } from 'react-icons/fa'
import { colors } from '../styles/colors'

const Marker = () => {
  return (
    <div>
      <FaMapMarker size={30} color={colors.yellow} />
    </div>
  )
}

const MapCard = ({ center }) => {
  return (
    <Row style={adStyles.mapContainer}>
      <GoogleMapReact bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }} center={center} defaultZoom={15}>
        <Marker lat={center.lat} lng={center.lng} text='My Marker' />
      </GoogleMapReact>
    </Row>
  )
}

const adStyles = {
  mapContainer: {
    backgroundColor: colors.white,
    height: '50vh',
    padding: '2vh',
    margin: '1vh 5vw 1vh 5vw',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)',
  },
}

export { MapCard }
