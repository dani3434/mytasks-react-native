import React from 'react';
import MockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';
import {TasksProvider, useTaskList} from '../../src/context/TasksContent';
import Home from '../../src/pages/Home';

jest.mock('@react-native-async-storage/async-storage', () => MockAsyncStorage);

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewTask = getByPlaceholderText('Nova Tarefa...');
    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy;
  });

  it('verifica a inserção de um item na lista de tarefas', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const data = {id: 'task01', title: 'Task01'};
    await act(() => result.current.addTask(data));
    expect(result.current.tasks).toBeTruthy();
  });
});
