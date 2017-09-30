import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    uppercase: true,
  },
  nickname: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.pre('save', (next) => {
  next()
})

UserSchema.methods.hash = (password) => {
  const hash = bcrypt.hashSync(password, SALT_WORK_FACTOR)
  return hash
}

module.exports = mongoose.model('User', UserSchema)
