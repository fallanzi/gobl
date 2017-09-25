import mongoose from 'mongoose'

module.exports = mongoose.connect('mongodb://localhost/gobl', {
  useMongoClient: true,
  promiseLibrary: global.Promise
}, () => {
  console.log('MongoDB is fired up. Enjoy it!')
})
