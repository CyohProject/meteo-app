import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

const Marker = ({ text }) => (
  <IconContext.Provider value={{ color: 'red' }}>
    <li style={{ listStyle: 'none' }}>
      <MdOutlineLocationOn style={{ width: 50 + 'px', height: 50 + 'px' }} />
      <span style={{ backgroundColor: 'white', borderRadius: 6 }}>{text}</span>
    </li>
  </IconContext.Provider>
)

export default function LocGoogleMaps () {
  const [props, setProps] = useState({
    center: {
      lat: 59.955413,
      lng: 30.337
    },
    zoom: 11
  })

  const _onClick = ({ lat, lng }) => setProps({
    center: {
      lat,
      lng
    },
    zoom: 9
  })

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
