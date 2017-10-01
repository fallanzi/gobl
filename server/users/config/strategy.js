import jwt from 'passport-jwt'
import cfg from './config'
import User from '../models/users'

const JwtStrategy = require('passport-jwt').Strategy

module.exports = (passport) => {
  const opts = {}
  opts.jwtFromRequest = jwt.ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = cfg.secretKey
  passport.use(new JwtStrategy(opts, (payload, done) => {
    console.log(payload)
    User.findById(payload.id, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (!user) {
        return done(null, false)
      }
      return done(null, user)
    })
  }))
}
