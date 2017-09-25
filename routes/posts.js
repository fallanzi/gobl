import Post from '../models/posts'

module.exports = app => {
  app.route('/posts')
    .all((req, res) => {
      // middlleware for preexecution of route
      delete req.body.id
      next()
    })
    .get(async (req, res) => {
      // '/posts' : list posts
      try {
        const posts = await Post.find()
        res.status(200).json(posts)
      } catch (err) {
        res.status(412).json({ msg: err.message })
      }
    })
    .post((req, res) => {
      // '/posts' : save a new post
    })

  app.route('/posts/:id')
    .all((req, res) => {
      // middlleware for preexecution of route
      delete req.body.id
      next()
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
