import mongoose from 'mongoose'
import User from '../../models/users'
import Post from '../../models/posts'

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
      created: new Date()
    }

    let post = {
      title: 'Second Post Title',
      content: 'You are an Hero!'
    }

    User.create(aUser)
    Post.create(post)
  })
}
