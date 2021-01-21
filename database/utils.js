const mongoose = require('mongoose');
const db = require('../database/index.js');
const User = require('./user.js');
const Task = require('./task.js');

const getTasks = (userId) => new Promise((res, rej) => {
  User.findOne({ _id: userId })
    .populate('tasks').exec((err, tasks) => {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        console.log(`Found ${tasks} from User: ${userId}`);
        res(tasks);
      }
    });
});

const addUser = (user) => User.create(user);

const findUser = (username, password) => User.findOne({ username }).where({ password });

const updateUser = (vals) => {
  const { _id, level, experience, strength, intellect, charisma, healing, applyOnLvlUp } = vals;
  const options = { new: true };
  return User.findByIdAndUpdate(
    { _id }, { $set: {
      level,
      experience,
      strength,
      intellect,
      charisma,
      healing,
      applyOnLvlUp },
    }, options,
  );
};

const addTask = (task) => Task.create(task);

// const editTask = (taskId) => User.findOne({ _id: taskId }).save(task);

const completeTask = (updatedTask) => {
  const { _id, status, dateCompleted, xpValue } = updatedTask;
  const options = { new: true };
  return Task.findByIdAndUpdate(
    { _id }, { $set: { status, dateCompleted, xpValue } }, options,
  );
};

const deleteTask = (id) => Task.findOneAndDelete({ _id: id });

module.exports.getTasks = getTasks;
module.exports.addUser = addUser;
module.exports.findUser = findUser;
module.exports.updateUser = updateUser;
module.exports.addTask = addTask;
// module.exports.editTask = editTask;
module.exports.completeTask = completeTask;
module.exports.deleteTask = deleteTask;
