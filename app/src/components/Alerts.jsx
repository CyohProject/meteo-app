// import { useSelector } from 'react-redux'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsInfoCircle } from 'react-icons/bs'
import moment from 'moment'
import 'moment/locale/es'

/**
 * TODO:
 * Mostrar, en div id=alertDetail, alert.tags[0] cuando te pongas sobre el icono de info
 * Añadir estilo a todo
*/

export default function Alerts () {
  // const alerts = useSelector(state => state.location.currMeteoData.alerts)
  const alerts = [
    {
      event: 'Heat Advisory',
      start: 1597341600,
      end: 1597366800,
      description: '...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.',
      tags: [
        'Extreme temperature value'
      ]
    }
  ]

  const showAlerts = () => {
    return alerts.map((alert, index) => {
      return (
        <li key={index} className='alert'>
          <div id='alert-head'>
            <h3><strong>{alert.event}</strong></h3>
            <BsInfoCircle />
            <div id='alertDetail' />
          </div>
          <br />
          <p id='alert-info'>{alert.description}</p>
          <br />
          <div id='alert-dates'>
            <em>Inicio: </em>{moment(alert.start).format('dddd, D [de] MMMM, h:mm:ss a')}
            <br />
            <em>Fin: </em>{moment(alert.end).format('dddd, D [de] MMMM, h:mm:ss a')}
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='alerts-title'>
        <FiAlertTriangle color='red' className='alerts-title' />
        Alertas
      </h1>
      <ul>
        {showAlerts()}
      </ul>
    </>
  )
}
