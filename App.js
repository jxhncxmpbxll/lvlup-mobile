import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import Modal from './components/modal';

import Login from './components/login';
// import CreateAccount from './components/createAccount';
import Avatar from './components/avatar';
import ExperienceBar from './components/experienceBar';
import AttributesRow from './components/attributesRow';
import TaskList from './components/taskList';

import styles from './styles/app';

const App = () => {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [lvl, setLvl] = useState(0);
  const [xp, setXP] = useState(0);
  const [str, setStr] = useState(0);
  const [int, setInt] = useState(0);
  const [chr, setChr] = useState(0);
  const [heal, setHeal] = useState(0);
  const [applyOnLvlUp, setApplyOnLvlUp] = useState({
    str: 0,
    int: 0,
    chr: 0,
    heal: 0,
  });
  const [tasks, setTasks] = useState([]);

  const [loginModal, toggleLoginModal] = useState(true);

  useEffect(() => {
  }, [user, userId, lvl, xp, str, int, chr, heal, applyOnLvlUp, tasks]);

  const fetchAllData = (id) => {
    axios.post('http://127.0.0.1:3002/api/tasks', { _id: id })
      .then((result) => result.data)
      .then((result) => {
        setUser(result.username);
        setUserId(result._id);
        setLvl(result.level);
        setXP(result.experience);
        setStr(result.strength);
        setInt(result.intellect);
        setChr(result.charisma);
        setHeal(result.healing);
        setApplyOnLvlUp(result.applyOnLvlUp);
        setTasks(result.tasks);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Avatar user={user} />
          <ExperienceBar lvl={lvl} xp={xp} />
          <AttributesRow str={str} int={int} chr={chr} heal={heal} />
          <TaskList
            user={user}
            userId={userId}
            tasks={tasks || []}
            lvl={lvl}
            xp={xp}
            str={str}
            int={int}
            chr={chr}
            heal={heal}
            setLvl={setLvl}
            setTasks={setTasks}
            applyOnLvlUp={applyOnLvlUp}
            setApplyOnLvlUp={setApplyOnLvlUp}
            setXP={setXP}
            setStr={setStr}
            setInt={setInt}
            setChr={setChr}
            setHeal={setHeal}
          />
          <Modal show={loginModal}>
            <Login
              setUser={setUser}
              setUserId={setUserId}
              fetchAllData={fetchAllData}
              toggle={toggleLoginModal}
            />
          </Modal>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
