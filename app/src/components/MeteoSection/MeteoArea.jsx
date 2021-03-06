import weatherData from './weatherData'
import CurrMeteo from './CurrMeteo'
import Details from './Details'
import Hourly from './Hourly'
import Daily from './Daily'
import TabPanel from '../TabPanel'
import '../../styles/Meteo.css'

import { useState } from 'react'
import { BiDetail } from 'react-icons/bi'
import { BsCalendar3WeekFill } from 'react-icons/bs'
import { Ri24HoursLine } from 'react-icons/ri'
const { Box, Tabs, Tab } = require('@mui/material')

/**
 * Represents area that displays all weather info in the location given inside props
 * @param {*} props receive 'coords' , 'loc' and 'currMeteo'
 * 'coords' represents coordinates from user device
 * 'loc' represents location data as name, country...
 * 'currMeteo' represents weather data from the stablish location
 * @returns Current Meteo and MeteoTabbar (that contains detailed, hourly and daily data)
 */
export default function MeteoArea (props) {
  // Parse received { coords, loc, currMeteo} into personal local object
  const meteoAreaData = weatherData(props.APIweatherData)

  return (
    <Box>
      <CurrMeteo meteoAreaData={meteoAreaData} />
      <MeteoTabbar meteoAreaData={meteoAreaData} />
    </Box>
  )
}

/**
 * Represents tabbar object from Meteo. It contains Details, Hourly and Daily sections
 * to show extended weather data
 * @param {*} props receive all location weather data to parse into Tabbar childs
 * @returns
 */
const MeteoTabbar = (props) => {
  const { details } = props.meteoAreaData.current
  const { daily, hourly } = props.meteoAreaData

  const meteoTabIndex = {
    details: 0,
    hourly: 1,
    daily: 2
  }

  const [meteoTab, setMeteoTab] = useState(meteoTabIndex.details)

  // Receive event of tab change and stablish the new one throught the state
  const handleMeteoTabs = (e, nextTab) => {
    setMeteoTab(nextTab)
  }

  return (
    <>
      <Box className='mainTabHeader' position='relative' sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={meteoTab} onChange={handleMeteoTabs}>
          <Tab label={<span id='DetailsTab'><BiDetail color='black' /> Details </span>} />
          <Tab label={<span id='HourlyTab'><Ri24HoursLine color='darkgreen' /> Hourly </span>} />
          <Tab label={<span id='DailyTab'><BsCalendar3WeekFill color='brown' /> Daily </span>} />
        </Tabs>
      </Box>
      <Box className='boxFuturePrev'>
        <TabPanel value={meteoTab} index={meteoTabIndex.details}>
          <Details details={details} />
        </TabPanel>
      </Box>
      <Box className='boxFuturePrev'>
        <TabPanel value={meteoTab} index={meteoTabIndex.hourly}>
          <Hourly hourly={hourly} />
        </TabPanel>
      </Box>
      <Box className='boxFuturePrev'>
        <TabPanel value={meteoTab} index={meteoTabIndex.daily}>
          <Daily daily={daily} />
        </TabPanel>
      </Box>
    </>
  )
}
