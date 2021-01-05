const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: String,
  category: String,
  status: String,
  dateCreated: Date,
  dateCompleted: Date,
  xpValue: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;