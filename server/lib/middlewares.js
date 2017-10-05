import morgan from 'morgan'
import passport from 'passport'
import bodyParser from 'body-parser'
import cors from 'cors'
import strategy from '../api/users/config/strategy'

module.exports = (app) => {
  app.use(cors())
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  strategy()
}
