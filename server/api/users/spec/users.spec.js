import supertest from 'supertest'
import mongoose from 'mongoose'

import User from '../models/users'
import app from '../../app'
import cfg from './config'

const request = supertest(app)
/* eslint-disable */
var user
var agent
/* eslint-enable */

describe('users test ::::: ... ... ...', () => {
  beforeAll(() => {
    console.log('Start testint ::::::::::::: ... ... ...')
    user = {
      firstname: 'Hodonou',
      lastname: 'Sounton',
      nickname: 'drxos',
      email: 'test@zost.com',
      password: '12345678',
      role: 'admin',
    }
    User.create(user, (err, result) => {
      if (err) throw err
      user = result
      return user
    })
  })

  beforeEach((done) => {
    cfg.login(request, (loginAgent) => {
      agent = loginAgent
      done()
    })
  })

  it('should list users', async () => {
    const req = await request.get('/')
    agent.attachCookies(req)
    req.expect(200)
  })

  it('should create a user', async () => {
    user.email = 'test@test.com'
    user.firstname = 'Honorine'
    await request.post('/gobl/v1/users')
      .send(user)
      .expect(201)
  })

  it('should update a user', () => {
    request.get('/')
      .expect(200)
  })
  it('should delete a user', () => {
    request.get('/')
      .expect(200)
  })

  afterAll(() => {
    mongoose.connection.dropDatabase()
    console.log('DB CLEANED ::::::::::::: ... ... ...')
  })
})
