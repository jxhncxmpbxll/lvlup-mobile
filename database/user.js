const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  level: Number,
  experience: Number,
  strength: Number,
  intellect: Number,
  charisma: Number,
  healing: Number,
  tasks: [{task: {type: Schema.Types.ObjectId, ref: 'Task'}}]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
