import MeteoArea from './MeteoSection/MeteoArea'
import Comments from './Comments'
const { Box, Grid } = require('@mui/material')

export default function MainPage (props) {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{ bgcolor: '#E5EDDE' }}
          >
            <MeteoArea APIweatherData={props.APIweatherData} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ bgcolor: '#F2E1EE' }}
          >
            <Comments />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
