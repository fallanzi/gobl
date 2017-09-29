module.exports = {
  jwtSecret: process.env.SECRET,
  jwtSession: {session: false},
  expiresIn: {
    expiresIn: 7 * 24 * 60
  }
}
