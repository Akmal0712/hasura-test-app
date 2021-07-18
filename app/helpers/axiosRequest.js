const axios = require('axios')

axios.defaults.baseURL = process.env.hasura_api
axios.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
}

module.exports = axios
