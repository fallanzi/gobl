import ctrl from '../controllers/users'
import cfg from '../config/config'

module.exports = (app) => {
  app.all('/gobl/v1/*', cfg.auth)
  app.post('/gobl/users', ctrl.create)
  app.get('/gobl/users', ctrl.list)
  app.get('/gobl/v1/users/:id', ctrl.read)
  app.get('/gobl/v1/users/:id', ctrl.update)
  app.get('/gobl/v1/users/:id', ctrl.delete)
  app.post('/login', ctrl.login)
}
