
import { showWindDirection } from './tools'
import { boxStyle, t1 } from '../../../styles/Box'
import {
  // Weather properties icons
  WiStrongWind, WiHumidity
} from 'react-icons/wi'
import { BsCloudRain } from 'react-icons/bs'
const moment = require('moment')
const { Box, Grid } = require('@mui/material')

/**
 * Represents daily info from weather data
 * @param {*} props receive details object from weatherData
 * @returns Grid with daily info
 */
export default function Hourly (props) {
  const { hourly } = props

  moment.locale('en') // Stablish english for APIweatherData through moment.js

  return (
    <>
      <Grid container>
        {showHourly(hourly)}
      </Grid>
    </>
  )
}

/**
 * Receive hourly object and map it
 * @param {*} hourly weather object
 * @returns Grid structure with future hourly data
 */
const showHourly = (hourly) => {
  return hourly.map((hour, index) => {
    return (
      <Grid container key={index} sx={{ my: '0.4em' }}>
        <Grid item xs={2}>
          <Box sx={boxStyle}> {index} </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <img
              src={'http://openweathermap.org/img/wn/' +
              hour.icon + '.png'} alt='weather-icon'
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> {Math.round(hour.temperature)} ºC </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> <BsCloudRain /> {t1()} {hour.rainProbability} %</Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> <WiHumidity /> {hour.humidity} % </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> {hour.wind_speed} km/h <WiStrongWind />{showWindDirection(hour.wind_direction)} </Box>
        </Grid>
      </Grid>
    )
  })
}
