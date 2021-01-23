import React, { useState, useEffect, useRef } from 'react';
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
  const refState = useRef();
  refState.current = applyOnLvlUp;

  useEffect(() => {
    if (xp >= 1) {
      lvlUp(xp, lvl);
    }
    if (taskCompletion) {
      handleTaskCompletion(completedTask);
      console.log('values passed into saveToCharacter at Task Completion: ', userId, lvl, xp, str, int, chr, heal, refState.current);
      saveToCharacter(userId, lvl, xp, str, int, chr, heal, refState.current);
      setTaskCompletion(false);
    }
  }, [xp, taskCompletion, completedTask, userId, lvl, refState]);

  const fetchAllData = (id) => {
    getTasks(id)
      .then(result => result.data)
      .then(result => {
        const { username, _id, level, experience, strength, intellect, charisma, healing, applyOnLvlUp, tasks} = result;
        const exp = Number(parseFloat(experience).toFixed(2));
        setUser(username);
        setUserId(_id);
        setLvl(level);
        setXP(exp);
        setStr(strength);
        setInt(intellect);
        setChr(charisma);
        setHeal(healing);
        setApplyOnLvlUp(applyOnLvlUp);
        setTasks(tasks);
      })
      .catch((err) => console.log(err));
  };

  const lvlUp = (xp, lvl) => {
    const plvl = lvl + 1;
    const pxp = Number(parseFloat(xp - 1).toFixed(2));
    setLvl(plvl);
    setXP(pxp);
    setStr(refState.current.str);
    setInt(refState.current.int);
    setChr(refState.current.chr);
    setHeal(refState.current.heal);
    setApplyOnLvlUp({ str: 0, int: 0, chr: 0, heal: 0 });
  };

  const handleTaskCompletion = (task) => {
    const { _id, xpValue, category } = task;
    completeTask(_id, xpValue)
    .then(result => result.data)
    .then(result => {
      const playerXP = xp + result.xpValue;
      console.log('Quest Completed Successfully!', result);
      setTasks(removeCompleted(_id));
      setXP(playerXP);
      updateApplyOnLvlUp(category);
    })
    .catch((err) => console.log(err));
  };

  const updateApplyOnLvlUp = (attr) => {
    console.log('the attr, ', attr)
    console.log('timespent, ', completedTask)
    setApplyOnLvlUp({ ...applyOnLvlUp, [attr]: Math.ceil(completedTask.timeSpent / 2) });
    console.log(refState, 'watching you')
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
