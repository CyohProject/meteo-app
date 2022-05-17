import {
  // Wind direction
  WiDirectionUp, WiDirectionUpRight,
  WiDirectionRight, WiDirectionDownRight,
  WiDirectionDown, WiDirectionDownLeft,
  WiDirectionLeft, WiDirectionUpLeft,
  // Weather properties icons
  WiHumidity, WiStrongWind, WiSunrise, WiSunset, WiThermometer
} from 'react-icons/wi'

const moment = require('moment')
const { Divider, Box, Grid } = require('@mui/material')

/** TODO
 * Mejorar inidicaciones de valores (para entender mejor qué es cada valor)
 */
export default function CurrMeteo (props) {
  const meteoAreaData = props.meteoAreaData
  const { location, current } = meteoAreaData

  moment.locale('en') // Stablish english for APIweatherData through moment.js

  return (
    <>
      <Grid container>
        <Grid pl={2} pt={1} item xs={11}>
          {showLocation(location)}
          {showDate()}
        </Grid>
        <Grid container m={4}>
          <Grid item xs={4}>
            {weatherAndTemperature(current)}
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={7}>
            {currentBasicWeather(current)}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

const showLocation = (locationData) => {
  return (
    <Box
      sx={{ fontSize: '1.55em', fontWeight: 'bold' }}
    >
      {locationData.name}, {locationData.country}
    </Box>
  )
}

const showDate = () => {
  const allDate = moment().toObject()
  return (
    <Box
      sx={{ fontSize: '1em' }} pl={1} pt={1}
    >
      {moment(allDate).format('dddd') + ', ' +
          allDate.date + ' ' +
          moment(allDate).format('MMMM') + ' ' +
          moment(allDate).format('YYYY') + ' - ' +
          moment(allDate).format('HH:mm')}
    </Box>
  )
}

const weatherAndTemperature = (current) => {
  return (
    <>
      <Grid container>
        <Grid item xs={7}>
          <Box
            sx={{ fontWeight: 'bold', fontSize: '2.3em', alignContent: 'center' }}
          > {Math.round(current.temperature)}<span style={{ fontWeight: 'normal', margin: '0.1em', fontSize: '0.4em' }}> ºC </span>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <img
              src={'http://openweathermap.org/img/wn/' +
                current.icon + '.png'} alt='weather-icon'
            />
          </Box>
          <Box
            sx={{ fontSize: '0.8em' }}
          > {current.description}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

const currentBasicWeather = (current) => {
  let height = 2
  const pt = ((height / 4).toString() + 'em')
  height = height.toString() + 'em'
  const style = {
    height,
    display: 'flex',
    margin: 'auto',
    pt,
    fontSize: '0.8em'
  }
  return (
    <Grid container>
      <Grid item xs={6}>
        <Divider />
        <Box sx={style}>
          <WiThermometer color='red' /> {current.maxTemperature} ºC / <WiThermometer color='blue' />{current.minTemperature} ºC
        </Box>
        <Divider />
        <Box sx={style}> <WiHumidity /> {current.humidity} % </Box>
        <Divider />
        <Box sx={style}> Pressure {current.pressure} mb </Box>
        <Divider />
      </Grid>
      <Grid item xs={6}>
        <Divider />
        <Box sx={style}>
          <WiStrongWind /> {current.wind_speed} km/h {showWindDirection(current.wind_direction)}
        </Box>
        <Divider />
        <Box sx={style}> <WiSunrise /> {current.sunrise} </Box>
        <Divider />
        <Box sx={style}> <WiSunset /> {current.sunset} </Box>
        <Divider />
      </Grid>
    </Grid>
  )
}

const showWindDirection = (direction) => {
  const size = '2em'
  if (direction > 337.5) return <WiDirectionUp size={size} />
  if (direction > 292.5) return <WiDirectionUpLeft size={size} />
  if (direction > 247.5) return <WiDirectionLeft size={size} />
  if (direction > 202.5) return <WiDirectionDownLeft size={size} />
  if (direction > 157.5) return <WiDirectionDown size={size} />
  if (direction > 122.5) return <WiDirectionDownRight size={size} />
  if (direction > 67.5) return <WiDirectionRight size={size} />
  if (direction > 22.5) return <WiDirectionUpRight size={size} />

  return '?'
}
