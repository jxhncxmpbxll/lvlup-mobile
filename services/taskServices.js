import axios from 'axios';

export const getTasks = (id) =>
axios.post('http://127.0.0.1:3002/api/tasks', { _id: id });

export const completeTask = (id, xpValue) =>
  axios.put('http://127.0.0.1:3002/api/tasks/complete',
    {
      _id: id,
      status: 'Completed',
      dateCompleted: new Date(),
      xpValue: xpValue,
    });

export const addTask = (questName, category, userId) =>
  axios.post('http://127.0.0.1:3002/api/tasks/add',
      {
        name: questName,
        category: category,
        status: 'In Progress',
        dateCreated: new Date(),
        dateCompleted: '',
        user: userId,
      });