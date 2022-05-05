// Enables process.env
require('dotenv').config()
// DEPLOYMENT PORT or BY DEFAULT
const PORT = process.env.PORT

const express = require('express')
const cors = require('cors')
const app = express()
const locationRouter = require('express').Router()

// Middlewares - The middlewares' order is always important
app.use(cors()) // public
// Parses the object that the request has received (req.body) to JSON
app.use(express.json())
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.send('<h1> Hello! (☞ﾟヮﾟ)☞ </h1>')
})

app.use('/api/location', locationRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
