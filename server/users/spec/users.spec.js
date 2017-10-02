/* eslint-disable */
import request from 'supertest'
import mongoose from 'mongoose'

import app from '../../app'


describe('users test ::::: ... ... ...', () => {
  beforeAll(() => {
    console.log('Start testint ::::::::::::: ... ... ...')
  })
  
  it('should add 1 and 1', () => {
    request(app)
      .get('/')
      .expect(200)
  })

  afterAll(() => {
    mongoose.connection.dropDatabase()
    console.log('DB CLEANED ::::::::::::: ... ... ...')
  })
});