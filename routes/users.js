module.exports = app => {
  app.route('/users')
    .all((req, res) => {
      // middleware for preexecution of route
    })
    .get((req, res) => {
      // '/users' : list users
    })
    .post((req, res) => {
      // '/users' : save a new post
    })

  app.route('/users/:id')
    .all((req, res) => {
      // middleware for preexecution of route
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
