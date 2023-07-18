const users = require('../services/users')

const getUser = async (req, res, next) => {
    const { pk_user } = req.params
    try {
        let user = await users.getUser(pk_user)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const createUser = async (req, res, next) => {
    const { pk_user, name, status} = req.body
    try {
        let user = users.createUser(pk_user, name, status)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
//Se crea nueva funcion
const updateUser = async (req, res, next) => {
    const { pk_user, name, status } = req.body;
    try {
      let user = await users.updateUser(pk_user, name, status);
      res.status(200).send(user);
      next();
    } catch (e) {
      res.sendStatus(500) && next(e);
    }
};
//Se crea nueva funcion
const deleteUser = async (req, res, next) => {
    const { pk_user } = req.params;
    try {
      await users.deleteUser(pk_user);
  
      res.status(200).send({ pk_user: pk_user });
      next();
    } catch (error) {
      res.sendStatus(500) && next(error);
    }
  };
  
module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}