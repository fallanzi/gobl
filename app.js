import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import usersRoutes from './users/routes/users'
import database from './lib/database'

const app = express()

dotenv.config()
app.use(morgan('dev'))

database.mongoose()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

usersRoutes(app)

module.exports = app
