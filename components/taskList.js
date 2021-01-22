import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import CompleteTask from './completeTask';
import Modal from './modal/index';

import styles from '../styles/taskList';

import Task from './task';
import AddTask from './addTask';

const TaskList = (props) => {
  const [addTaskModal, toggleAddTaskModal] = useState(false);
  const [completeTaskModal, toggleCompleteTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedTaskCategory, setSelectedTaskCategory] = useState('');

  const inProgress = props.tasks.filter((task) => task.status === 'In Progress');

  useEffect(() => {}, [props]);

  return (
    <View style={styles.taskListContainer}>
      <View style={styles.taskListHeaderContainer}>
        <Text style={styles.taskListHeader}>Quests</Text>
        <TouchableOpacity onPress={() => toggleAddTaskModal(true)}>
          <Image style={styles.addIcon} source={require('../src/assets/icons/add-icon.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        horizontal={false}
      >
        {inProgress.map((task, index) => (
          <Task
            name={task.name}
            id={task._id}
            category={task.category}
            setSelectedTask={setSelectedTask}
            setSelectedTaskCategory={setSelectedTaskCategory}
            toggle={toggleCompleteTaskModal}
            key={index}
          />
        ))}

      </ScrollView>
      <Modal show={addTaskModal}>
        <AddTask
          user={props.user}
          userId={props.userId}
          toggle={toggleAddTaskModal}
          tasks={props.tasks}
          setTasks={props.setTasks}
        />
      </Modal>
      <Modal show={completeTaskModal} toggle={toggleCompleteTaskModal}>
        <CompleteTask
          selectedTask={selectedTask}
          selectedTaskCategory={selectedTaskCategory}
          setCompletedTask={props.setCompletedTask}
          setTaskCompletion={props.setTaskCompletion}
          toggle={toggleCompleteTaskModal}
        />
      </Modal>
    </View>
  );
};

export default TaskList;
