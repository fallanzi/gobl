import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  hidden: { type: Boolean, default: true },
  created: { type: Date },
  updated: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Post', PostSchema)
