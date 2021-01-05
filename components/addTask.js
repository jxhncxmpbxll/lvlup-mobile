import React, {useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import axios from 'axios';
import styles from '../styles/addTask.js';

const AddTask = (props) => {

  const [questName, setQuestChange] = useState('');
  const [category, onCategoryChange] = useState('');

  const handleAddTask = () => {
    axios.post('http://127.0.0.1:3002/api/tasks/add',
    {
      name: questName,
      category: category,
      status: 'In Progress',
      dateCreated: new Date(),
      dateCompleted: '',
      user: props.userId
    })
    .then(result => result.data)
    .then(result => {
      console.log('Quest Added Successfully!', result);
      props.setTasks([...props.tasks, result]);
      props.toggle();
      setQuestChange('');
    })
    .catch(err => console.log(err))
  }

    const categoryDisplay = () => {
      if (category === 'str') {
        return 'Strength';
      }
      if (category === 'int') {
        return 'Intellect';
      }
      if (category === 'chr') {
        return 'Charisma';
      }
      if (category === 'heal') {
        return 'Healing';
      }
    }


  return (
    <View style={styles.addTaskContainer}>
      <TouchableOpacity style={styles.closeIcon} onPress={()=> {
        props.toggle();
        setQuestChange('');
      }}>
        <Image style={styles.closeIcon} source={require('../src/assets/icons/close_icon.png')}/>
      </TouchableOpacity>
      <Text>Your next Quest is..</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Quest Name"
        maxLength={16}
        onChangeText={text => setQuestChange(text)}
        value={questName}
        accessibilityLabel="Quest name Input"
      />
      <View style={styles.categoryPicker} accessibilityLabel="Select a Category">
        <TouchableOpacity
          onPress={()=> onCategoryChange('str')}
          accessibilityLabel="Select Strength"
        >
          <Image style={styles.attributeIcon} source={require('../src/assets/icons/str-icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> onCategoryChange('int')}
          accessibilityLabel="Select Intellect"
        >
          <Image style={styles.attributeIcon} source={require('../src/assets/icons/int-icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> onCategoryChange('chr')}
          accessibilityLabel="Select Charisma"
        >
          <Image style={styles.attributeIcon} source={require('../src/assets/icons/chr-icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> onCategoryChange('heal')}
          accessibilityLabel="Select Charisma"
        >
          <Image style={styles.attributeIcon} source={require('../src/assets/icons/heal-icon.png')}/>
        </TouchableOpacity>
      </View>
      <Text>{categoryDisplay()}</Text>
      <TouchableOpacity
        onPress={()=> handleAddTask()}
        style={styles.createButton}
        accessibilityLabel="Create quest button"
      >
      <Text>Add Quest</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTask;