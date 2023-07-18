const { transactions } = require('.')

const getTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    try {
        let transaction = await transactions.getTransaction(pk_transaction)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getTransactions = async (req, res, next) => {
    const { pk_user } = req.params
    try {
        let transactions = await transactions.getTransactions(pk_user)
        res.status(200).send(transactions)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const createTransaction = async (req, res, next) => {
    const { pk_transaction, fk_user, description, amount} = req.body
    try {
        let transaction = transactions.createTransaction(pk_transaction, fk_user, description, amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    getTransaction,
    getTransactions,
    createTransaction
}