const moment = require('moment')

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
      humidity: current.humidity,
      pressure: current.pressure,
      sunrise: showSunOnOff(current.sunrise),
      sunset: showSunOnOff(current.sunset),
      wind_speed: Math.round(current.wind_speed),
      wind_direction: current.wind_deg,
      details: { // Detailed data
        clouds_intensity: current.clouds,
        dew_point: current.dew_point,
        feels_like: current.feels_like,
        uvi: current.uvi,
        moonPhase: currentDay.moon_phase
      }
    },
    daily: {
      1: {
        icon: daily[1].weather[0].icon,
        description: daily[1].weather[0].description,
        temperature: averageTemperature(
          daily[1].temp.max,
          daily[1].temp.min
        ),
        minTemperature: daily[1].temp.min,
        maxTemperature: daily[1].temp.max,
        humidity: daily[1].humidity,
        pressure: daily[1].pressure,
        sunrise: showSunOnOff(daily[1].sunrise),
        sunset: showSunOnOff(daily[1].sunset),
        wind_speed: daily[1].wind_speed,
        wind_direction: daily[1].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[1].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 1),
          uvi: daily[1].uvi,
          moonPhase: daily[1].moon_phase
        }
      },
      2: {
        icon:
            daily[2].weather[0].icon,
        description: daily[2].weather[0].description,
        temperature: averageTemperature(
          daily[2].temp.max,
          daily[2].temp.min
        ),
        minTemperature: daily[2].temp.min,
        maxTemperature: daily[2].temp.max,
        humidity: daily[2].humidity,
        pressure: daily[2].pressure,
        sunrise: showSunOnOff(daily[2].sunrise),
        sunset: showSunOnOff(daily[2].sunset),
        wind_speed: daily[2].wind_speed,
        wind_direction: daily[2].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[2].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 2),
          uvi: daily[2].uvi,
          moonPhase: daily[2].moon_phase
        }
      },
      3: {
        icon: daily[3].weather[0].icon,
        description: daily[3].weather[0].description,
        temperature: averageTemperature(
          daily[3].temp.max,
          daily[3].temp.min
        ),
        minTemperature: daily[3].temp.min,
        maxTemperature: daily[3].temp.max,
        humidity: daily[3].humidity,
        pressure: daily[3].pressure,
        sunrise: showSunOnOff(daily[3].sunrise),
        sunset: showSunOnOff(daily[3].sunset),
        wind_speed: daily[3].wind_speed,
        wind_direction: daily[3].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[3].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 3),
          uvi: daily[3].uvi,
          moonPhase: daily[3].moon_phase
        }
      },
      4: {
        icon:
            daily[4].weather[0].icon,
        description: daily[4].weather[0].description,
        temperature: averageTemperature(
          daily[4].temp.max,
          daily[4].temp.min
        ),
        minTemperature: daily[4].temp.min,
        maxTemperature: daily[4].temp.max,
        humidity: daily[4].humidity,
        pressure: daily[4].pressure,
        sunrise: showSunOnOff(daily[4].sunrise),
        sunset: showSunOnOff(daily[4].sunset),
        wind_speed: daily[4].wind_speed,
        wind_direction: daily[4].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[4].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 4),
          uvi: daily[4].uvi,
          moonPhase: daily[4].moon_phase
        }
      },
      5: {
        icon: daily[5].weather[0].icon,
        description: daily[5].weather[0].description,
        temperature: averageTemperature(
          daily[5].temp.max,
          daily[5].temp.min
        ),
        minTemperature: daily[5].temp.min,
        maxTemperature: daily[5].temp.max,
        humidity: daily[5].humidity,
        pressure: daily[5].pressure,
        sunrise: showSunOnOff(daily[5].sunrise),
        sunset: showSunOnOff(daily[5].sunset),
        wind_speed: daily[5].wind_speed,
        wind_direction: daily[5].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[5].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 5),
          uvi: daily[5].uvi,
          moonPhase: daily[5].moon_phase
        }
      },
      6: {
        icon: daily[6].weather[0].icon,
        description: daily[6].weather[0].description,
        temperature: averageTemperature(
          daily[6].temp.max,
          daily[6].temp.min
        ),
        minTemperature: daily[6].temp.min,
        maxTemperature: daily[6].temp.max,
        humidity: daily[6].humidity,
        pressure: daily[6].pressure,
        sunrise: showSunOnOff(daily[6].sunrise),
        sunset: showSunOnOff(daily[6].sunset),
        wind_speed: daily[6].wind_speed,
        wind_direction: daily[6].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[6].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 6),
          uvi: daily[6].uvi,
          moonPhase: daily[6].moon_phase
        }
      },
      7: {
        icon: daily[7].weather[0].icon,
        description: daily[7].weather[0].description,
        temperature: averageTemperature(
          daily[7].temp.max,
          daily[7].temp.min
        ),
        minTemperature: daily[7].temp.min,
        maxTemperature: daily[7].temp.max,
        humidity: daily[7].humidity,
        pressure: daily[7].pressure,
        sunrise: showSunOnOff(daily[7].sunrise),
        sunset: showSunOnOff(daily[7].sunset),
        wind_speed: daily[7].wind_speed,
        wind_direction: daily[7].wind_deg,
        details: { // Detailed data
          clouds_intensity: daily[7].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 7),
          uvi: daily[7].uvi,
          moonPhase: daily[7].moon_phase
        }
      }
    },
    hourly
  }
}

const averageTemperature = (min, max) => {
  return (max + min) / 2
}

const calculateFeelsLike = (daily, index) => {
  const day = daily[index]
  // console.log(feelslike)
  let count = 0
  count += Object.values(day).map((value) => {
    return value
  })
  return count / day.length
}

const showSunOnOff = (data) => {
  return moment(data * 1000).format('HH:mm')
}
