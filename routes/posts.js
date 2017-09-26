import ctrl from '../controllers/posts'

module.exports = app => {
  app.route('/gobl/v1/posts')
    .all(ctrl.all)
    .get(ctrl.gel)
    .post(ctrl.post)

  app.route('/gobl/v1/posts/:id')
    .all(ctrl.all)
    .get(ctrl.get)
    .put(ctrl.put)
    .delete(ctrl.delete)
}
