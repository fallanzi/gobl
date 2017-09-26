import express from 'express'
import consign from 'consign'

const app = express()

consign()
  .include('lib/env.js')
  .then('lib/mongoose.js')
  .then('lib/db.js')
  .then('lib/middlewares.js')
  .then('APIs/users/routes')
  .then('APIs/blog/routes')
  .into(app)

module.exports = app
