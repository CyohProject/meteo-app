import MeteoArea from './MeteoSection/MeteoArea'
import Alerts from './Alerts'
import CommentsMain from './CommentsMain'
import { useState } from 'react'
import TabPanel from './TabPanel'
import { FiAlertTriangle } from 'react-icons/fi'
import { GoComment } from 'react-icons/go'
import '../styles/MainPage.css'
const { Box, Grid, Tabs, Tab } = require('@mui/material')

/** TODO
 *
 */
export default function MainPage (props) {
  const [feedTab, setFeedTab] = useState(0)

  const handleFeedTabs = (e, newTab) => {
    setFeedTab(newTab)
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
            <Tabs value={feedTab} onChange={handleFeedTabs}>
              <Tab label={<span id='AlertsTab'><FiAlertTriangle color='red' /> Alerts </span>} />
              <Tab label={<span id='CommentsTab'><GoComment color='blue' /> Comments </span>} />
            </Tabs>
          </Box>
          <TabPanel value={feedTab} index={0}>
            <Alerts />
          </TabPanel>
          <TabPanel value={feedTab} index={1}>
            <CommentsMain />
          </TabPanel>
        </Grid>
      </Grid>
    </>
  )
}
