import ctrl from '../controllers/categories'

module.exports = (app) => {
  app.get('/gobl/v1/cats', ctrl.list)
  app.post('/gobl/v1/cats', ctrl.create)

  app.get('/gobl/v1/cats/:id', ctrl.read)
  app.put('/gobl/v1/cats/:id', ctrl.update)
  app.delete('/gobl/v1/cats/:id', ctrl.delete)
}
