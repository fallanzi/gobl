import ctrl from '../controllers/users'
import cfg from '../config/config'

module.exports = (app) => {
  app.post('/gobl/v1/users', cfg.auth, ctrl.register)
  app.get('/gobl/v1/users/list', cfg.auth, ctrl.list)
  app.post('/gobl/v1/users/login', ctrl.login)
}
