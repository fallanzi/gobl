import jwt from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET || 'secret'

exports.SignUser = function (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign({ user: user }, jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
