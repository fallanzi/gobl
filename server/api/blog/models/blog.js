import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  hidden: {
    type: Boolean,
    default: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie',
  },
  tags: [String],
  created: {
    type: Date,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
})

const Categorie = mongoose.model('Categorie', CategorySchema)
const Blog = mongoose.model('Blog', BlogSchema)

module.exports = {
  Categorie,
  Blog,
}
