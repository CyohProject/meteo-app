import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { obtainLocInfoManual } from '../reducers/locationReducer.js'
import '../styles/Location.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { data } from '../cities.json'
import { Autocomplete, createFilterOptions, TextField } from '@mui/material'

/**
 * TODO
 * Persistir datos establecidos manualmente sin sesión (?)
 * Si hay un usuario, guardar el nombre de la localización en su lista
 * Style
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

  // Max cities to show at the same time
  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    limit: 10
  })

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <div id='location'>
        <Autocomplete
          filterOptions={filterOptions}
          options={cities.sort((a, b) => -b.country.localeCompare(a.country))}
          groupBy={(city) => city.country}
          getOptionLabel={city => city.name}
          sx={{ width: 300, backgroundColor: 'white' }}
          renderInput={(params) => <TextField {...params} label='Localización' />}
          onChange={(event, city) => handleLoc(event, city)}
        />
        <Link to='#' onClick={_onClick}>
          <FaMapMarkerAlt />
        </Link>
      </div>
    </IconContext.Provider>
  )
}
