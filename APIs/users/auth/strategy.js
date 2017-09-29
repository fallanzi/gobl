import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

const cfg = require('./config')
const User = require('../models/users')

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromHeader('token'),
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
