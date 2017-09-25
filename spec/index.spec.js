import { request } from 'supertest'
import mongoose from 'mongoose'

import app from '../app'

afterAll(() => {
  mongoose.connection.dropDatabase()
})

describe('index', () => {
  it('should render index', async () => {
    await request(app)
      .get('/gobl/v1/')
      .exepect(200)
  })
})
