import User from '../models/users'

exports.all = (req, res, next) => {
  console.log('BEGIN ROUTES :::: OK')
  next()
}

exports.register = async (req, res) => {
  try {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      nickname: req.body.nickname,
      created: new Date(),
    })
    user.password = user.hash(req.body.password)
    res.status(201).json(await user.save())
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
