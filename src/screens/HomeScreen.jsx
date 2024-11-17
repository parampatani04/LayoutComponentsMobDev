import React, { useState } from "react";
import {SafeAreaView,View, Button, StyleSheet} from 'react-native';
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {

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
        <MainLayout>
            <Button 
                title="Go To About"
                onPress={() => navigation.navigate('About')}
            />
            <View style={styles.tasks}>
                <ToDoForm addTask={addTask}/>
                <ToDoList tasks={tasks}/>
            </ View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    tasks: {
        gap: 20,
    },
})

export default HomeScreen