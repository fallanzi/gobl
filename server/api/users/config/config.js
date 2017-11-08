import passport from 'passport'

module.exports = {
  opts: {
    expiresIn: 60*60,
  },
  secretKey: 'jds@#fdjklds456PDKfggd25r',
  auth: passport.authenticate('jwt', { session: false }),
}
