const axios = require('axios')
const locationRouter = require('express').Router()

locationRouter.get('/', async (req, res) => {
  let { coords } = req.query

  coords = JSON.parse(coords)

  // Get current location data
  const loc = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?` + 
      `lat=${coords.lat}&lon=${coords.lon}&limit=1&` + 
      `appid=${process.env.API_KEY}`
  )

  // Get all current weather data
  const currMeteo = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?` +
  `lat=${coords.lat}&lon=${coords.lon}` +
  `exclude=minutely&units=metric&appid=${process.env.API_KEY}`)

  res.send({
    loc: loc.data[0],
    currMeteo: currMeteo.data
  })
})

module.exports = locationRouter
