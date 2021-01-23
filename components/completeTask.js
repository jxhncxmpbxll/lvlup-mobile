import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Button from './button';

import styles from '../styles/completeTask.js';

const CompleteTask = (props) => {

  const [timeSpent, setTimeSpent] = useState('');

  const handleCompleteTask = () => {
    props.setCompletedTask({
        _id: props.selectedTask,
        xpValue: (timeSpent * 0.01),
        category: props.selectedTaskCategory,
        timeSpent: timeSpent
    });
    props.setTaskCompletion(true);
    setTimeSpent('');
    props.toggle(false);
  }

  return (
    <View style={styles.completeTaskContainer}>
      <Text>Time Spent to Complete...</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Hour(s)"
        maxLength={16}
        onChangeText={(text) => setTimeSpent(text)}
        value={timeSpent}
        accessibilityLabel="Time to Complete Input"
      />
      <Button
        title="Complete Quest"
        onClick={handleCompleteTask}
        accessibility="Complete quest button"
      />
    </View>
  );
};

export default CompleteTask;
