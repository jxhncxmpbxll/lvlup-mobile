import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/attribute';

const HealingAttribute = (props) => {
  return (
    <View style={styles.attributeContainer}>
      <Text style={styles.attributeTitle}>HEAL</Text>
       <View style={styles.attributeIconContainer}>
        <Image style={styles.attributeIcon}source={require('../src/assets/icons/heal-icon.png')}/>
       </View>
       <View style={styles.attributeValue}>
         <Text style={styles.healText}>{props.heal}</Text>
       </View>
    </View>
  );
};

export default HealingAttribute;