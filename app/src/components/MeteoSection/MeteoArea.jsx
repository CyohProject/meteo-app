import WeatherTable from './BO/WeatherTable'

/** TODO
 * Navbar con detalles, previsión horaria, previsión semanal
 */
export default function MeteoArea (props) {
  return <WeatherTable APIweatherData={props.APIweatherData} />
}
