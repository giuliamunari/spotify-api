const express = require('express');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('./model');

const router = new Router();

router.post('/users', (req, res, next) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        password_confirmation: bcrypt.hashSync(req.body.password, 10)
    }
    User
        .create(user)
        .then(user => {
            res
                .status(201)
                .json({
                    message: "A NEW USER WAS ADDED",
                    "new user": user
                })
        })
        .catch(error => next(error))
})

router.get('/users', function (req, res, next) {
    User.findAll()
        .then(users => res.json({ users }))
        .catch(err => next(err))
})

module.exports = router;