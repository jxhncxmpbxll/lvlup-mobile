import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/attribute';

const IntellectAttribute = (props) => {
  return (
    <View style={styles.attributeContainer}>
      <Text style={styles.attributeTitle}>INT</Text>
       <View style={styles.attributeIconContainer}>
        <Image style={styles.attributeIcon} source={require('../src/assets/icons/int-icon.png')}/>
       </View>
       <View style={styles.attributeValue}>
         <Text style={styles.intText}>{props.int}</Text>
       </View>
    </View>
  );
};

export default IntellectAttribute;