import passport from 'passport'
import jwt from 'jsonwebtoken'
import jwtSimple from 'jwt-simple'
import User from '../models/users'
import cfg from '../auth/config'

// Reset request body id before all
exports.all = (req, res) => {
  passport.authenticate('jwt', {session: false})
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

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user.isPassword(req.body.password)) {
      let token = jwt.sign(user, cfg.jwtSecret, cfg.expiresIn)
      res.status(200).json({token: token})
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.token = async (req, res) => {
  try {
    const {email, password} = req.body
    const result = await User.findOne({email: email})
    if (result.isPassword(password)) {
      const payload = {id: result.id}
      res.status(200).json(jwtSimple.encode(payload, cfg.jwtSecret))
    }
  } catch (err) {
    res.status(401).json({error: err.message})
  }
}
