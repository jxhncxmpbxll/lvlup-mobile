import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './components/login';
import styles from './styles/app';

const App = () => {

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <View style={styles.container}>
         <Login/>
       </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
