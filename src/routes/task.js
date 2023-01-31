const express = require('express');
const { getTasks, getTask, postTask, updateTask, changeTask, deleteTask } = require('../controller/task');
const taskRouter = express.Router();

taskRouter.get('/tasks', getTasks);

taskRouter.get('/task/:id', getTask);

taskRouter.post('/tasks', postTask);

taskRouter.put('/task/:id', updateTask);

taskRouter.patch('/task/:id', changeTask);

taskRouter.delete('/task/:id', deleteTask);

module.exports = taskRouter;