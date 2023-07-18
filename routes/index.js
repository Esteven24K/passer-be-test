const express = require('express')

const { users } = require('../controllers')

const router = express.Router()
//Se crea nueva ruta
router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.updateUser);

module.exports = router