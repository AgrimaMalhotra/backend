const generateTask = (task) => {
  global.taskId++;
  console.log(global.taskId);
  return {
    id: global.taskId,
    task: task,
    isComplete: false
  };
};
const getIdEntry = (id, dataTask) => dataTask.findIndex((obj) => obj.id === parseInt(id));

module.exports = { generateTask, getIdEntry };