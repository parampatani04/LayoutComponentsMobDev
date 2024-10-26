/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import ToDoForm from './ToDoForm';

import ToDoList from './ToDoList';


function App() { 

  const[tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    if (!tasks.includes(task)){
    setTasks([...tasks, task]);
    } else {
      alert("Duplicate entry");
    }
  }
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
}

export default App;
