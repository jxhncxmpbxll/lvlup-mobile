const db = require('./index');
const mongoose = require('mongoose');
const User = require('./user.js');
const Task = require('./task.js');

const getTasks = (userId) => {
  return new Promise((res, rej) => {
    User.findOne({ _id: userId })
      .populate('tasks').exec((err, tasks) => {
        if (err) {
          console.log(err);
          rej(err)
        } else {
          console.log('Found ' + tasks + ' from User: ' + userId);
          res(tasks)
        }
      })
  })
}

const addUser = (user) => {
  return User.create(user);
}

const findUser = (username, password) => {
  return User.findOne({username: username}).where({password: password});
}

const updateUser = (vals) => {
  const { _id, level, experience, strength, intellect, charisma, healing, applyOnLvlUp } = vals;
  const options = { new: true};
  return User.findByIdAndUpdate(
    {_id: _id}, {$set: {
      level: level,
      experience: experience,
      strength: strength,
      intellect: intellect,
      charisma: charisma,
      healing: healing,
      applyOnLvlUp: applyOnLvlUp }
    }, options);
}

const addTask = (task) => {
  return Task.create(task);
}

const editTask = (taskId) => {
  return User.findOne({_id: taskId}).save(task);
}

const completeTask = (updatedTask) => {
  const { _id, status, dateCompleted, xpValue } = updatedTask;
  const options = { new: true};
  return Task.findByIdAndUpdate(
    {_id: _id}, {$set: { status: status, dateCompleted: dateCompleted, xpValue: xpValue }}, options
  );
}

const deleteTask = (id) => {
  return Task.findOneAndDelete({_id: id})
}

module.exports.getTasks = getTasks;
module.exports.addUser = addUser;
module.exports.findUser = findUser;
module.exports.updateUser = updateUser;
module.exports.addTask = addTask;
module.exports.editTask = editTask;
module.exports.completeTask = completeTask;
module.exports.deleteTask = deleteTask;