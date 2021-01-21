const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String,
  level: Number,
  experience: Number,
  strength: Number,
  intellect: Number,
  charisma: Number,
  healing: Number,
  applyOnLvlUp: {
    str: Number,
    int: Number,
    chr: Number,
    heal: Number,
  },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

UserSchema.virtual('tasks', {
  ref: 'Task',
  foreignField: 'user',
  localField: '_id',
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
