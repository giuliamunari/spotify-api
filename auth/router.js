const { Router } = require('express')
const { toJWT } = require('./jwt');
const User = require('../users/model')
const bcrypt = require('bcrypt');
const auth = require('./middleware')

const router = new Router()

router.post('/tokens', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    if (email && password) {
        User
            .findOne({
                where: {
                    email: email
                }
            })
            .then(entity => {
                if (!entity) {
                    res
                        .status(400)
                        .send({
                            message: 'Wrong email'
                        })
                }
                if (bcrypt.compareSync(password, entity.password)) {

                    res
                        .send({
                            message: "Token",
                            token: toJWT({ userId: entity.id })
                        })
                } else {
                    res
                        .status(400)
                        .send({
                            message: 'Wrong password'
                        })
                }
            })
            .catch(err => {
                console.error(err)
                res
                    .status(500)
                    .send({
                        message: 'Something went wrong'
                    })
            })
    } else {
        res
            .status(400)
            .send({
                message: "Please supply a valid email and password"
            })
    }
})

router.get('/secret-endpoint', auth, (req, res) => {
    res.send({
      message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
    })
  })

module.exports = router