import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'
import passport from 'passport'

import auth from '../APIs/users/auth/strategies'

module.exports = app => {
  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(methodOverride('X-HTTP-Method-Override'))
  app.use(cors())
  app.use(passport.initialize())
  auth(passport)
}
