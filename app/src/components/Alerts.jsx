import { useSelector } from 'react-redux'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsInfoCircle } from 'react-icons/bs'
import moment from 'moment'
import 'moment/locale/es'
import { useState } from 'react'
import '../styles/Alerts.css'

/**
 * TODO:
 * Añadir estilo a todo
*/

export default function Alerts () {
  const [alertDetail, setAlertDetail] = useState(false)

  const alerts = useSelector(state => (state.location.alerts))

  const showAlertDetail = () => setAlertDetail(!alertDetail)

  const noAlerts = () => {
    return <p id='no-alerts'>Actualmente no hay alertas meteorológicas en tu localización</p>
  }

  const showAlerts = () => {
    return alerts.map((alert, index) => {
      return (
        <li key={index} className='alert'>
          <div id='alert-head'>
            <h3><strong>{alert.event}</strong></h3>
            <BsInfoCircle onMouseEnter={showAlertDetail} onMouseLeave={showAlertDetail} />
            <div id={alertDetail ? 'alertDetailActive' : 'alertDetail'}>
              {alert.tags[0]}
            </div>
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
        {!alerts ? noAlerts() : showAlerts()}
      </ul>
    </>
  )
}
