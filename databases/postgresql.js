const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                insert into users values (123, 'Juan', true);`);

postgresql.public.none(`create table transaction(pk_transaction integer, fk_user integer, description text, amount float);
    insert into transaction (pk_transaction, fk_user, description, amount)
    values (1, 123, 'Descripción de la transacción', 10.5);`);


module.exports = {
    postgresql
}