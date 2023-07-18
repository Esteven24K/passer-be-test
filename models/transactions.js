const { postgresql } = require('../databases/postgresql')


/**
 * Get an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @returns {{pk_transaction: 1, description: "registro nuevo"}} User schema
 */
const getTransaction = (pk_transaction) => {
  try{
    let transaction = postgresql.public.one(`select * from transaction where pk_transaction = '${pk_transaction}'`);
    return transaction
  }
  catch(e){
    throw new Error(e)
  }
    
}

/**
 * create an transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction:1, fk_user: 1, description: "transaccion nueva, amount: 1.2"}}
 */
const createTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transaction values ('${pk_transaction}', '${fk_user}', '${description}', '${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update  transactions
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{fk_user: 1, description: "Registro actualizado", 1.3}}
 */
//Se crea nueva funcion
const updateTransactions = (fk_user, description, amount) => {
    try {
      let transaction = postgresql.public.one(
        `update transaction set description = '${description}', amount = ${amount} where fk_user = '${fk_user}' returning *;`
      );
      return transaction;
    } catch (e) {
      throw new Error(e)
    }
  };

/**
 * Get the transactions of a specific user
 * @param {number} fk_user User primary key
 * @returns {Array} Array of transaction objects
 */
const getTransactions = async (fk_user) => {
    try {
      const query = `select * from transaction where fk_user = '${fk_user}'`;
      const transactions = await postgresql.public.many(query);
      return transactions;
    } catch (error) {
      throw new Error(error.message);
    }
  };

module.exports = {
    getTransaction,
    getTransactions,
    createTransaction,
    updateTransactions
}
