import mongoose from 'mongoose'

mongoose.Promise = require('bluebird')

exports.mongoose = mongoose.connect('mongodb://localhost/gobl', {
  useMongoClient: true
}, () => {
  console.log('MongoDB is fired up. Enjoy it!')
})
