const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: String,
  category: String,
  status: String,
  dateCreated: Date,
  dateCompleted: Date,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;