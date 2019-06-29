const express = require('express')
const bodyParser = require('body-parser')
require('./db')

const JWT = require('./auth/jwt')
const authRouter = require('./auth/router')
const userRouter = require('./users/router')

require('./playlists/model')
const playlistRouter = require('./playlists/router')

const app = express()
const jsonParser = bodyParser.json();
app.use(jsonParser)
app.use(authRouter)
app.use(userRouter)
app.use(playlistRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => `Listening on port ${port}`)