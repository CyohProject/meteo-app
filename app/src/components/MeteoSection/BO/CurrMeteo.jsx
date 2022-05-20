import {
  showLocation,
  showDate,
  weatherAndTemperature,
  currentBasicWeather
} from './tools'
const moment = require('moment')
const { Grid } = require('@mui/material')

/**
 * Displays current weather info, like location, temperature, weather icon...
 * @param {*} props weather data to obtain current and location data
 * @returns
 */
export default function CurrMeteo (props) {
  const meteoAreaData = props.meteoAreaData
  const { location, current } = meteoAreaData

  moment.locale('en') // Stablish english for APIweatherData through moment.js

  return (
    <>
      <Grid container id='currMeteoContainer'>
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
