import ctrl from '../controllers/users'

module.exports = (app) => {
  app.route('/gobl/v1/users')
    .all(ctrl.all)
    .post(ctrl.register)
}
