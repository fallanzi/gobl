import passport from 'passport'
import jwt from 'jwt-simple'
import User from '../models/users'
import getPostUser from '../config/getUser'
import cfg from '../config/config'


exports.all = () => {
  console.log('BEGIN ROUTES :::: OK')
  passport.authenticate('jwt', { session: false })
}

exports.register = async (req, res) => {
  try {
    res.status(201).json(await getPostUser(req).save())
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.login = async (req, res) => {
  try {
    const data = req.body
    const user = await User.findOne({ email: data.email })
    if (!user) {
      res.status(404).json({ error: 'Does not exist.' })
    }
    if (!user.isMatch(data.password)) {
      res.status(401).json({ error: 'Wrong password' })
    } else {
      const payload = jwt.encode({ id: user.id }, cfg.secretKey)
      res.status(200).json({ token: payload })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

