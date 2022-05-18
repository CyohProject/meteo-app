
import weatherData from './BO/weatherData'
import CurrMeteo from './BO/CurrMeteo'
import Details from './BO/Details'
import Hourly from './BO/Hourly'

import { useState } from 'react'

import TabPanel from '../TabPanel'

import { BiDetail } from 'react-icons/bi'
import { BsCalendar3WeekFill } from 'react-icons/bs'
import { Ri24HoursLine } from 'react-icons/ri'
import Daily from './BO/Daily'
const { Box, Tabs, Tab } = require('@mui/material')

/** TODO
 * Navbar con detalles, previsión horaria, previsión semanal
 */
export default function MeteoArea (props) {
  const meteoAreaData = weatherData(props.APIweatherData) // Parse rcv api object into personal local object

  return (
    <>
      <CurrMeteo meteoAreaData={meteoAreaData} />
      <MeteoTabbar meteoAreaData={meteoAreaData} />
    </>
  )
}

const MeteoTabbar = (props) => {
  const { details } = props.meteoAreaData.current
  const { daily, hourly } = props.meteoAreaData

  const meteoTabIndex = {
    details: 0,
    hourly: 1,
    daily: 2
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
        <Hourly hourly={hourly} />
      </TabPanel>
      <TabPanel value={meteoTab} index={meteoTabIndex.daily}>
        <Daily daily={daily} />
      </TabPanel>
    </>
  )
}
