import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import usersRoutes from './users/routes/users'
import strategy from './users/config/strategy'
import database from './lib/database'

const app = express()

dotenv.config()
app.use(morgan('dev'))

database.mongoose()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
strategy(passport)

app.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({ home: 'Ok' })
})

app.use('/gobl/v1/users', usersRoutes)

module.exports = app
