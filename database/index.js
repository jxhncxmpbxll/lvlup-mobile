const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lvlup', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then((result) => console.log('database connected!'))
  .catch((err) => console.log('database connection error ', err));
