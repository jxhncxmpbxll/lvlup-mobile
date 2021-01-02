import React from 'react';
import { View, Text } from 'react-native';

import StrengthAttribute from '../components/strengthAttribute';
import IntellectAttribute from '../components/intellectAttribute';
import CharismaAttribute from '../components/charismaAttribute';
import HealingAttribute from '../components/healingAttribute';


import styles from '../styles/attributesRow';

const AttributesRow = (props) => {
  return (
    <View style={styles.attributesContainer}>
      <StrengthAttribute str={props.str}/>
      <IntellectAttribute int={props.int}/>
      <CharismaAttribute chr={props.chr}/>
      <HealingAttribute heal={props.heal}/>
    </View>
  );
};

export default AttributesRow;