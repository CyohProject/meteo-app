import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/location'

/**
 * Get current user position from the browser
 * @returns a Promise with the position on the map
 */
function currPos () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos),
      (err) => reject(err)
    )
  })
}

/**
 * @return {*} Current coordinates
 */
const getCurrCoords = async () => {
  const { coords } = await currPos()

  return {
    lat: coords.latitude,
    lon: coords.longitude
  }
}

const getLocInfoAll = async (coords) => {
  const { data } = await axios.get(baseUrl, { params: { coords } })

  return data
}

const getLocInfoManual = async locName => {
  const { data } = await axios.get(baseUrl, { params: { locName } })

  return data
}

export { getCurrCoords, getLocInfoAll, getLocInfoManual }
