const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const router = require('./app/routes/index')
const PORT = process.env.APP_PORT || 3000
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router(app)

app.listen(PORT, (e) => {
    if (e) return console.log(`Error: ${e}`)

    console.log(`Server working on port ${PORT}`)
})
