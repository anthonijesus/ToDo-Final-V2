const { Router } = require('express');
const { loginUserController, createUserController } = require('../controllers/authController.js');

const routerAuth = Router();

// Login User
routerAuth.post('/login', loginUserController);

// Register User
routerAuth.post('/user', createUserController);

module.exports = routerAuth;
