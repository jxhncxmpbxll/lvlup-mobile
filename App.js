import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Modal from './components/modal';


import Login from './components/login';
import CreateAccount from './components/createAccount';
import Avatar from './components/avatar';
import ExperienceBar from './components/experienceBar';
import AttributesRow from './components/attributesRow';
import TaskList from './components/taskList';

import styles from './styles/app';

const App = () => {

  const [user, setUser] = useState('Crono');
  const [lvl, setLvl] = useState('10');
  const [xp, setXP] = useState(0);
  const [str, setStr] = useState('3');
  const [int, setInt] = useState('7');
  const [chr, setChr] = useState('6');
  const [heal, setHeal] = useState('4');

  const [loginModal, toggleLoginModal] = useState(true);

  return (
    <View>
      <StatusBar/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
         <Avatar user={user}/>
         <ExperienceBar lvl={lvl} xp={xp}/>
         <AttributesRow str={str} int={int} chr={chr} heal={heal}/>
         <TaskList user={user}/>
          <Modal show={loginModal}><Login toggle={toggleLoginModal}/></Modal>
       </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
