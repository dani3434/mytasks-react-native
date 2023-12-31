import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ITask, TasksContext, useTaskList} from '../../context/TasksContent';

export const TaskList = () => {
  const {tasks, removeTask} = useTaskList();

  function handleRemoveTask(id: string) {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  }
  return (
    <FlatList
      data={tasks as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.buttonTask}
          onPress={() => handleRemoveTask(item.id)}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
