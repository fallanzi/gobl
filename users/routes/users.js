import express from 'express'
import passport from 'passport'
import ctrl from '../controllers/users'

const router = express.Router()

router.post('/', passport.authenticate('jwt', { session: false }), ctrl.register)
router.get('/list', passport.authenticate('jwt', { session: false }), ctrl.list)
router.post('/login', ctrl.login)


module.exports = router

