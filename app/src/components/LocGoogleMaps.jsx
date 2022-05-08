import React from 'react'
import GoogleMapReact from 'google-map-react'

const Marker = ({ text }) => (
  <li style={{ listStyle: 'none' }}>
    <span>{text}</span>
  </li>
)

export default function LocGoogleMaps () {
  const props = {
    center: {
      lat: 59.955413,
      lng: 30.337
    },
    zoom: 11
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_API_KEY }}
        center={props.center}
        zoom={props.zoom}
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
