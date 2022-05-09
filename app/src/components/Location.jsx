import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { obtainLocInfoManual } from '../reducers/locationReducer.js'
import '../styles/Location.css'

/**
 * TODO
 * Mapa Google Maps -> Clicar en cualquier parte obtiene coordenadas y posterior info
 * Botón para obtener ubicación y datos actuales
 * Si hay un usuario, guardar el nombre de la localización en el usuario
 * Style
 * Agregar url del proyecto desplegado a las URL que pueden usar Google Maps API (en plataforma Google)
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

  return (
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
  )
}
