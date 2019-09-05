const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const resultRouter = require('./result/router')

const app = express()
const port = process.env.PORT || 4000

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(resultRouter)

app.listen(port, () => console.log(`Listening on :${port}`))