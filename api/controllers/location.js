const axios = require('axios')
const locationRouter = require('express').Router()

/* A function that is called when the user goes to the /location route. It is an async function that
uses the axios library to make two API calls to the OpenWeatherMap API. It then sends the data back
to the user. */
locationRouter.get('/', async (req, res) => {
  // Manual
  if (req.query.city) {
    let { city } = req.query
    city = JSON.parse(city)

    // Get location data manually
    const loc = await axios.get(
      'http://api.openweathermap.org/geo/1.0/direct?' +
      `q=${city.name},${city.country_code}&limit=1&` +
      `appid=${process.env.API_KEY}`
    )
    res.send({
      coords: {
        lat: loc.data[0].lat,
        lon: loc.data[0].lon
      },
      loc: loc.data[0]
    })

  // Auto
  } else {
    /**
     * TODO:
     * arreglar warning relacionado con JSON.parse
     */
    let { coords } = req.query
    /* Parsing the coords object from a string to an object. */
    coords = JSON.parse(coords)

    // Get current location data
    const loc = await axios.get(
      'http://api.openweathermap.org/geo/1.0/reverse?' +
      `lat=${coords.lat}&lon=${coords.lon}&limit=1&` +
      `appid=${process.env.API_KEY}`
    )

    // Get all current weather data
    const currMeteo = await axios.get(
      'https://api.openweathermap.org/data/2.5/onecall?' +
      `lat=${coords.lat}&lon=${coords.lon}&` +
      `exclude=minutely&units=metric&appid=${process.env.API_KEY}`
    )

    res.send({
      loc: loc.data[0],
      currMeteo: currMeteo.data
    })
  }
})

/* Update user's location */
locationRouter.put('/')

module.exports = locationRouter
