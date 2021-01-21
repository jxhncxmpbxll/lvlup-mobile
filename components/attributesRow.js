import React from 'react';
import { View, Text } from 'react-native';

import StrengthAttribute from './strengthAttribute';
import IntellectAttribute from './intellectAttribute';
import CharismaAttribute from './charismaAttribute';
import HealingAttribute from './healingAttribute';

import styles from '../styles/attributesRow';

const AttributesRow = (props) => (
  <View style={styles.attributesContainer}>
    <StrengthAttribute str={props.str} />
    <IntellectAttribute int={props.int} />
    <CharismaAttribute chr={props.chr} />
    <HealingAttribute heal={props.heal} />
  </View>
);

export default AttributesRow;
