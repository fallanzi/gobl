module.exports = app => {
  app.route('/gobl/v1')
    .all((req, res, next) => {
      // middleware for preexecution of route
      delete req.body.id
      next()
    })
    .get((req, res) => {
      res.status(200).json({ status: 'Ok' })
    })
}
