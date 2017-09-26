import mongoose from 'mongoose'
import User from '../../models/users'

module.exports.afterAll = () => {
  afterAll(() => {
    mongoose.connection.dropDatabase()
    console.log('Database cleaned')
  })
}

module.exports.beforeAll = () => {
  beforeAll(() => {
    let aUser = {
      firstname: 'Hodonou',
      lastname: 'Sounton',
      nickname: 'ben',
      email: 'test@com.com',
      password: '12345678',
      created: '2017-09-2'
    }

    User.create(aUser)
  })
}
