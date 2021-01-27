import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/attribute';

const CharismaAttribute = (props) => (
  <View style={styles.attributeContainer}>
    <Text style={styles.attributeTitle}>CHR</Text>
    <View style={styles.attributeIconContainer}>
      <Image style={styles.attributeIcon} source={require('../src/assets/icons/chr-icon.png')} />
    </View>
    <View style={styles.attributeValue}>
      <Text style={styles.chrText}>{props.chr}</Text>
    </View>
  </View>
);

export default CharismaAttribute;
