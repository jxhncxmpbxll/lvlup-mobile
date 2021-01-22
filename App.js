import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import axios from 'axios';

import { saveToCharacter } from './services/userServices';
import { getTasks, completeTask } from './services/taskServices';

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
  const [completedTask, setCompletedTask] = useState({
    _id: '',
    xpValue: 0,
    category: '',
    timeSpent: 0
  });
  const [taskCompletion, setTaskCompletion] = useState(false);
  const [loginModal, toggleLoginModal] = useState(true);

  useEffect(() => {
    if (xp >= 1) {
      lvlUp(xp, lvl);
    }}, [xp]);

  useEffect(() => {
    if (taskCompletion) {
      handleTaskCompletion(completedTask);
      saveToCharacter(userId, lvl, xp, str, int, chr, heal, applyOnLvlUp);
      setTaskCompletion(false);
    }}, [taskCompletion, completedTask]);

  const fetchAllData = (id) => {
    getTasks(id)
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

  const lvlUp = (xp, lvl) => {
    setLvl(lvl + 1);
    setXP(xp - 1);
    setStr(applyOnLvlUp.str);
    setInt(applyOnLvlUp.int);
    setChr(applyOnLvlUp.chr);
    setHeal(applyOnLvlUp.heal);
    console.log('saveToCharacter xp: ', xp, str, int, chr, heal);
    setApplyOnLvlUp({ str: 0, int: 0, chr: 0, heal: 0 });
  };

  const handleTaskCompletion = (task) => {
    const { _id, xpValue, category } = task;
    completeTask(_id, xpValue)
    .then((result) => result.data)
    .then((result) => {
      const playerXP = xp + result.xpValue;
      console.log('Quest Completed Successfully!', result);
      setTasks([...removeCompleted(_id), result]);
      setXP(playerXP);
      updateApplyOnLvlUp(category)
    })
    .catch((err) => console.log(err));
  };

  const updateApplyOnLvlUp = (attr) => {
    setApplyOnLvlUp({ ...applyOnLvlUp, [attr]: Math.ceil(completedTask.timeSpent / 2) });
  };

  const removeCompleted = (taskId) =>
    tasks.filter((task) => task._id !== taskId && task.status === 'In Progress');

  return (
    <View>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Avatar user={user} />
          <ExperienceBar lvl={lvl} xp={xp} />
          <AttributesRow str={str} int={int} chr={chr} heal={heal} />
          <TaskList
            tasks={tasks || []}
            setTasks={setTasks}
            setCompletedTask={setCompletedTask}
            setTaskCompletion={setTaskCompletion}
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
