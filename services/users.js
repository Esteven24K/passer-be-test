const usersModel = require('../models/users')

/**
 * Get an espcific user
 * @param {number} pk_user User id
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const getUser = async (pk_user) => {
    try {
        return await usersModel.getUser(pk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Create an user
 * @param {number} pk_user User id
 * @param {string} name User name
 * @returns {user}
 */
const createUser = async (pk_user, name, status) => {
    try {
        return usersModel.createUser(pk_user, name, status)
    } catch (e) {
        throw new Error(e.message)
    }
}


/**
 * Update an user
 * @param {number} pk_user User id 
 * @param {string} name User name "pedro"
 * @param {Boolean} status User status true
 * @returns {{pk_user: 1, name: "pedro"}}
 */
//Se crea nueva funcion
const updateUser = async (pk_user, name, status) => {
    try {
      return usersModel.updateUser(pk_user, name, status);
    } catch (e) {
      throw new Error(e.message);
    }
};
 
/**
 * Delete an user
 * @param {number} pk_user User id
 * @returns {{pk_user: 1}}
 */
const deleteUser = async (pk_user) => {
    try {
      // Verificar si el usuario existe antes de eliminarlo
      const user = await usersModel.getUser(pk_user);

  
      if (user) {
        // Realizar la eliminación del usuario
        return usersModel.deleteUser(pk_user);
  
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}