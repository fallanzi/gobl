import express from 'express'
import consign from 'consign'

const app = express()

consign()
  .include('app.js')
  .into(app)
