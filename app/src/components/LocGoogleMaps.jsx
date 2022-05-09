import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Marker = ({ text, active }) => (
  <IconContext.Provider value={{ color: 'red' }}>
    <li id='marker-li' className={active ? 'marker-active' : 'marker'}>
      <FaMapMarkerAlt id='marker-ico' />
      <span id='marker-loc'>{text}</span>
    </li>
  </IconContext.Provider>
)

export default function LocGoogleMaps () {
  useEffect(() => window.alert('Not implemented yet'))
  // const [locName, setLocName] = useState()
  const [marker, setMarker] = useState(false)
  const [props, setProps] = useState({
    center: {
      lat: 41.9,
      lng: 1.50
    },
    zoom: 7
  })

  const _onClick = async ({ lat, lng }) => {
    // if (marker === false && !locName) {
    //   setMarker(!marker)
    // }
    if (marker === false) {
      setMarker(!marker)
    }
    setProps({
      center: {
        lat,
        lng
      },
      zoom: 9
    })
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
          text={props.center.lat + ',' + props.center.lng}
          active={marker}
        />
      </GoogleMapReact>
    </div>
  )
}
