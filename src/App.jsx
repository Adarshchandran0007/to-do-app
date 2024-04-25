import  { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    if (newText.trim() !== '') {
      const newTasks = [...tasks];
      newTasks[index].text = newText;
      setTasks(newTasks);
    }
  };

 

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
    </div>
  );
}

export default App;
