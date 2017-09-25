module.exports = app => {
  const User = require('../models/users')

  app.route('/gobl/v1/users')
    .all((req, res, next) => {
      // middleware for preexecution of route
      delete req.body.id
      next()
    })
    .get(async (req, res) => {
      // '/users' : list users
      try {
        const users = await User.find()
        res.status(200).json(users)
      } catch (err) {
        res.status(412).json({ msg: err.message })
      }
    })
    .post((req, res) => {
      // '/users' : save a new post
    })

  app.route('/gobl/v1/users/:id')
    .all((req, res) => {
      // middleware for preexecution of route
      delete req.body.id
      next()
    })
    .get((req, res) => {
      // '/users/1' : find a post 
    })
    .put((req, res) => {
      // '/users/1' : update a post
    })
    .delete((req, res) => {
      //  '/users/1' : delete a post
    })
}
