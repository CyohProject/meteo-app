
import { boxStyle } from '../../../styles/Box'
import {
  // Weather properties icons
  WiStrongWind, WiHumidity
} from 'react-icons/wi'
import { BsCloudRain } from 'react-icons/bs'
import { showWindDirection } from './tools'
const moment = require('moment')
const { Box, Grid } = require('@mui/material')

/**
 * Represents daily info from weather data
 * @param {*} props receive daily object from weatherData
 * @returns Grid with daily info
 */
export default function Daily (props) {
  const { daily } = props

  moment.locale('en') // Stablish english for APIweatherData through moment.js

  return (
    <>
      <Grid container>
        {showDaily(daily)}
      </Grid>
    </>
  )
}

/**
 * Receive daily object and map it
 * @param {*} daily weather object
 * @returns Grid structure with future daily data
 */
const showDaily = (daily) => {
  return daily.map((day, index) => {
    return (
      <Grid container key={index} sx={{ my: '0.4em' }}>
        <Grid item xs={2}>
          <Box sx={boxStyle}> {index} </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <img
              src={'http://openweathermap.org/img/wn/' +
              day.icon + '.png'} alt='weather-icon'
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> {Math.round(day.temperature)} ºC </Box>
        </Grid>
        <Grid item xs={2}>

          <Box sx={boxStyle}> <BsCloudRain /> {day.rainProbability} %</Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> <WiHumidity /> {day.humidity} % </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={boxStyle}> {day.wind_speed} km/h <WiStrongWind />{showWindDirection(day.wind_direction)} </Box>
        </Grid>
      </Grid>
    )
  })
}
