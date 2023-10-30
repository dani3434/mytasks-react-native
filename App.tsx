import React from 'react';
import Home from './src/pages/Home';
import {TasksProvider} from './src/context/TasksContent';

function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}

export default App;
