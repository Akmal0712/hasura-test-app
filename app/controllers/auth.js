const bcrypt = require('bcrypt')
const authHelper = require('../helpers/authhelper')
const axios = require('../helpers/axiosRequest')

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const request = {
            query: `query MyQuery {
              test_users(where: {email: {_eq: "${email}" }}) {
                email
                id
                password
              }
            }`
        }
        const { data } = await axios.post('',request)
        const user = data.data.test_users[0]

        if (!user) {
            res.status(401).json({ message: 'User does not exist' })
        }

        const isValid = bcrypt.compareSync(password, user.password)
        if(isValid) {
           try {
               const access_token = authHelper.generateAccessToken(user.id)

               res.json({
                   id: user.id,
                   access_token: `Bearer ${access_token}`,
               })
           }
           catch (e) {
               res.status(500).json(e)
           }
        }
        else {
            res.status(401).json({ message: 'Invalid credentials' })
        }
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}


module.exports = { login }
