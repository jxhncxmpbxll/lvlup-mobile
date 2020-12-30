const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/utils.js');

const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/tasks', (req, res) => {
  db.getTasks()
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.post('/api/addUser', (req, res) => {
  db.addUser(req.body)
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.post('/api/login', (req, res) => {
  db.findUser(req.body.username, req.body.password)
  .then(result => {
    if (!result) {
    res.status(200).send(false);
    } else {
      res.status(200).send(result);
    }})
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})

app.post('/api/tasks/add', (req, res) => {
  db.addTask(req.body.username, req.body.tasks)
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.put('/api/tasks/edit', (req, res) => {
  db.editTask(req.body)
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.put('/api/tasks/complete', (req, res) => {
  db.completeTask(req.body.username, req.body.selectedTask)
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.delete('/api/tasks/delete', (req, res) => {
  db.deleteTask(req.body)
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;