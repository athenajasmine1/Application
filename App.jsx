import React, { useState } from 'react';
import ToDoList from './ToDoList'; // Make sure to adjust the import path if necessary.

function App() {
  // Define state variable for tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div>
      <h1>My To-Do List</h1>
      {/* Pass tasks to the ToDoList component */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;


