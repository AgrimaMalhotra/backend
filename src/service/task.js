const { generateTask, getIdEntry } = require('../utils/serverUtils')

const getTasks = () => {
  console.log("GET /tasks Service");
  return global.JSONdata;
}

const getTask = (id) => {
  console.log("GET /task/:id Service");
  const requestTaskId = getIdEntry(id, global.JSONdata.tasks);
  return global.JSONdata.tasks[requestTaskId];
}

const postTask = (taskData) => {
  console.log("POST /tasks Service");
  const newTask = generateTask(taskData.task);
  global.JSONdata.tasks.push(newTask);
  return newTask;
}

const updateTask = (id, taskData) => {
  console.log("PUT /task/:id Service");
  const tasksId = getIdEntry(id, global.JSONdata.tasks);
  global.JSONdata.tasks[tasksId] = taskData;
  return global.JSONdata.tasks[tasksId];
}

const changeTask = (id, taskData) => {
  console.log("PATCH /task/:id Service");
  const keys = Object.keys(taskData);
  const tasksId = getIdEntry(id, global.JSONdata.tasks);
  keys.forEach(key => global.JSONdata.tasks[tasksId][key] = taskData[key]);
  return global.JSONdata.tasks[tasksId];
}

const deleteTask = (id) => {
  console.log("DELETE /task/:id Service")
  global.JSONdata.tasks.splice(getIdEntry(id, global.JSONdata.tasks), 1);
  return global.JSONdata.tasks;
}

module.exports = { getTasks, getTask, postTask, updateTask, changeTask, deleteTask }