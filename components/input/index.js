import React from 'react';
import { TextInput } from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      style={[{
        flex: 1,
        borderBottomWidth: 0,
        marginTop: 10,
        borderRadius: 2,
        padding: 7,
        maxHeight: 40,
        borderColor: 'lightgrey',
        borderBottomWidth: 0.5,
        minWidth: props.minWidth || '50%',
        maxWidth: '90%',
        position: 'relative',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
      }, { ...props.styles }]}
      autoCapitalize={props.autoCaps}
      placeholder={props.placeholder}
      maxLength={props.maxlength}
      secureTextEntry={props.security || false}
      onChangeText={text => props.change(text)}
      value={props.value}
      accessibilityLabel={props.accessibility}
    />
  );
};

export default Input;