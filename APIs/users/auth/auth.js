import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

const cfg = require('./config')
const User = require('../models/users')

exports.run = () => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: cfg.jwtSecret
  }
  passport.use(new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await User.findOne({ id: payload.id })
      return done(null, user)
    } catch (err) {
      return done(err, false)
    }
  }))
}

exports.initialize = () => {
  return passport.initialize()
}

exports.authenticate = () => {
  return passport.authenticate('jwt', cfg.jwtSession)
}
