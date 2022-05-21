import { showMoonPhase } from './tools'

import { WiHumidity } from 'react-icons/wi'
import { BsFillCloudyFill } from 'react-icons/bs'
import { boxStyle, t } from '../../styles/Box'

const { Divider, Box, Grid } = require('@mui/material')

/**
 * Represents detailed info from current weather data
 * @param {*} props receive details object from weatherData.current
 * @returns Grid with details info
 */
export default function Details (props) {
  const { details } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <Divider />
        {showDetailsData(details)}
      </Grid>
    </Grid>
  )
}

/**
 * Receive details object and build a detailed weather for tab view
 * @param {*} details details object from weatherData.current
 * @returns detailed weather view
 */
const showDetailsData = (details) => {
  return Object.keys(details).map((item, index) => {
    return (
      <div key={index}>
        <Box sx={boxStyle}>
          {showDetailItem(item, details)}
        </Box>
        <Divider />
      </div>
    )
  })
}

/**
 * Receive an index and details object and build a detailed weather row
 * @param {*} item name of row
 * @param {*} details details object from weatherData.current
 * @returns detailed info row
 */
const showDetailItem = (item, details) => {
  switch (item) {
    case 'clouds_intensity':
      return (<span id={item}> <BsFillCloudyFill /> {details[item]} </span>)
    case 'feels_like':
      return <span id={item}> <b>Feels Like</b>{t()} {details[item]} ºC </span>
    case 'pressure':
      return <span id={item}> <b>Pressure</b>{t()} {details[item]} mb </span>
    case 'uvi':
      return <span id={item}> <b>UVI</b>{t()} {details[item]} to 10 </span>
    case 'dew_point':
      return <span id={item}> <b>Dew Point</b>{t()} {details[item]} ºC </span>
    case 'moonPhase':
      return <span id={item}> <b>MoonPhase</b>{t()} {showMoonPhase(details[item])} </span>
    case 'humidity':
      return <span id={item}> <WiHumidity /> {details[item]} % </span>
    default:
      break
  }
  return ''
}
