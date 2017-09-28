import jwt from 'jwt-simple'

module.exports = app => {
  const cfg = require('../auth/config')
  const User = require('../models/users')

  app.post('/gobl/v1/token', async (req, res) => {
    try {
      const {email, password} = req.body
      const result = await User.findOne({email: email})
      if (result.isPassword(password)) {
        const payload = {id: result.id}
        res.status(200).json(jwt.encode(payload, cfg.jwtSecret))
      }
    } catch (err) {
      res.status(401).json({error: err.message})
    }
  })
}
