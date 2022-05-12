import MeteoArea from './MeteoSection/MeteoArea'

export default function MainPage (props) {
  const loc = props.loc
  const currMeteo = props.currMeteo
  return (
    <>
      <MeteoArea loc={loc} currMeteo={currMeteo} />
    </>
  )
}
