import ctrl from '../controllers/blog'
import cfg from '../../users/config/config'

module.exports = (app) => {
  app.all('/gobl/v1/*', cfg.auth)
  app.get('/gobl/v1/posts', ctrl.list_blog)
  app.post('/gobl/v1/posts', ctrl.create_blog)
  app.get('/gobl/v1/posts/:id', ctrl.read_blog)
  app.put('/gobl/v1/posts/:id', ctrl.update_blog)
  app.delete('/gobl/v1/posts/:id', ctrl.delete_blog)

  app.get('/gobl/v1/cat', ctrl.list_cat)
  app.post('/gobl/v1/cat', ctrl.create_cat)
  app.get('/gobl/v1/cat/:id', ctrl.read_cat)
  app.put('/gobl/v1/cat/:id', ctrl.update_cat)
  app.delete('/gobl/v1/cat/:id', ctrl.delete_cat)
}

