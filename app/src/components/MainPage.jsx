import MeteoArea from './MeteoSection/MeteoArea'
import Alerts from './Alerts'
import { useState } from 'react'
import TabPanel from './TabPanel'
import { FiAlertTriangle } from 'react-icons/fi'
const { Box, Grid, Tabs, Tab } = require('@mui/material')

/** TODO
 * Añadir Comments al tabbar
 */
export default function MainPage (props) {
  const [tab, setTab] = useState(0)

  const handleChange = (e, newTab) => {
    setTab(newTab)
  }

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
          <Box position='relative' sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleChange}>
              <Tab label={<FiAlertTriangle />} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <Alerts />
          </TabPanel>
        </Grid>
      </Grid>
    </>
  )
}
