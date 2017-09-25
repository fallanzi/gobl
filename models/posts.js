import { path } from 'path'
import { mongoose, Schema } from 'mongoose'
import { mongoosePermission } from 'mongoose-permission'

/* eslint-disable */ 
import { filePlugin, make_upload_to_model } from 'mongoose-file'
let uploads_base = path.join(__dirname, 'uploads')
/* eslint-enable */ 

let uploads = path.join(uploads_base, 'u')

const UserSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: String,
    nick: { type: String, required: true }
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date },
  updated_at: { type: Date }
})

UserSchema.pre('save', (done) => {
  let currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  done()
})

UserSchema.plugin(mongoosePermission, {
  'be_supervisor': ['manages_users'],
  'be_redactor': ['manages_desks'],
  'be_desk': ['manages_publisher'],
  'be_publisher': ['posts_articles'],
  'be_client': ['']
})

const PostSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  hidden: Boolean,
  created_at: { type: Date },
  updated_at: { type: Date }
})

PostSchema.pre('save', (done) => {
  let currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  done()
})

PostSchema.plugin(filePlugin, {
  name: 'image',
  upload_to: make_upload_to_model(uploads, images),
  relative_to: uploads_base
})

const Post = mongoose.model('Post', PostSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
  Post,
  User
}
