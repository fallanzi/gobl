import mongoose from 'mongoose'

mongoose.Promise = require('bluebird')

const opts = {
  useMongoClient: true,
}

exports.mongoose = (env) => {
  if (env === 'dev') {
    mongoose.connect('mongodb://localhost/gobl_dev_db', opts)
  }
  if (env === 'test') {
    mongoose.connect('mongodb://localhost/gobl_test_db', opts)
  }
  if (env === 'prod') {
    mongoose.connect('mongodb://localhost/gobl_prod_db', opts)
  }
}
