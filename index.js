const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())

require('./db/mongodb')

app.use(express.json())
const PORT = 4000

app.listen(PORT, () => {
    console.log(`The server is runing at port ${PORT}`)
})