const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

// Connection to Mongo
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.log(err)
  })

process.on('uncaughtException', () => {
  mongoose.disconnect()
})
