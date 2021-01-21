import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    onPress={() => props.onClick()}
    style={[{
      flex: 1,
      maxHeight: 40,
      minWidth: props.minWidth || '50%',
      borderRadius: 4,
      marginVertical: 12,
      maxWidth: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      position: 'relative',
      backgroundColor: 'turquoise',
    }, { ...props.styles }]}
    accessibilityLabel={props.accessibility}
  >
    <Text>{props.title || ''}</Text>
  </TouchableOpacity>
);

export default Button;
