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
  role: {
    type: String,
    enum: ['admin', 'radactor', 'editor', 'journalist', 'client'],
    default: 'client',
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

/*eslint-disable */

UserSchema.methods.hash = (password) => {
  const hash = bcrypt.hashSync(password, SALT_WORK_FACTOR)
  return hash
}

UserSchema.methods.isMatch = function (candidatePassword) {
  const result = bcrypt.compareSync(candidatePassword, this.password)
  return result
}

/* eslint-enable */

module.exports = mongoose.model('User', UserSchema)
