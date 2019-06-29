const express = require('express')
const bodyParser = require('body-parser')
require('./db')

const JWT = require('./auth/jwt')
const authRouter = require('./auth/router')
const userRouter = require('./user/router')

const app = express()
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(authRouter);
app.use(userRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => `Listening on port ${port}`)