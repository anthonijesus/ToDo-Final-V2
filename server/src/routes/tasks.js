const express = require('express');
const { createTaskController, getAllTaskController, getTaskByIdController, updateTaskController, deleteTaskController } = require('../controllers/taskController.js');

const router = express.Router();

// create task
router.post('/task', createTaskController); 

// get all tasks
router.get('/task', getAllTaskController);

// get single task
router.get('/task/:_id', getTaskByIdController);

// update task
router.put('/task/:_id', updateTaskController);

// delete task
router.delete('/task/:_id', deleteTaskController);


module.exports  = router;