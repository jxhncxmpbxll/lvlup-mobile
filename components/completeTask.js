import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Button from './button';

import axios from 'axios';
import styles from '../styles/completeTask.js';

// bug - saveToCharacter is not sending current values stored in state

const CompleteTask = (props) => {

  const [timeSpent, setTimeSpent] = useState('');

  useEffect(()=>{},[props])

  const handleCompleteTask = () => {
    axios.put('http://127.0.0.1:3002/api/tasks/complete',
    {
      _id: props.selectedTask,
      status: 'Completed',
      dateCompleted: new Date(),
      xpValue: (timeSpent * 0.01)
    })
    .then(result => result.data)
    .then(result => {
      const playerXP = props.xp + result.xpValue;
      console.log('Quest Completed Successfully!', result);
      props.setTasks([...removeCompleted(props.selectedTask), result]);
      props.setXP(playerXP);
      updateApplyOnLvlUp(props.selectedTaskCategory);
      lvlUp(playerXP, props.lvl);
      setTimeSpent('');
    }).then(result => {
      saveToCharacter();
      props.toggle(false);
      console.log('after function call saveToCharacter xp: ', props.xp, props.str, props.int, props.chr, props.heal)
    })
    .catch(err => console.log(err))
  }

  const lvlUp = (xp, lvl) => {
    // if player xp reaches 1 on task completion
      // increment player level in app state
      // subtract 1 from player xp in app state
      // return level up message ?
    if (xp >= 1) {
      props.setLvl(lvl + 1);
      props.setXP(xp - 1);
      props.setStr(props.applyOnLvlUp.str);
      props.setInt(props.applyOnLvlUp.int);
      props.setChr(props.applyOnLvlUp.chr);
      props.setHeal(props.applyOnLvlUp.heal);
      console.log('saveToCharacter xp: ', props.xp, props.str, props.int, props.chr, props.heal)
      props.setApplyOnLvlUp({str: 0, int: 0, chr: 0, heal: 0});
    }
  }

  const updateApplyOnLvlUp = (attr) => {
    // on task completion
    // add value to respective attribute in applyOnLvlUp in app state
    props.setApplyOnLvlUp({...props.applyOnLvlUp, [attr]: Math.ceil(timeSpent / 2)});
  }

  const saveToCharacter = () => {
    axios.put('http://127.0.0.1:3002/api/updateUser',
    {
      _id: props.userId,
      level: props.lvl,
      experience: props.xp,
      strength: props.str,
      intellect: props.int,
      charisma: props.chr,
      healing: props.heal,
      applyOnLvlUp: props.applyOnLvlUp
    })
    .then(result => result.data)
    .then(result => {
      console.log('User Updated Successfully!', result);
    })
    .catch(err => console.log(err))
  }

  const removeCompleted = (id) => {
    return props.tasks.filter(task => task._id !== id && task.status === 'In Progress');
  }

  return (
    <View style={styles.completeTaskContainer}>
      <Text>Time Spent to Complete...</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Hour(s)"
        maxLength={16}
        onChangeText={text => setTimeSpent(text)}
        value={timeSpent}
        accessibilityLabel="Time to Complete Input"
      />
      <Button
        title="Complete Quest"
        onClick={handleCompleteTask}
        accessibility={"Complete quest button"}
      />
    </View>
  )
}

export default CompleteTask;