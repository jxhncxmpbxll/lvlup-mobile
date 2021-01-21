import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import styles from '../styles/experienceBar';

const ExperienceBar = (props) => (
  <View style={styles.XPContainer}>
    <View style={styles.lvl}>
      <Text style={styles.lvlHeader}>LVL</Text>
      <Text style={styles.lvlNum}>{props.lvl}</Text>
    </View>
    <View style={styles.XPBar}>
      <ProgressBar
        progress={props.xp}
        width={200}
        borderRadius={0}
        useNativeDriver
      />
      <Text style={styles.XPHeader}>XP</Text>
    </View>
  </View>
);

export default ExperienceBar;
