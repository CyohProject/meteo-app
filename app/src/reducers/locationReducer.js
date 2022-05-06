import { getCurrCoords, getLocInfoAll } from '../services/location'

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

const obtainLocInfoAll = (coords) => {
  return async (dispatch) => {
    const locInfoAll = await getLocInfoAll(coords)

    dispatch({
      type: '@location/locInfoAll',
      payload: locInfoAll
    })
  }
}

export { currCoords, obtainLocInfoAll }
