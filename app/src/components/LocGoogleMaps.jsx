import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Marker = ({ text }) => (
  <IconContext.Provider value={{ color: 'red' }}>
    <li style={{ listStyle: 'none', width: 10 + 'px', height: 10 + 'px' }}>
      <FaMapMarkerAlt style={{ width: 50 + 'px', height: 50 + 'px' }} />
      <span style={{ backgroundColor: 'white', borderRadius: 6 }}>{text}</span>
    </li>
  </IconContext.Provider>
)

export default function LocGoogleMaps () {
  const props = {
    center: {
      lat: 41.9,
      lng: 1.50
    },
    zoom: 5
  }

  const _onClick = ({ lat, lng }) => {
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_API_KEY }}
        center={props.center}
        zoom={props.zoom}
        onClick={_onClick}
      >
        <Marker
          lat={props.center.lat}
          lng={props.center.lng}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  )
}
