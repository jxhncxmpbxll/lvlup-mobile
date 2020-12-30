import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
import styles from '../styles/login.js';

const Login = () => {
  const [username, onUsernameChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [isValid, onLogin] = useState('');

  const handleLogin = () => {
    axios.post('http://127.0.0.1:3002/api/login',
    {username: username, password: password})
    .then(result => result.data)
    .then(result => {
      if (result === false) {
      console.log('Incorrect Username or Password')
      onLogin('false');
    } else {
      console.log('Success')
      onLogin('true');
    }})
    .catch(err => console.log(err))
  }

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        maxLength={16}
        autoCapitalize="none"
        onChangeText={text => onUsernameChange(text)}
        value={username}
        accessibilityLabel="Username Input"
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        maxLength={16}
        autoCapitalize="none"
        onChangeText={text => onPasswordChange(text)}
        value={password}
        accessibilityLabel="Password Input"
      />
      <Text style={styles.errorText}>
        {isValid === 'false' ? 'Incorrect Username or Password' : '' }
      </Text>
      <Button
        onPress={()=> handleLogin()}
        title="Login"
        accessibilityLabel="Login button"
      />
    </View>
  )
}

export default Login;