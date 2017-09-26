import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  hidden: { type: Boolean, default: true },
  created_at: { type: Date },
  updated_at: { type: Date }
})

PostSchema.pre('save', (done) => {
  let currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  done()
})

module.exports = mongoose.model('Post', PostSchema)
