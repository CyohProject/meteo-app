import WeatherTable from './BO/WeatherTable'
import Details from './BO/Details'
import weatherData from './BO/weatherData'

import { useState } from 'react'

import TabPanel from '../TabPanel'

import { BiDetail } from 'react-icons/bi'
import { BsCalendar3WeekFill } from 'react-icons/bs'
import { Ri24HoursLine } from 'react-icons/ri'
const { Box, Tabs, Tab } = require('@mui/material')

/** TODO
 * Navbar con detalles, previsión horaria, previsión semanal
 */
export default function MeteoArea (props) {
  const meteoAreaData = weatherData(props.APIweatherData) // Parse rcv api object into personal local object
  return (
    <>
      <WeatherTable meteoAreaData={meteoAreaData} />
      <MeteoTabbar meteoAreaData={meteoAreaData} />
    </>
  )
}

const MeteoTabbar = (props) => {
  const { details } = props.meteoAreaData.current
  const meteoTabIndex = {
    details: 0,
    daily: 1,
    hourly: 2
  }

  const [meteoTab, setMeteoTab] = useState(meteoTabIndex.details)

  const handleMeteoTabs = (e, nextTab) => {
    setMeteoTab(nextTab)
  }

  return (
    <>
      <Box position='relative' sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={meteoTab} onChange={handleMeteoTabs}>
          <Tab label={<span id='DetailsTab'><BiDetail color='black' /> Details </span>} />
          <Tab label={<span id='DetailsTab'><Ri24HoursLine color='darkgreen' /> Hourly </span>} />
          <Tab label={<span id='HourlyTab'><BsCalendar3WeekFill color='brown' /> Daily </span>} />
        </Tabs>
      </Box>
      <TabPanel value={meteoTab} index={meteoTabIndex.details}>
        <Details details={details} />
      </TabPanel>
      <TabPanel value={meteoTab} index={meteoTabIndex.hourly}>
        Hourly
      </TabPanel>
      <TabPanel value={meteoTab} index={meteoTabIndex.daily}>
        Daily
      </TabPanel>
    </>
  )
}
