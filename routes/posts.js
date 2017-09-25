module.exports = app => {
  app.route('/posts')
    .all((req, res) => {
      // middlleware for preexecution of route
    })
    .get((req, res) => {
      // '/posts' : list posts
    })
    .post((req, res) => {
      // '/posts' : save a new post
    })

  app.route('/posts/:id')
    .all((req, res) => {
      // middlleware for preexecution of route
    })
    .get((req, res) => {
      // '/posts/1' : find a post 
    })
    .put((req, res) => {
      // '/posts/1' : update a post
    })
    .delete((req, res) => {
      //  '/posts/1' : delete a post
    })
}
