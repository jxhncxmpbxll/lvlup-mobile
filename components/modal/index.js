import React, {useState} from 'react';
import { View, Text, Button, Dimensions, TouchableOpacity, Image } from 'react-native';

const Modal = (props) => {
  const { show = false, innerWidth = '100%', innerHeight = '100%', background = 'white' } = props;
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
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: show ? 'flex' : 'none'
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: props.background || 'white',
        height: innerHeight,
        width: innerWidth
      }}>
         {
            (props.toggle) ? <TouchableOpacity onPress={()=> props.toggle(false)} style={{
            position: 'absolute',
            padding: 8,
            top: 7,
            right: 7,
            zIndex: 1000
          }}>
            <Image style={{
              position: 'relative',
              maxHeight: 10,
              maxWidth: 10
            }} source={require('../../src/assets/icons/close_icon.png')} />
          </TouchableOpacity> : null
         }
        {props.children}
      </View>
    </View>
  );
}

export default Modal;