import WeatherTable from './BO/weatherTable'

export default function MeteoArea (props) {
  return <WeatherTable APIweatherData={props.APIweatherData} />
}

