import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'
import passport from 'passport'

const app = express()

require('dotenv').config()
require('./lib/mongoose')
const strategy = require('./APIs/users/auth/strategy')
const users = require('./APIs/users/routes/users')
const token = require('./APIs/users/routes/token')
const posts = require('./APIs/blog/routes/posts')

app.use(morgan('dev'))
app.use(helmet())
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(cors())
app.use(passport.initialize())
strategy(passport)

users(app)
token(app)
posts(app)

module.exports = app
