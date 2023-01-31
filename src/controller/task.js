const taskService = require('../service/task');

const getTasks = (req, res) => {
  console.log('GET /tasks Controller');
  res.send(taskService.getTasks());
};

const getTask = (req, res) => {
  console.log('GET /tasks/:id Controller');
  res.send(taskService.getTask(req.params.id));
};

const postTask = (req, res) => {
  console.log('POST /tasks Controller');
  res.send(taskService.postTask(req.body));
};

const updateTask = (req, res) => {
  console.log('PUT /tasks/:id Controller');
  res.send(taskService.updateTask(req.params.id, req.body));
};
const changeTask = (req, res) => {
  console.log('PATCH /tasks/:id Controller');
  res.send(taskService.changeTask(req.params.id, req.body));
};

const deleteTask = (req, res) => {
  console.log('DELETE /task/:id Controller');
  res.send(taskService.deleteTask(req.params.id));
};

module.exports = { getTasks, getTask, postTask, updateTask, changeTask, deleteTask };