import axios from 'axios';

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

const obtainCurrPosName = (API_key, coords) => {
  let data = axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?` +
    `lat=${coords.lat}&lon=${coords.lon}&limit=1&appid=${API_key}`);
    console.log(data);
  return data;
}


export { getCurrCoords, obtainCurrPosName }
