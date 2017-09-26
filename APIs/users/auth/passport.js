import bcrypt from 'bcrypt-nodejs'

const User = require('../models/users')
const jwt = require('./jwt')

exports.login = async (req, res) => {
  try {
    const user = await User.findByLocalEmail(req.body.email)
    if (!user) {
      res.status(403).send({error: 'The login information was incorrect'})
    }
    console.log(user)
    console.log(req.body.password)
    const passwordIsValid = await bcrypt.compareSync(user, req.body.password)
    console.log(passwordIsValid)

    if (!passwordIsValid) {
      res.status(403).send({error: 'The login information was incorrect'})
    }

    const data = {
      user: user,
      token: jwt.SignUser(user)
    }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
