import express from 'express'
import consign from 'consign'

const app = express()

consign()
  .include('lib/env.js')
  .then('lib/config.js')
  .then('lib/middlewares.js')
  .into(app)
