
import {
  // Weather properties icons
  WiStrongWind, WiHumidity
} from 'react-icons/wi'
import { BsCloudRain } from 'react-icons/bs'
import { showWindDirection } from './tools'
const moment = require('moment')
const { Box, Grid } = require('@mui/material')
/** TODO
 * Mejorar inidicaciones de valores (para entender mejor qué es cada valor)
 */
export default function Daily (props) {
  const { daily } = props

  moment.locale('en') // Stablish english for APIweatherData through moment.js

  return (
    <>
      <Grid
        container
        // sx={{
        //   my: '0.4em',
        //   height: '100vh',
        //   overflow: 'scroll'
        // }}
      >
        {/* <Box style={{ maxHeight: '30em', overflow: 'auto' }}></Box> */}
        {showDaily(daily)}
      </Grid>
    </>
  )
}

const showDaily = (daily) => {
  console.log(daily)
  return daily.map((day, index) => {
    console.log(day)
    return (
      <Grid container key={index} sx={{ my: '0.4em' }}>
        <Grid item xs={2}>
          <Box> {index} </Box>
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
          <Box> {Math.round(day.temperature)} ºC </Box>
        </Grid>
        <Grid item xs={2}>

          <Box> ?<BsCloudRain /> {day.rainProbability} %</Box>
        </Grid>
        <Grid item xs={2}>
          <Box> <WiHumidity /> {day.humidity} % </Box>
        </Grid>
        <Grid item xs={2}>
          <Box> {day.wind_speed} km/h <WiStrongWind />{showWindDirection(day.wind_direction)} </Box>
        </Grid>
        {/* <Grid item xs={2}>
          <Box> {day.details} </Box>
        </Grid> */}
      </Grid>
    )
  })
}
