import { getCurrCoords } from '../services/location'

export const locationReducer = (state = [], action) => {
  if (action.type === '@location/currCoords') {
    return { ...state, currCoords: action.payload }
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

export { currCoords }
