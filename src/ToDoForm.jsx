import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');
    return(
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={() => {
          addTask(taskText);
          setTaskText("");
        }} />
      </View>
    )
}

const styles = StyleSheet.create({
    form: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ToDoForm