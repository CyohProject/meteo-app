import { getCurrCoords, obtainCurrPosName } from '../services/location'

const initialState = {
  API_key: 'e6715c036f2a31c0ae2045316f6690e8',
  currCoords: {},
  currPosName: {}
};

export const locationReducer = (state = initialState, action) => {
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

const getCurrPosName = (API_key) => {
  ///////////////////////////////////////////////////////////////////////////
  // debería consultar el estado y si no tiene coords, entonces, se busca ///
  //
  // let coords = ( coords == null ) ? getCurrCoords() : coords;          ///
  ///////////////////////////////////////////////////////////////////////////
  let coords = getCurrCoords();
  return async (dispatch) => {
    const posName = await obtainCurrPosName(API_key, coords)

    dispatch({
      type: '@location/currPosName',
      payload: posName
    })
  }
}

export { currCoords, getCurrPosName  }
