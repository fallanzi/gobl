import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'

const auth = require('../APIs/users/auth/auth')

module.exports = app => {
  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(methodOverride('X-HTTP-Method-Override'))
  app.use(cors())
  app.use(auth.initialize())
  auth.run()
  app.use((req, res, next) => {
    delete req.body.id
    next()
  })
}
