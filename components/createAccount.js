import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import axios from 'axios';
import styles from '../styles/createAccount.js';

const CreateAccount = () => {
  const [username, onUsernameChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [isValid, onLogin] = useState('');

  const handleCreateAccount = () => {
    axios.post('http://127.0.0.1:3002/api/addUser',
      {
        username,
        password,
        level: 0,
        experience: 0,
        strength: 0,
        intellect: 0,
        charisma: 0,
        healing: 0,
        tasks: [],
      })
      .then((result) => result.data)
      .then((result) => {
        if (result === false) {
          console.log('Username already in use');
          onLogin('false');
        } else {
          console.log('Success');
          onLogin('true');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.createAccountContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        maxLength={16}
        autoCapitalize="none"
        onChangeText={(text) => onUsernameChange(text)}
        value={username}
        accessibilityLabel="Username Input"
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        maxLength={16}
        autoCapitalize="none"
        onChangeText={(text) => onPasswordChange(text)}
        value={password}
        accessibilityLabel="Password Input"
      />
      <Text style={styles.errorText}>
        {isValid === 'false' ? 'Username already in use' : '' }
      </Text>
      <Button
        onPress={() => handleCreateAccount()}
        title="Create Account"
        style={styles.createButton}
        accessibilityLabel="Create account button"
      />
    </View>
  );
};

export default CreateAccount;
