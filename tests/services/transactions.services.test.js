const transactions = require('../../services/transactions')

describe('transactions main functions', () => {

    // getTransaction function test
    test('getTransaction with {pk_transaction: 1}', async () => {
        let transaction = await transactions.getTransaction(1)
        expect(transaction.pk_transaction).toBe(1);
    });

    // createTransaction function test
    test('createTransaction with {pk_transaction:1, fk_user: 5, description: "Nuevo registro", amount:"1.2" }', async () => {
        let transaction = await transactions.createTransaction(1,5, "Se registro", 1.2);
        expect(transaction.pk_transaction).toBe(1);
    });

    // getTransactions function test
    test('getTransactions with {fk_user: 5}', async () => {
        let userTransactions = await transactions.getTransactions(5);
        expect(userTransactions.length).toBeGreaterThan(0);
    });
})