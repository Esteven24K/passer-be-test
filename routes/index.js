const express = require('express')

const { users } = require('../controllers')
const {transactions} = require('../controllers')


const router = express.Router()
//Se crea nueva ruta
router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.updateUser)
    .delete('/users/:pk_user', users.deleteUser)
    .get('/transactions/:pk_transaction', transactions.getTransaction)
    .get('/transactions/user/:fk_user', transactions.getTransactions)
    .post('/transactions/', transactions.createTransaction)
    .put('/transactions/:fk_user', transactions.updateTransactions)

module.exports = router