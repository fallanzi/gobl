import User from '../models/users'

module.exports = (req) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    nickname: req.body.nickname,
    role: req.body.role,
    created: new Date(),
  })
  user.password = user.hash(req.body.password)
  return user
}
