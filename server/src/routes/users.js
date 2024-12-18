const express = require('express');
const { getAllUsersController, getUsersByIdController, updateUsersController, deleteUsersController } = require('../controllers/usersController.js');

const router = express.Router();

// create task
//router.post('/users', createUsersController); 

// get all tasks
router.get('/users', getAllUsersController);

// get single task
router.get('/users/:_id', getUsersByIdController);

// update task
router.put('/users/:_id', updateUsersController);

// delete task
router.delete('/users/:_id', deleteUsersController);


module.exports  = router;

