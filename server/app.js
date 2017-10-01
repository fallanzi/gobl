import express from 'express'
import consign from 'consign'
import passport from 'passport'

import database from './lib/database'

const app = express()

database.mongoose()

consign()
  .include('./users/config/strategy.js')
  .include('./lib/middlewares.js')
  .then('./users/routes')
  .into(app)

app.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({ home: 'Ok' })
})

module.exports = app
