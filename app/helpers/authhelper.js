const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const { tokens } = require('../../config/app').jwt
const secret = process.env.SECRET_KEY
const generateAccessToken = (userId) => {
    const payload = {
        id: userId,
        type: tokens.access.type
    }
    const expiresIn = { expiresIn: tokens.access.expiresIn }

    return jwt.sign(payload, secret, expiresIn)
}


module.exports = {
    generateAccessToken,
}
