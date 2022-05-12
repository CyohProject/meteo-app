import weatherData from './weatherData'
const moment = require('moment')
const { Divider, Box, Grid } = require('@mui/material')

export default function WeatherTable (props) {
  const meteoAreaData = weatherData(props.APIweatherData) // Get data and mount into structure
  const { location, current } = meteoAreaData

  moment.locale('en') // Stablish english for APIweatherData through moment.js

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {showLocation(location)}
          {showDate()}
        </Grid>
        <Grid container m={3}>
          <Grid item xs={4}>
            {weatherAndTemperature(current)}
          </Grid>
          <Grid item xs={8}>
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
      sx={{ fontSize: '1.6em', fontWeight: 'bold' }}
    >
      {locationData.name}, {locationData.country}
    </Box>
  )
}

const showDate = () => {
  const allDate = moment().toObject()
  return (
    <Box
      sx={{ fontSize: '1em' }}
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
        <Grid item xs={4}>
          <Box>
            <img
              src={'http://openweathermap.org/img/wn/' +
                current.icon + '.png'} alt='weather-icon'
            />
          </Box>
          <Box> {current.description} </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{ fontSize: '3em' }}
          > {Math.round(current.temperature)} ºC
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

const currentBasicWeather = (current) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center'
        }}
        >
          {current.maxTemperature} ºC+ / {current.minTemperature} ºC-
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center'
        }}
        >
          {current.humidity} %
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center'
        }}
        >
          {current.pressure} mb
        </Box>
        <Divider />
      </Grid>
      <Grid item xs={6}>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center'
        }}
        >
          {current.wind_direction} / {current.wind_speed} km/h
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center'
        }}
        >
          {current.sunrise} /
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center'
        }}
        >
          {current.sunset} \
        </Box>
        <Divider />
      </Grid>
    </Grid>
  )
}
