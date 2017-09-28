import mongoose from 'mongoose'
import passport from 'passport'
import Post from '../models/posts'

// Reset request body id before all
exports.all = (req, res, next) => {
  passport.authenticate('jwt', {session: false})
  next()
}
// '/gobl/v1/' : List posts 
exports.gel = async (req, res) => {
  try {
    res.status(200).json(await Post.find().populate('author').exec())
  } catch (err) {
    res.status(204).json({ error: err.message })
  }
}
// '/gobl/v1/' : Create a post
exports.post = async (req, res) => {
  req.body.author = mongoose.Types.ObjectId(req.body.author)
  try {
    res.status(201).json(await Post.create(req.body))
  } catch (err) {
    res.status(412).json({ error: err.message })
  }
}
// '/gobl/v1/posts/1' : GET a post
exports.get = async (req, res) => {
  try {
    res.status(200).json(await Post.findById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.put = async (req, res) => {
  try {
    res.status(200).json(await Post.findByIdAndUpdate(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.delete = async (req, res) => {
  try {
    res.status(200).json(await Post.findByIdAndRemove(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
