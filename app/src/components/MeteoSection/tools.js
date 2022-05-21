import {
  // Wind direction
  WiDirectionUp, WiDirectionUpRight,
  WiDirectionRight, WiDirectionDownRight,
  WiDirectionDown, WiDirectionDownLeft,
  WiDirectionLeft, WiDirectionUpLeft,
  // Moonphase
  WiMoonAltNew, WiMoonAltWaxingCrescent3,
  WiMoonFirstQuarter, WiMoonAltWaxingGibbous3,
  WiMoonAltFull, WiMoonAltWaningGibbous3,
  WiMoonThirdQuarter, WiMoonAltWaningCrescent3,
  // Weather properties icons
  WiStrongWind, WiThermometer
} from 'react-icons/wi'
import {
  BsSunrise, BsSunsetFill, BsCloudRain
} from 'react-icons/bs'
import { boxStyle, t } from '../../styles/Box'

const moment = require('moment')
const { Divider, Box, Grid } = require('@mui/material')

/**
 * Show location info like name and country
 * @param {*} locationData location data object
 * @returns location name and country
 */
export const showLocation = (locationData) => {
  return (
    <Box
      sx={{ fontSize: '1.55em', fontWeight: 'bold' }}
    >
      {locationData.name}, {locationData.country}
    </Box>
  )
}

/**
 * Get date with moment.js and parse into custom date format
 * @returns date
 */
export const showDate = () => {
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

/**
 * Show current temperature, weather icon and weather description
 * @param {*} current object with current data and its details
 * @returns view temperature, weather icon and weather description
 */
export const weatherAndTemperature = (current) => {
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

/**
 * Shows current weather data, only basic as we define not details
 * @param {*} current object with current weather data
 * @returns Grid structure with current weather data
 */
export const currentBasicWeather = (current) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Divider />
        <Box sx={boxStyle}>
          <WiThermometer color='red' /> {current.maxTemperature} ºC
        </Box>
        <Divider />
        <Box sx={boxStyle}> <BsCloudRain /> {t()} {current.rainProbability} % </Box>
        <Divider />
        <Box sx={boxStyle}> <BsSunrise /> {t()} {current.sunrise} </Box>
        <Divider />
      </Grid>
      <Grid item xs={6}>
        <Divider />
        <Box sx={boxStyle}>
          <WiThermometer color='blue' />{current.minTemperature} ºC
        </Box>
        <Divider />
        <Box sx={boxStyle}>
          {current.wind_speed} km/h <WiStrongWind />{showWindDirection(current.wind_direction)}
        </Box>
        <Divider />
        <Box sx={boxStyle}> <BsSunsetFill /> {t()} {current.sunset} </Box>
        <Divider />
      </Grid>
    </Grid>
  )
}

/**
 * Interpret wind direction value into directional icon
 * @param {*} direction wind degree number value
 * @returns wind direction icon
 */
export const showWindDirection = (direction) => {
  const size = '2em'
  if (direction > 337.5) return <WiDirectionUp size={size} />
  if (direction > 292.5) return <WiDirectionUpLeft size={size} />
  if (direction > 247.5) return <WiDirectionLeft size={size} />
  if (direction > 202.5) return <WiDirectionDownLeft size={size} />
  if (direction > 157.5) return <WiDirectionDown size={size} />
  if (direction > 122.5) return <WiDirectionDownRight size={size} />
  if (direction > 67.5) return <WiDirectionRight size={size} />
  if (direction > 22.5) return <WiDirectionUpRight size={size} />

  return <WiDirectionUpRight size={size} />
}

/**
 * Show moon phase icon
 * @param {*} moonphase
 * @returns moonphase icon
 */
export const showMoonPhase = (moonphase) => {
  if (moonphase === 0) { // New moon
    return <WiMoonAltNew />
  }
  if (moonphase > 0 && moonphase < 0.25) { // Waxing crescent
    return <WiMoonAltWaxingCrescent3 />
  }
  if (moonphase === 0.25) { // First quarter
    return <WiMoonFirstQuarter />
  }
  if (moonphase > 0.25 && moonphase < 0.5) { // Waxing gibbous
    return <WiMoonAltWaxingGibbous3 />
  }
  if (moonphase === 0.5) { // Full moon
    return <WiMoonAltFull />
  }
  if (moonphase > 0.5 && moonphase < 0.75) { // Waning gibbous
    return <WiMoonAltWaningGibbous3 />
  }
  if (moonphase === 0.75) { // Last quarter
    return <WiMoonThirdQuarter />
  }
  if (moonphase > 0.75 && moonphase <= 1) { // Waning crescent
    return <WiMoonAltWaningCrescent3 />
  }
}
