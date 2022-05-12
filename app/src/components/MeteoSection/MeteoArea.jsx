import weatherData from './BO/weatherData'
const moment = require('moment')

export default function MeteoArea (props) {
  const meteoAreaData = weatherData(props) // Get data and mount into structure
  const currentMeteoData = Object.entries(meteoAreaData.current)
  currentMeteoData.pop() // Dont want details element which is the last

  // Build data view
  const buildWeatherTable = (entries) => {
    return entries.map((entry, index) => {
      return (
        <tr key={index}>
          <th> {entry[0]} </th>
          <td> {entry[1]} </td>
        </tr>
      )
    })
  }

  // TODO Mantener el aplicativo actualizado

  return (
    <>
      <h3>{showLocation(meteoAreaData.location)}</h3>
      <p>{showDate()}</p>
      <p />
      <table className='currentWeatherData' id='currentWeatherData'>
        <tbody>
          {buildWeatherTable(currentMeteoData)}
        </tbody>
      </table>
    </>
  )
}

const showLocation = (locationData) => {
  return locationData.name + ', ' + locationData.country
}

const showDate = () => {
  const allDate = moment().toObject()
  moment.locale('en')
  return moment(allDate).format('dddd') + ', ' +
    allDate.date + ' ' +
    moment(allDate).format('MMMM') + ' ' +
    moment(allDate).format('YYYY') + ' - ' +
    moment(allDate).format('HH:mm')
}
