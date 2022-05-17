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
          {item} : {details[item]} {showUnits(item)}
        </Box>
        <Divider />
      </div>
    )
  })
}

const showUnits = (key) => {
  switch (key) {
    // case 'clouds_intensity':
    //   return ''
    case 'dew_point':
      return ' ºC'
    case 'feels_like':
      return ' ºC'
    case 'uvi':
      return ' to 10'
    // case 'moonPhase':
    //   return ''
    default:
      break
  }
  return ''
}
