const  transactionService  = require('../services/transactions')

const getTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    try {
        let transaction = await transactionService.getTransaction(pk_transaction)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        res.sendStatus(500) && next(e)
    }
}
const getTransactions = async (req, res, next) => {
    const { fk_user } = req.params
    try {
        let transactions = await transactionService.getTransactions(fk_user)
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
        let transaction = transactionService.createTransaction(pk_transaction, fk_user, description, amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
//Se crea nueva funcion
const updateTransactions = async (req, res, next) => {
    const { fk_user, description, amount} = req.body;
    try {
      let transaction = await transactionService.updateTransactions(fk_user, description, amount);
      res.status(200).send(transaction);
      next();
    } catch (e) {
      res.sendStatus(500) && next(e);
    }
};



module.exports = {
    getTransaction,
    getTransactions,
    createTransaction,
    updateTransactions
};
