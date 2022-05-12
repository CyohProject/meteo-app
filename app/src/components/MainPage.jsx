import MeteoArea from './MeteoSection/MeteoArea'

export default function MainPage (props) {
  return (
    <>
      <MeteoArea APIweatherData={props.APIweatherData} />
    </>
  )
}
