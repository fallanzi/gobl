import ctrl from '../controllers/users'

module.exports = app => {
  app.route('/gobl/v1/users')
    .all(ctrl.all)
    .get(ctrl.gel)
    .post(ctrl.post)

  app.route('/gobl/v1/users/:id')
    .all(ctrl.all)
    .get(ctrl.get)
    .put(ctrl.put)
    .delete(ctrl.delete)
}
