import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: false
  },
  nickname: {
    type: String,
    required: true
  },
  local: {
    email: String,
    password: String
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  created: {
    type: Date
  },
  updated: {
    type: Date,
    default: Date.now
  }
})

/*eslint-disable */

UserSchema.methods.hash = function (password) {
  return bcrypt.hashSync(password)
}

UserSchema.methods.compare = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.local.password)
}

UserSchema.statics.findByLocalEmail = function (email, cb) {
  return this.find({ 'local.email': email }, cb)

}
/* eslint-enable */

module.exports = mongoose.model('User', UserSchema)
