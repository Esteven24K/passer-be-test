const transactionsModel = require('../models/transactions')

/**
 * Get an espcific transaction
 * @param {number} pk_transaction Transaction id
 * @returns {{pk_transaction: 1, pk_user: 1, description: "Registro nuevo", amount: 3.4}}
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await transactionsModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Get an espcific transaction
 * @param {number} pk_transaction Transaction id
 * @returns {Array} Array of transaction objects
 */
const getTransactions = async (pk_user) => {
    try {
        return await transactionsModel.getTransactions(pk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Create an transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction:1, fk_user: 1, description: "transaccion nueva, amount: 1.2"}}
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    getTransaction,
    getTransactions,
    createTransaction
}