const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/auth/user')
const secret = process.env.SECRET_KEY

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
           try {
               const user = await User.findOne({
                   where: { id: payload.id},
                   attributes: ['id', 'login']
               })
               if (user) {
                   done(null, user)
               } else {
                   done(null, false)
               }
           }
           catch (e) {
               console.log(e)
           }
        })
    )
}
