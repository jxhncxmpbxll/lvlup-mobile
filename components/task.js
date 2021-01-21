import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Modal from './modal/index';

import styles from '../styles/task';

const Task = (props) => {
  const icons = {
    attribute: {
      str: require('../src/assets/icons/str-icon.png'),
      int: require('../src/assets/icons/int-icon.png'),
      chr: require('../src/assets/icons/chr-icon.png'),
      heal: require('../src/assets/icons/heal-icon.png'),
    },
  };

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{props.name}</Text>
      <Image style={styles.taskIcon} source={icons.attribute[props.category]} />
      <Image style={styles.taskIcon} source={require('../src/assets/icons/edit-icon.png')} />
      <TouchableOpacity
        style={styles.completeButton}
        onPress={() => {
          props.toggle(true);
          props.setSelectedTask(props.id);
          props.setSelectedTaskCategory(props.category);
        }}
      >
        <Text style={styles.ButtonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
