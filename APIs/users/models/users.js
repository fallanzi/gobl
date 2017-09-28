import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_WORK_FACTOR = 10

const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: String,
  nickname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: 8 },
  created: { type: Date },
  updated: { type: Date, default: Date.now }
})

UserSchema.pre('save', function (next) {
  var user = this
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
  user.password = bcrypt.hashSync(user.password, salt)
  next()
})

UserSchema.methods.isPassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)
