import request from 'supertest'

import app from '../../../app.js'
import cfg from '../../_helpers/config.js'
import Post from '../models/posts'
import User from '../../users/models/users'

cfg.beforeAll()
cfg.afterAll()

describe('posts', () => {
  it('should LIST posts', async () => {
    await request(app)
      .get('/gobl/v1/posts')
      .expect(200)
  })

  it('should CREATE a post', async () => {
    const user = await User.findOne({ nickname: 'ben' })
    let post = {
      title: 'First Post Title',
      content: 'First Post Content',
      author: user.id
    }

    await request(app)
      .post('/gobl/v1/posts')
      .send(post)
      .expect(201)
  })

  it('should GET a posts', async () => {
    const post = await Post.findOne({ title: 'Second Post Title' })
    await request(app)
      .get(`/gobl/v1/posts/${post.id}`)
      .expect(200)
  })

  it('should PUT a posts', async () => {
    const post = await Post.findOne({ title: 'Second Post Title' })
    post.title = 'Second Post Title Updated'
    await request(app)
      .put(`/gobl/v1/posts/${post.id}`)
      .expect(200)
  })

  it('should DELETE a posts', async () => {
    let post = await Post.findOne({ title: 'Second Post Title' })
    await request(app)
      .delete(`/gobl/v1/posts/${post.id}`)
      .expect(200)
  })
})
