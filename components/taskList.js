import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Modal from './modal/index';

import axios from 'axios';

import styles from '../styles/taskList';

import Task from './task';
import AddTask from './addTask';

const TaskList = (props) => {


  return (
    <View style={styles.taskListContainer}>

      <View style={styles.taskListHeaderContainer}>
        <Text style={styles.taskListHeader}>Quests</Text>
        <Image style={styles.addIcon} source={require('../src/assets/icons/add-icon.png')}/>
      </View>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
        <Task/>
        <Task/>
        <Task/>
      </ScrollView>
      <Modal><AddTask/></Modal>
    </View>
  );
};

export default TaskList;