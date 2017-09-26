import request from 'supertest'

import app from '../app.js'

describe('index', () => {
  it('should render gobl home page', async () => {
    await request(app)
      .get('/gobl/v1/')
      .expect(200)
  })
})
