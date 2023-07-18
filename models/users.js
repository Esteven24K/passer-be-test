const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {user}
 */
const createUser = (pk_user, name, status) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', '${status}') returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {user}
 */
//Se crea nueva funcion
const updateUser = (pk_user, name, status) => {
    try {
      let user = postgresql.public.one(
        `update users set name = '${name}', status = ${status} where pk_user = '${pk_user}' returning *;`
      );
      return user;
    } catch (e) {
      throw new Error(e)
    }
  };
  

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {
  try
  {
    let user = postgresql.public.one(`select * from users where pk_user = '${pk_user}'`);
    return user
  }
  catch(e){
    
  }
    
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = async (pk_user) => {
  try {

    await postgresql.public.none(`delete from users where pk_user = '${pk_user}'`);
    return { pk_user: pk_user };

  } catch (error) {

    throw new Error('Failed to delete user');

  }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}