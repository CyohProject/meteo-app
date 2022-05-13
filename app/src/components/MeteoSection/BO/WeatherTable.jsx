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
  return (
    <Grid container>
      <Grid item xs={6}>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center',
          fontSize: '0.9em'
        }}
        >
          {current.maxTemperature} ºC+ / {current.minTemperature} ºC-
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center',
          fontSize: '0.9em'
        }}
        >
          {current.humidity} %
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center',
          fontSize: '0.9em'
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
          display: 'center',
          fontSize: '0.9em'
        }}
        >
          {current.wind_direction} / {current.wind_speed} km/h
          {/* {windDirIcon(current.wind_direction)} / {current.wind_speed} km/h */}
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center',
          fontSize: '0.9em'
        }}
        >
          {current.sunrise} /
        </Box>
        <Divider />
        <Box sx={{
          height: '1.7em',
          display: 'center',
          fontSize: '0.9em'
        }}
        >
          {current.sunset} \
        </Box>
        <Divider />
      </Grid>
    </Grid>
  )
}
