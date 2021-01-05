import React, { useState }from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/avatar';

import SpriteSheet from 'rn-sprite-sheet';

const Avatar = (props) => {

  const [playIdle, setPlayIdle] = useState(true);
  const [playCheer, setPlayCheer] = useState(false);


  const idle = {
    sprites: {
      1: require('../src/assets/sprites/chrono/idle/idle-1.png'),
      2: require('../src/assets/sprites/chrono/idle/idle-2.png'),
      3: require('../src/assets/sprites/chrono/idle/idle-3.png'),
    }
  }

  const cheer = {
    sprites: {
      1: require('../src/assets/sprites/chrono/quest-complete/quest-complete-1.png'),
      2: require('../src/assets/sprites/chrono/quest-complete/quest-complete-2.png'),
    }
  }

  const idleAnimation = () => {

  }

  const cheerAnimation = () => {

  }

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