import MeteoArea from './MeteoSection/MeteoArea'
import '../styles/MainPage.css'
import FeedBack from './FeedBack'

const { Grid } = require('@mui/material')

/**
 * Represents the 1st view for users. Contains 2 differents sections split in screen:
 * MeteoArea and FeedBackArea (Weather alerts & comments)
 * @param {*} props receive 'coords' , 'loc' and 'currMeteo'
 * 'coords' represents coordinates from user device
 * 'loc' represents location data as name, country...
 * 'currMeteo' represents weather data from the stablish location
 * @returns a grid container structure with split screen. In left side have MeteoArea
 * and in the right FeedBack section
 */
export default function MainPage (props) {
  // The structure its made with Grid and Box from Material UI
  return (
    <>
      <Grid container id='test'>
        <Grid item xs={6} id='mainMeteoSection'>
          <MeteoArea APIweatherData={props.APIweatherData} />
        </Grid>
        <Grid item xs={6}>
          <FeedBack />
        </Grid>
      </Grid>
    </>
  )
}
