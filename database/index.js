const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lvlup', { useNewUrlParser: true })
    .then(result => console.log('database connected!'))
    .catch(err => console.log('database connection error ', err));