import WeatherTable from './BO/WeatherTable'
import weatherData from './BO/weatherData'

/** TODO
 * Navbar con detalles, previsión horaria, previsión semanal
 */
export default function MeteoArea (props) {
  const meteoAreaData = weatherData(props.APIweatherData) // Parse rcv api object into personal local object
  return (
    <>
      <WeatherTable meteoAreaData={meteoAreaData} />
    </>
  )
}
