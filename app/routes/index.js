const router = (app) => {
    const passport = require('passport')
    require('../middleware/pass')(passport)
    const auth = require('./auth')

    app.use(passport.initialize())

    app.use('/', auth)
}

module.exports = router
