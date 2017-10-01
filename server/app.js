import express from 'express'
import consign from 'consign'
import passport from 'passport'

import usersRoutes from './users/routes/users'
import database from './lib/database'
import strategy from './users/config/strategy'

const app = express()

database.mongoose()

consign()
  .include('./lib/middlewares.js')
  .into(app)

strategy(passport)

app.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({ home: 'Ok' })
})

app.use('/gobl/v1/users', usersRoutes)

module.exports = app
