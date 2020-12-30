const db = require('./index');
const mongoose = require('mongoose');
const User = require('./user.js');
const Task = require('./task.js');

const getTasks = (username) => {
  User.findOne({username: username})
  .populate('tasks').exec((err, tasks) => {
    if(err) {
      console.log(err);
    } else {
    console.log('Found ' + tasks + ' from User: ' + username);
    }
  })
}

const addUser = (user) => {
  return User.create(user);
}

const findUser = (username, password) => {
  return User.findOne({username: username}).where({password: password});
}

const addTask = (username, task) => {
  return User.findOne({username: username}).save({tasks: task});
}

const editTask = (username, task) => {
  return User.findOne({username: username}).save({tasks: task});
}

const completeTask = (username, task) => {
  return
}

const deleteTask = (id) => {
  return
}

module.exports.getTasks = getTasks;
module.exports.addUser = addUser;
module.exports.findUser = findUser;
module.exports.addTask = addTask;
module.exports.editTask = editTask;
module.exports.completeTask = completeTask;
module.exports.deleteTask = deleteTask;