const moment = require('moment')

export default function weatherData (data) {
  const location = data.loc
  const currMeteo = data.currMeteo
  const current = data.currMeteo.current
  const currentDay = data.currMeteo.daily[0]
  const daily = data.currMeteo.daily
  const hourly = data.currMeteo.hourly

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
      icon: <img
        src={'http://openweathermap.org/img/wn/' +
          current.weather[0].icon + '.png'} alt='weather-icon'
            />,
      description: current.weather[0].description,
      temperature: current.temp,
      // Basic data
      minTemperature: Math.round(currentDay.temp.min),
      maxTemperature: Math.round(currentDay.temp.max),
      humidity: current.humidity,
      pressure: current.pressure,
      sunrise: moment(current.sunrise).format('HH:mm'),
      sunset: moment(current.sunset).format('HH:mm'),
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
        icon: <img
          src={'http://openweathermap.org/img/wn/' +
            data.currMeteo.daily[1].weather[0].icon + '.png'} alt='weather-icon'
              />,
        description: data.currMeteo.daily[1].weather[0].description,
        temperature: averageTemperature(
          data.currMeteo.daily[1].temp.max,
          data.currMeteo.daily[1].temp.min
        ),
        minTemperature: data.currMeteo.daily[1].temp.min,
        maxTemperature: data.currMeteo.daily[1].temp.max,
        humidity: data.currMeteo.daily[1].humidity,
        pressure: data.currMeteo.daily[1].pressure,
        sunrise: data.currMeteo.daily[1].sunrise,
        sunset: data.currMeteo.daily[1].sunset,
        wind_speed: data.currMeteo.daily[1].wind_speed,
        wind_direction: data.currMeteo.daily[1].wind_deg,
        details: { // Detailed data
          clouds_intensity: data.currMeteo.daily[1].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 1),
          uvi: data.currMeteo.daily[1].uvi,
          moonPhase: data.currMeteo.daily[1].moon_phase
        }
      },
      2: {
        icon: <img
          src={'http://openweathermap.org/img/wn/' +
            data.currMeteo.daily[2].weather[0].icon + '.png'} alt='weather-icon'
              />,
        description: data.currMeteo.daily[2].weather[0].description,
        temperature: averageTemperature(
          data.currMeteo.daily[2].temp.max,
          data.currMeteo.daily[2].temp.min
        ),
        minTemperature: data.currMeteo.daily[2].temp.min,
        maxTemperature: data.currMeteo.daily[2].temp.max,
        humidity: data.currMeteo.daily[2].humidity,
        pressure: data.currMeteo.daily[2].pressure,
        sunrise: data.currMeteo.daily[2].sunrise,
        sunset: data.currMeteo.daily[2].sunset,
        wind_speed: data.currMeteo.daily[2].wind_speed,
        wind_direction: data.currMeteo.daily[2].wind_deg,
        details: { // Detailed data
          clouds_intensity: data.currMeteo.daily[2].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 2),
          uvi: data.currMeteo.daily[2].uvi,
          moonPhase: data.currMeteo.daily[2].moon_phase
        }
      },
      3: {
        icon: <img
          src={'http://openweathermap.org/img/wn/' +
            data.currMeteo.daily[3].weather[0].icon + '.png'} alt='weather-icon'
              />,
        description: data.currMeteo.daily[3].weather[0].description,
        temperature: averageTemperature(
          data.currMeteo.daily[3].temp.max,
          data.currMeteo.daily[3].temp.min
        ),
        minTemperature: data.currMeteo.daily[3].temp.min,
        maxTemperature: data.currMeteo.daily[3].temp.max,
        humidity: data.currMeteo.daily[3].humidity,
        pressure: data.currMeteo.daily[3].pressure,
        sunrise: data.currMeteo.daily[3].sunrise,
        sunset: data.currMeteo.daily[3].sunset,
        wind_speed: data.currMeteo.daily[3].wind_speed,
        wind_direction: data.currMeteo.daily[3].wind_deg,
        details: { // Detailed data
          clouds_intensity: data.currMeteo.daily[3].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 3),
          uvi: data.currMeteo.daily[3].uvi,
          moonPhase: data.currMeteo.daily[3].moon_phase
        }
      },
      4: {
        icon: <img
          src={'http://openweathermap.org/img/wn/' +
            data.currMeteo.daily[4].weather[0].icon + '.png'} alt='weather-icon'
              />,
        description: data.currMeteo.daily[4].weather[0].description,
        temperature: averageTemperature(
          data.currMeteo.daily[4].temp.max,
          data.currMeteo.daily[4].temp.min
        ),
        minTemperature: data.currMeteo.daily[4].temp.min,
        maxTemperature: data.currMeteo.daily[4].temp.max,
        humidity: data.currMeteo.daily[4].humidity,
        pressure: data.currMeteo.daily[4].pressure,
        sunrise: data.currMeteo.daily[4].sunrise,
        sunset: data.currMeteo.daily[4].sunset,
        wind_speed: data.currMeteo.daily[4].wind_speed,
        wind_direction: data.currMeteo.daily[4].wind_deg,
        details: { // Detailed data
          clouds_intensity: data.currMeteo.daily[4].clouds,
          visibility: '',
          dew_point: '',
          feels_like: calculateFeelsLike(daily, 4),
          uvi: data.currMeteo.daily[4].uvi,
          moonPhase: data.currMeteo.daily[4].moon_phase
        }
      }
    },
    5: {
      icon: data.currMeteo.daily[5].weather[0].icon,
      description: data.currMeteo.daily[5].weather[0].description,
      temperature: averageTemperature(
        data.currMeteo.daily[5].temp.max,
        data.currMeteo.daily[5].temp.min
      ),
      minTemperature: data.currMeteo.daily[5].temp.min,
      maxTemperature: data.currMeteo.daily[5].temp.max,
      humidity: data.currMeteo.daily[5].humidity,
      pressure: data.currMeteo.daily[5].pressure,
      sunrise: data.currMeteo.daily[5].sunrise,
      sunset: data.currMeteo.daily[5].sunset,
      wind_speed: data.currMeteo.daily[5].wind_speed,
      wind_direction: data.currMeteo.daily[5].wind_deg,
      details: { // Detailed data
        clouds_intensity: data.currMeteo.daily[5].clouds,
        visibility: '',
        dew_point: '',
        feels_like: calculateFeelsLike(daily, 5),
        uvi: data.currMeteo.daily[5].uvi,
        moonPhase: data.currMeteo.daily[5].moon_phase
      }
    },
    6: {
      icon: data.currMeteo.daily[6].weather[0].icon,
      description: data.currMeteo.daily[6].weather[0].description,
      temperature: averageTemperature(
        data.currMeteo.daily[6].temp.max,
        data.currMeteo.daily[6].temp.min
      ),
      minTemperature: data.currMeteo.daily[6].temp.min,
      maxTemperature: data.currMeteo.daily[6].temp.max,
      humidity: data.currMeteo.daily[6].humidity,
      pressure: data.currMeteo.daily[6].pressure,
      sunrise: data.currMeteo.daily[6].sunrise,
      sunset: data.currMeteo.daily[6].sunset,
      wind_speed: data.currMeteo.daily[6].wind_speed,
      wind_direction: data.currMeteo.daily[6].wind_deg,
      details: { // Detailed data
        clouds_intensity: data.currMeteo.daily[6].clouds,
        visibility: '',
        dew_point: '',
        feels_like: calculateFeelsLike(daily, 6),
        uvi: data.currMeteo.daily[6].uvi,
        moonPhase: data.currMeteo.daily[6].moon_phase
      }
    },
    7: {
      icon: data.currMeteo.daily[7].weather[0].icon,
      description: data.currMeteo.daily[7].weather[0].description,
      temperature: averageTemperature(
        data.currMeteo.daily[7].temp.max,
        data.currMeteo.daily[7].temp.min
      ),
      minTemperature: data.currMeteo.daily[7].temp.min,
      maxTemperature: data.currMeteo.daily[7].temp.max,
      humidity: data.currMeteo.daily[7].humidity,
      pressure: data.currMeteo.daily[7].pressure,
      sunrise: data.currMeteo.daily[7].sunrise,
      sunset: data.currMeteo.daily[7].sunset,
      wind_speed: data.currMeteo.daily[7].wind_speed,
      wind_direction: data.currMeteo.daily[7].wind_deg,
      details: { // Detailed data
        clouds_intensity: data.currMeteo.daily[7].clouds,
        visibility: '',
        dew_point: '',
        feels_like: calculateFeelsLike(daily, 7),
        uvi: data.currMeteo.daily[7].uvi,
        moonPhase: data.currMeteo.daily[7].moon_phase
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
