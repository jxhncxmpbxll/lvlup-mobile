import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import Input from './input';
import Button from './button';

import axios from 'axios';
import styles from '../styles/login.js';

const Login = (props) => {
  const [username, onUsernameChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [isValid, onLogin] = useState('');

  const handleLogin = async () => {
    try {
    const response = await axios.post('http://127.0.0.1:3002/api/login', {username: username, password: password});
    const result = response.data;

      if (result === false) {
        throw result;
      } else {
        console.log('Success')
        onLogin('true');
        props.setUser(result.username);
        props.setUserId(result._id);
        props.fetchAllData(result._id);
        props.toggle();
      }
    } catch(err) {
      console.log('Incorrect Username or Password', err)
      onLogin('false');
    }
  }

    return (

      <View style={styles.loginContainer}>
      <Input
         maxlength={16}
         value={username}
         autoCaps={"none"}
         placeholder="Username"
         accessibility={"Username Input"}
         change={onUsernameChange}
      />
       <Input
         maxlength={16}
         security={true}
         value={password}
         autoCaps={"none"}
         placeholder="Password"
         accessibility={"Password Input"}
         change={onPasswordChange}
      />
      <Text style={styles.errorText}>
        {isValid === 'false' ? 'Incorrect Username or Password' : '' }
      </Text>
      <Button
        title="Login"
        onClick={handleLogin}
        accessibility={"Login button"}
      />
      <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        </View>
    </View>

  )
}

export default Login;