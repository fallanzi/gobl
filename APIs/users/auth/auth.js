import passport from 'passport'
import {Strategy, ExtractJwt} from 'passport-jwt'

import User from '../models/users'
import cfg from './config'

module.exports = app => {
  const params = {
    secretOrKey: cfg.secretOrKey,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  }
  const strategy = new Strategy(params, (payload, done) => {
    User.findById(payload.id)
      .then(user => {
        if (user) {
          return done(null, {
            id: user.id,
            email: user.email
          })
        }
        return done(null, false)
      })
      .catch(error => done(error, null))
  })
  passport.use(strategy)  
}
