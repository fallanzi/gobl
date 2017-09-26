import request from 'supertest'

import app from '../../../app.js'
import cfg from '../../_helpers/config.js'
import User from '../models/users'

cfg.beforeAll()
cfg.afterAll()

describe('users', () => {
  it('should LIST users', async () => {
    await request(app)
      .get('/gobl/v1/users')
      .expect(200)
  })

  it('should CREATE a user', async () => {
    let user = {
      firstname: 'Hdonou',
      lastname: 'Sounton',
      nickname: 'drxos',
      email: 'testCreate@com.com',
      password: '12345678',
      created: '2017-09-2'
    }

    await request(app)
      .post('/gobl/v1/users')
      .send(user)
      .expect(201)
  })

  it('should GET a users', async () => {
    const user = await User.findOne({ nickname: 'ben' })
    await request(app)
      .get(`/gobl/v1/users/${user.id}`)
      .expect(200)
  })

  it('should PUT a users', async () => {
    var user = await User.findOne({ nickname: 'ben' })
    user.nickname = 'ariel'
    await request(app)
      .put(`/gobl/v1/users/${user.id}`)
      .expect(200)
  })

  it('should DELETE a users', async () => {
    var user = await User.findOne({ nickname: 'ben' })
    user.nickname = 'ariel'
    await request(app)
      .delete(`/gobl/v1/users/${user.id}`)
      .expect(200)
  })
})
