import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/avatar';

const Avatar = (props) => {
  return (
    <View style={styles.avatarContainer}>
       <View style={styles.avatarTextContainer}>
          <Text style={styles.user}>{props.user}</Text>
        </View>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('../src/assets/sprites/chrono/idle/idle-1.png')}/>
        <Image style={styles.avatarBG} source={require('../src/assets/backgrounds/dungeon-bg.png')}/>
       </View>
    </View>
  );
};

export default Avatar;