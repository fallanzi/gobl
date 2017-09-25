import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: String,
    nick: { type: String, required: true }
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date },
  updated_at: { type: Date }
})

UserSchema.pre('save', (done) => {
  let currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  done()
})

module.exports = mongoose.model('User', UserSchema)
