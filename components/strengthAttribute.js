import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/attribute';

const StrengthAttribute = (props) => {
  return (
    <View style={styles.attributeContainer}>
      <Text style={styles.attributeTitle}>STR</Text>
       <View style={styles.attributeIconContainer}>
         <Image style={styles.attributeIcon} source={require('../src/assets/icons/str-icon.png')}/>
       </View>
       <View style={styles.attributeValue}>
         <Text style={styles.strText}>{props.str}</Text>
       </View>
    </View>
  );
};

export default StrengthAttribute;