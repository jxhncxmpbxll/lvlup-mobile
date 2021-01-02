import React, {useState} from 'react';
import { View, Text, Button, Dimensions } from 'react-native';

const Modal = (props) => {
  const { show = false, innerWidth = '100%', innerHeight = '100%' } = props;
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1000,
      right: 0,
      bottom: 0,
      minHeight: Dimensions.get('window').height,
      minWidth: Dimensions.get('window').width,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: show ? 'flex' : 'none'
    }}>
      <View style={{
        backgroundColor: 'white',
        height: innerHeight,
        width: innerWidth
      }}>
        {props.children}
      </View>
    </View>
  );
}

export default Modal;