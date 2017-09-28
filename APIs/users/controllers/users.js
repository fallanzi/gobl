import passport from 'passport'
import User from '../models/users'

// Reset request body id before all
exports.all = (req, res, next) => {
  passport.authenticate('jwt', {session: false})
  next()
}
// '/gobl/v1/' : List users 
exports.gel = async (req, res) => {
  try {
    res.status(200).json(await User.find())
  } catch (err) {
    res.status(204).json({ error: err.message })
  }
}
// '/gobl/v1/' : Create a user
exports.post = async (req, res) => {
  try {
    let user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      created: new Date()
    })
    res.status(201).json(await user.save())
  } catch (err) {
    res.status(412).json({ error: err.message })
  }
}
// '/gobl/v1/users/1' : GET a user
exports.get = async (req, res) => {
  try {
    res.status(200).json(await User.findById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.put = async (req, res) => {
  try {
    res.status(200).json(await User.findByIdAndUpdate(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.delete = async (req, res) => {
  try {
    res.status(200).json(await User.findByIdAndRemove(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
