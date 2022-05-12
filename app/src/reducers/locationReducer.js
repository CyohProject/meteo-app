import { getCurrCoords, getLocInfoAllAuto, getLocInfoManual } from '../services/location'

export const locationReducer = (state = [], action) => {
  // Obtain current coords
  if (action.type === '@location/currCoords') {
    return { ...state, currCoords: action.payload }
  }

  // Obtain current weather data
  if (action.type === '@location/locInfoAll') {
    return {
      ...state,
      loc: action.payload.loc,
      currMeteo: action.payload.currMeteo,
      alerts: action.payload.currMeteo.alerts
    }
  }

  if (action.type === '@location/locInfoAllM') {
    return {
      ...state,
      currCoords: action.payload.coords,
      loc: action.payload.loc
    }
  }

  return state
}

const currCoords = () => {
  return async (dispatch) => {
    const coords = await getCurrCoords()

    dispatch({
      type: '@location/currCoords',
      payload: coords
    })
  }
}

/**
 * Auto actual info obtaining
 */
const obtainLocInfoAll = (coords) => {
  return async (dispatch) => {
    const locInfoAll = await getLocInfoAllAuto(coords)

    dispatch({
      type: '@location/locInfoAll',
      payload: locInfoAll
    })
  }
}

const obtainLocInfoManual = city => {
  return async (dispatch) => {
    const locInfoAllM = await getLocInfoManual(city)

    dispatch({
      type: '@location/locInfoAllM',
      payload: locInfoAllM
    })
  }
}

export { currCoords, obtainLocInfoAll, obtainLocInfoManual }
