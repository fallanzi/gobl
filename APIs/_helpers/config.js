import mongoose from 'mongoose'
import User from '../users/models/users'
import Post from '../blog/models/posts'

module.exports.afterAll = () => {
  afterAll(() => {
    mongoose.connection.dropDatabase()
    console.log('Database cleaned')
  })
}

module.exports.beforeAll = () => {
  beforeAll(() => {
    let user = {
      firstname: 'Hodonou',
      lastname: 'Sounton',
      nickname: 'ben',
      'local.email': 'test@test.com',
      'local.password': '12345678',
      created: new Date()
    }

    let login = {
      firstname: 'Hodonou',
      lastname: 'Sounton',
      nickname: 'ben',
      'local.email': 'test@test.test',
      'local.password': '12345678'
    }

    let post = {
      title: 'Second Post Title',
      content: 'You are an Hero!'
    }

    User.create(user)
    User.create(login)
    Post.create(post)
  })
}
