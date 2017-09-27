import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'
import passport from 'passport'

module.exports = app => {
  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(methodOverride('X-HTTP-Method-Override'))
  app.use(cors())
  app.use(passport.initialize())
}
