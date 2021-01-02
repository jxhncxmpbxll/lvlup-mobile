import React, {useState} from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';

import axios from 'axios';
import styles from '../styles/addTask.js';

const AddTask = (props) => {
  const [taskName, onTaskNameChange] = useState('');
  const [timeInvestment, onTimeChange] = useState('');
  const [category, onCategoryChange] = useState('');

  const handleAddTask = () => {
    axios.post('http://127.0.0.1:3002/api/addTask',
    {
      name: taskName,
      category: category,
      status: 'In Progress',
      dateCreated: new Date(),
      dateCompleted: '',
      user: props.user
    })
    .then(result => result.data)
    .then(result => {
      console.log('Quest Added Successfully!', result);
    })
    .catch(err => console.log(err))
  }

  const [selected, setSelected] = useState('');

  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Quest Name"
        maxLength={16}
        autoCapitalize="none"
        onChangeText={text => onQuestNameChange(text)}
        value={''}
        accessibilityLabel="Quest name Input"
      />
      <View accessibilityLabel="Select a Category">
        <Picker
          selected={selected}
          style={{ height: 15, width: 30 }}
          onValueChange={(category, catIndex) => setSelected(category)}
        >
          <Picker.Item label="Strength" value="str" />
          <Picker.Item label="Intellect" value="int" />
          <Picker.Item label="Charisma" value="chr" />
          <Picker.Item label="Healing" value="heal" />
        </Picker>
      </View>
      <Button
        onPress={()=> handleAddTask()}
        title="Add Quest"
        style={styles.createButton}
        accessibilityLabel="Create quest button"
      />
    </View>
  )
}

export default AddTask;