import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'

module.exports = app => {
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(methodOverride('X-HTTP-Method-Override'))
  app.use(cors())
}
