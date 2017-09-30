import express from 'express'
import passport from 'passport'
import ctrl from '../controllers/users'

const router = express.Router()

router.post('/', passport.authenticate('jwt', { session: false }), ctrl.register)
router.post('/login', ctrl.login)


module.exports = router

// module.exports = (app) => {
//   app.route('/gobl/v1/users')
//     .all(ctrl.all)
//     .post(ctrl.register)

//   app.route('/gobl/v1/users/login')
//     .post(ctrl.login)
// }
