import WeatherTable from './BO/WeatherTable'

export default function MeteoArea (props) {
  return <WeatherTable APIweatherData={props.APIweatherData} />
}
