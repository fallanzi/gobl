import express from 'express'
import consign from 'consign'
import dotenv from 'dotenv'

import database from './lib/database'

const app = express()
dotenv.config()

database.mongoose(process.env.ENV)

consign()
  .include('./users/config/strategy.js')
  .then('./lib/middlewares.js')
  .then('./users/routes')
  .then('./blog/routes')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).json({ home: 'Ok' })
})

module.exports = app
