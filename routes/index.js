const express = require('express')

const { users, transactions } = require('../controllers')


const router = express.Router()
//Se crea nueva ruta
router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.updateUser)
    .delete('users/:pk_user', users.deleteUser)
    .get('transactions/:pk_transaction', transactions.getTransaction)
    .get('transactions/:fk_user', transactions.getTransactions)
    .post('transactions/:pk_transaction', transactions.createTransaction)
    .put('transactions/:fk_user', transactions.updateTransactions)

module.exports = router