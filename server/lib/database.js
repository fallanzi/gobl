import mongoose from 'mongoose'

mongoose.Promise = require('bluebird')

const opts = {
  useMongoClient: true,
}

exports.mongoose = () => {
  mongoose.connect('mongodb://localhost/gobl', opts, () => {
    console.log('DATABASE IS RUNNING :::: .... ...')
  })
}
