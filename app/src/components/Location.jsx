import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { obtainLocInfoManual } from '../reducers/locationReducer.js'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { data } from '../cities.json'
import { Autocomplete, createFilterOptions, TextField } from '@mui/material'

/** TODO
 * @todo Persistir datos establecidos manualmente sin sesión (?)
 * @todo Si hay un usuario, guardar el nombre de la localización en su lista
 * @todo Style
 *
 * @constant handleLoc Send city, and its country info, when it's selected from the list
 * @constant _onClick Reload the current page with the current information setted
 * @constant filterOptions Max cities to show at the same time in the Autocomplete
 * @export Location Component that is used to set a location
 * (current or not)
 * @return {*} WEB DOM
 */
export default function Location () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoc = (e, city) => {
    e.preventDefault()

    dispatch(obtainLocInfoManual(city))

    navigate('/')
  }

  const _onClick = e => {
    e.preventDefault()
    document.location.reload()
  }

  const cities = []
  data.forEach(option => {
    option.cities.forEach(city => {
      cities.push({
        country: option.country,
        country_code: option.iso3,
        name: city
      })
    })
  })

  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    limit: 10
  })

  return (
  /* A React component that allows you to change the color of the icons. */
    <IconContext.Provider value={{ color: 'white' }}>
      <div id='location'>
        <Autocomplete
          filterOptions={filterOptions}
          options={cities.sort((a, b) => -b.country.localeCompare(a.country))}
          groupBy={(city) => city.country}
          getOptionLabel={city => city.name}
          sx={{ width: 300, backgroundColor: 'white', borderRadius: 3 + 'px' }}
          renderInput={(params) => <TextField {...params} label='Location' />}
          onChange={(event, city) => handleLoc(event, city)}
        />
        <Link to='#' onClick={_onClick}>
          <FaMapMarkerAlt size={30 + 'px'} />
        </Link>
      </div>
    </IconContext.Provider>
  )
}
