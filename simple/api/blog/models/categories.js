import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
})

module.exports = mongoose.model('Category', CategorySchema)
