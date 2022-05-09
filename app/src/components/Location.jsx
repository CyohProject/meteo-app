import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { obtainLocInfoManual } from '../reducers/locationReducer.js'
import '../styles/Location.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

/**
 * TODO
 * Botón para obtener ubicación y datos actuales
 * Persistir datos de state
 * Si hay un usuario, guardar el nombre de la localización en el usuario
 * Style
 */
export default function Location () {
  const [locName, setLocName] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoc = (e) => {
    e.preventDefault()

    dispatch(obtainLocInfoManual(locName))
    setLocName('')

    navigate('/')
  }

  const _onClick = e => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div id='location'>
      <form onSubmit={handleLoc}>
        <input
          type='text'
          value={locName}
          name='location'
          placeholder='Localización'
          id='location-manual'
          onChange={({ target }) => setLocName(target.value)}
        />
      </form>
      <button onClick={_onClick}>
        <FaMapMarkerAlt />
      </button>
    </div>
  )
}
