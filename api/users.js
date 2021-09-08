const express = require('express');

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  
} = require('../controllers/users');

const api = express.Router();

api
  .route('/') 
  .get(getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)


 




module.exports = api;