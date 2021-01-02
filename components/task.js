import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from './modal/index';

import axios from 'axios';

import styles from '../styles/task';


const Task = (props) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>Gym</Text>
      {/* <Image style={styles.taskIcon} source={require(`../src/assets/icons/${props.category}-icon.png`)}/> */}
      <Image style={styles.taskIcon} source={require('../src/assets/icons/edit-icon.png')}/>
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.ButtonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;