import { useSelector } from 'react-redux'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsInfoCircle } from 'react-icons/bs'
import moment from 'moment'
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
    return <p id='no-alerts'>There are no weather alerts right now at your location</p>
  }

  const showAlerts = () => {
    return alerts.map((alert, index) => {
      return (
        <li key={index} className='alert'>
          <div id='alert-head'>
            <h3><strong>{alert.event}</strong></h3>
            <BsInfoCircle className={alertDetail ? 'alertDetailActive' : 'alertDetail'} onMouseEnter={showAlertDetail} onMouseLeave={showAlertDetail} />
            <div className={alertDetail ? 'alertDetailActive' : 'alertDetail'}>
              {alert.tags[0]}
            </div>
          </div>
          <br />
          <p id='alert-info'>{alert.description}</p>
          <br />
          <div id='alert-dates'>
            <em>Start: </em>{moment(alert.start * 1000).format('dddd, D MMMM, h:mm:ss a')}
            <br />
            <em>End: </em>{moment(alert.end * 1000).format('dddd, D MMMM, h:mm:ss a')}
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='alerts-title'>
        <FiAlertTriangle color='red' className='alerts-title' />
        <span>Alerts</span>
      </h1>
      <ul>
        {!alerts ? noAlerts() : showAlerts()}
      </ul>
    </>
  )
}
