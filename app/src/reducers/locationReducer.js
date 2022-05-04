import { getCurrCoords, getCurrPosName } from '../services/location'

export const locationReducer = (state = [], action) => {
  if (action.type === '@location/currCoords') {
    return { ...state, currCoords: action.payload }
  }
  if (action.type === '@location/currPosName') {
    return { ...state, currPosName: action.payload }
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

const currPosName = (coords) => {
  return async (dispatch) => {
    const posName = await getCurrPosName(coords)

    dispatch({
      type: '@location/currPosName',
      payload: posName
    })
  }
}

export { currCoords, currPosName }
