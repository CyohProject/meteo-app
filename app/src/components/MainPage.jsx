import MeteoArea from './MeteoSection/MeteoArea'

export default function MainPage ({ loc, currMeteo }) {
  return (
    <>
      <MeteoArea loc={loc} currMeteo={currMeteo} />
    </>
  )
}
