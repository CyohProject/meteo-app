import {
  // Moonphase
  WiMoonAltNew, WiMoonAltWaxingCrescent3,
  WiMoonFirstQuarter, WiMoonAltWaxingGibbous3,
  WiMoonAltFull, WiMoonAltWaningGibbous3,
  WiMoonThirdQuarter, WiMoonAltWaningCrescent3
} from 'react-icons/wi'
const { Divider, Box, Grid } = require('@mui/material')

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

// Detailed elements
function showDetailsData (details) {
  return Object.keys(details).map((item, index) => {
    return (
      <div key={index}>
        <Box
          sx={{
            height: '1.7em',
            display: 'center',
            fontSize: '0.9em'
          }}
        >
          {item} : {details[item]} {showUnits(item, details)}
        </Box>
        <Divider />
      </div>
    )
  })
}

// const showDetail = (item, details) => {
const showUnits = (item, details) => {
  switch (item) {
    case 'clouds_intensity':
      return ' '
      // return (item ':' details[item]} {showUnits(item, details[item])})
    case 'dew_point':
      return ' ºC'
    case 'feels_like':
      return ' ºC'
    case 'uvi':
      return ' to 10'
    case 'moonPhase':
      return (showMoonPhase(details[item]))
    default:
      break
  }
  return ''
}

const showMoonPhase = (moonphase) => {
  if (moonphase === 0) { // New moon
    return (<span id='moonphaseInfo'> <WiMoonAltNew /> New moon </span>)
  }
  if (moonphase > 0 && moonphase < 0.25) { // Waxing crescent
    return (<span id='moonphaseInfo'> <WiMoonAltWaxingCrescent3 /> Waxing crescent </span>)
  }
  if (moonphase === 0.25) { // First quarter
    return (<span id='moonphaseInfo'> <WiMoonFirstQuarter /> 1st quarter </span>)
  }
  if (moonphase > 0.25 && moonphase < 0.5) { // Waxing gibbous
    return (<span id='moonphaseInfo'> <WiMoonAltWaxingGibbous3 /> Waxing gibbous </span>)
  }
  if (moonphase === 0.5) { // Full moon
    return (<span id='moonphaseInfo'> <WiMoonAltFull /> Full moon </span>)
  }
  if (moonphase > 0.5 && moonphase < 0.75) { // Waning gibbous
    return (<span id='moonphaseInfo'> <WiMoonAltWaningGibbous3 /> Waning gibbous </span>)
  }
  if (moonphase === 0.75) { // Last quarter
    return (<span id='moonphaseInfo'> <WiMoonThirdQuarter /> Last quarter </span>)
  }
  if (moonphase > 0.75 && moonphase <= 1) { // Waning crescent
    return (<span id='moonphaseInfo'> <WiMoonAltWaningCrescent3 /> Waning crescent </span>)
  }
}
