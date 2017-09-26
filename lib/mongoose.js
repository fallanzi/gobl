import mongoose from 'mongoose'

mongoose.Promise = require('bluebird')

module.exports = mongoose.connect('mongodb://localhost/gobl', {
  useMongoClient: true
}, () => {
  console.log('MongoDB is fired up. Enjoy it!')
})
