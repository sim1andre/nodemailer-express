'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'


import mail_routes from './api/routes/mail-routes'

var app = express()
var router = express.Router()

const port = 14000

// Settings
app.use(methodOverride())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mail_routes(app, router)

app.listen(port, () => {
  console.log(`Running at port ${port}`)
})
