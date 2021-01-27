import axios from 'axios';

export const login = (username, password) =>
axios.post('http://127.0.0.1:3002/api/login', { username, password });

export const saveToCharacter = (userId, lvl, xp, str, int, chr, heal, applyOnLvlUp) =>
axios.put('http://127.0.0.1:3002/api/updateUser',
{
  _id: userId,
  level: lvl,
  experience: xp,
  strength: str,
  intellect: int,
  charisma: chr,
  healing: heal,
  applyOnLvlUp: applyOnLvlUp
}).then((result) => result.data)
  .then((result) => {
  console.log('User Updated Successfully!', result);
})
.catch((err) => console.log(err));