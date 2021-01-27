import React, { useState, useEffect, useRef, Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      userId: '',
      lvl: 0,
      xp: 0,
      str: 0,
      int: 0,
      chr: 0,
      heal: 0,
      applyOnLvlUp: { str: 0, int: 0, chr: 0, heal: 0 },
      tasks: [],
      completedTask:{ _id: '', xpValue: 0, category: '', timeSpent: 0 },
      taskCompletion: false,
      loginModal: true
    };
  }

  componentDidUpdate() {
    if (this.state.taskCompletion) {
      const { userId, lvl, xp, chr, str, int, heal, applyOnLvlUp, completedTask } = this.state;
      this.handleTaskCompletion(completedTask);
      saveToCharacter(userId, lvl, xp, str, int, chr, heal, applyOnLvlUp);
      this.setState({ taskCompletion: false });
    }
  }

  fetchAllData(id) {
    getTasks(id)
      .then(result => result.data)
      .then(result => {
        const { username, _id, level, experience, strength, intellect, charisma, healing, applyOnLvlUp, tasks} = result;
        const exp = Number(parseFloat(experience).toFixed(2));
        this.setState({ user: username, userId: _id, lvl: level, xp: exp, str: strength, int: intellect, chr: charisma, heal: healing, applyOnLvlUp, tasks });
      })
      .catch((err) => console.log(err));
  };

  lvlUp(xp, lvl) {
    const plvl = lvl + 1;
    const pxp = Number(parseFloat(xp - 1).toFixed(2));
    const { str, int, chr, heal } = this.state.applyOnLvlUp;
    this.setState((state)=> {
      return {
        xp: pxp,
        lvl: state.lvl + 1,
        str: state.str + str,
        int: state.int + int,
        chr: state.chr + chr,
        heal: state.heal + heal,
        applyOnLvlUp: {str: 0, int: 0, chr: 0, heal: 0}
      };
    }, ()=> saveToCharacter(this.state.userId, this.state.lvl, this.state.xp, this.state.str, this.state.int, this.state.chr, this.state.heal, this.state.applyOnLvlUp));
  }

  componentWillUnmount() {
    console.log('unmounted!');
    saveToCharacter(this.state.userId, this.state.lvl, this.state.xp, this.state.str, this.state.int, this.state.chr, this.state.heal, this.state.applyOnLvlUp);
  }

  handleTaskCompletion(task) {
    const { _id, xpValue, category } = task;
    completeTask(_id, xpValue)
    .then(result => result.data)
    .then(result => {
      const playerXP = this.state.xp + result.xpValue;
      console.log('Quest Completed Successfully!', result);
      this.setState({ tasks: this.removeCompleted(_id), xp: playerXP }, () => this.updateApplyOnLvlUp(category));
    })
    .catch((err) => console.log(err));
  }

  updateApplyOnLvlUp(attr) {
    this.setState({ applyOnLvlUp: { ...this.state.applyOnLvlUp, [attr]: Math.ceil(this.state.completedTask.timeSpent / 2) } }, () => {
      if (this.state.xp >= 1) {
        this.lvlUp(this.state.xp, this.state.lvl);
      }
    });
  }
  removeCompleted(taskId) {
    return this.state.tasks.filter((task) => task._id !== taskId && task.status === 'In Progress');
  }
  setCompletedTask(task) {
    this.setState({ completedTask: task});
  }
  setTaskCompletion(completion) {
    this.setState({ taskCompletion: completion });
  }

  render() {
    return (
      <View>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Avatar user={this.state.user} />
          <ExperienceBar lvl={this.state.lvl} xp={this.state.xp} />
          <AttributesRow str={this.state.str} int={this.state.int} chr={this.state.chr} heal={this.state.heal} />
          <TaskList
            tasks={this.state.tasks || []}
            setTasks={(tasks) => this.setState({ tasks })}
            setCompletedTask={this.setCompletedTask.bind(this)}
            setTaskCompletion={this.setTaskCompletion.bind(this)}
          />
          <Modal show={this.state.loginModal}>
            <Login
              setUser={(name) => this.setState({ user: name })}
              setUserId={(id) => {
                this.setState({ userId: id });
              }}
              fetchAllData={this.fetchAllData.bind(this)}
              toggle={(show) => this.setState({ loginModal: show })}
            />
          </Modal>
        </View>
      </SafeAreaView>
    </View>
    );
  }
}

export default App;
