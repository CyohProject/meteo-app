const moment = require('moment')

/**
 * Parse all data receive from API into custom data object
 * @param {} data data from API
 * @returns custom weather object
 */
export default function weatherData (data) {
  const location = data.loc
  const { currMeteo } = data

  const { current, daily, hourly } = currMeteo
  const currentDay = currMeteo.daily[0]

  return {
    location: {
      country: location.country,
      name: location.name,
      state: location.state,
      timezone: currMeteo.timezone,
      lat: location.lat,
      lon: location.lon
    },
    current: {
      icon: current.weather[0].icon,
      description: current.weather[0].description,
      temperature: current.temp,
      // Basic data
      minTemperature: Math.round(currentDay.temp.min),
      maxTemperature: Math.round(currentDay.temp.max),
      rainProbability: currentDay.pop,
      sunrise: showSunOnOff(current.sunrise),
      sunset: showSunOnOff(current.sunset),
      wind_speed: Math.round(current.wind_speed),
      wind_direction: current.wind_deg,
      details: { // Detailed data
        humidity: current.humidity,
        clouds_intensity: current.clouds,
        feels_like: current.feels_like,
        pressure: current.pressure,
        uvi: current.uvi,
        dew_point: current.dew_point,
        moonPhase: currentDay.moon_phase
      }
    },
    daily: buildDaily(daily),
    hourly: buildHourly(hourly)
  }
}

/**
 * Calculate average temperature from max and min data
 * @param {*} min minimal temperature
 * @param {*} max maximum temperature
 * @returns average temperature
 */
const averageTemperature = (min, max) => {
  return (max + min) / 2
}

/**
 * Calculate average feels like for this day from many moments
 * on the day (morning, evening...)
 * @param {*} daily all days data
 * @param {*} index
 * @returns average feelss like
 */
const calculateFeelsLike = (daily, index) => {
  const day = daily[index]
  let count = 0
  count += Object.values(day).map((value) => {
    return value
  })
  return count / day.length
}

/**
 * Calculate Sunrise or sunset date with hour:minute format
 * @param {*} data A date in miliseconds (sunrise or sunset)
 * @returns hour:minutes (date)
 */
const showSunOnOff = (data) => {
  return moment(data * 1000).format('HH:mm')
}

/**
 * Parse received daily data object from API
 * @param {*} daily
 * @returns custom daily data
 */
const buildDaily = (daily) => {
  return daily.map(day => {
    return {
      icon: day.weather[0].icon,
      description: day.weather[0].description,
      temperature: averageTemperature(
        day.temp.max,
        day.temp.min
      ),
      // Basic data
      minTemperature: day.temp.min,
      maxTemperature: day.temp.max,
      rainProbability: day.pop,
      humidity: day.humidity,
      pressure: day.pressure,
      sunrise: showSunOnOff(day.sunrise),
      sunset: showSunOnOff(day.sunset),
      wind_speed: day.wind_speed,
      wind_direction: day.wind_deg,
      moonPhase: day.moon_phase,
      details: { // Detailed data
        clouds_intensity: day.clouds,
        // visibility: '',
        // dew_point: '',
        feels_like: calculateFeelsLike(daily, 7),
        uvi: day.uvi
      }
    }
  })
}

/**
 * Parse received hourly data object from API
 * @param {*} hourly
 * @returns custom hourly data
 */
const buildHourly = (hourly) => {
  return hourly.map(hour => {
    return {
      icon: hour.weather[0].icon,
      description: hour.weather[0].description,
      temperature: hour.temp,
      // Basic data
      rainProbability: hour.pop,
      humidity: hour.humidity,
      wind_speed: Math.round(hour.wind_speed),
      wind_direction: hour.wind_deg,
      // Detailed data
      details: {
        clouds_intensity: hour.clouds,
        feels_like: hour.feels_like,
        pressure: hour.pressure,
        uvi: hour.uvi,
        dew_point: hour.dew_point
      }
    }
  })
}
