import { getCurrCoords, getLocInfoAllAuto, getLocInfoManual } from '../services/location'

export const locationReducer = (state = [], action) => {
  // Obtain current coords
  if (action.type === '@location/currCoords') {
    return { ...state, currCoords: action.payload }
  }

  // Obtain actual info
  if (action.type === '@location/locInfoAll') {
    return {
      ...state,
      loc: action.payload.loc,
      currMeteo: action.payload.currMeteo,
      alerts: action.payload.currMeteo.alerts
    }
  }

  // Obtain current actual info manually
  if (action.type === '@location/locInfoAllM') {
    return {
      ...state,
      currCoords: action.payload.coords,
      loc: action.payload.loc
    }
  }

  return state
}

/**
 * Auto obtaining - current coords
 */
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
 * Auto obtaining - actual info
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

/**
 * Manual obtaining - actual info
 */
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
