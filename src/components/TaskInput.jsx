import  { useState } from 'react';
import PropTypes from 'prop-types';

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div className='TaskInput'>
      <input
        type="text" 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button className='TaskInput' onClick={handleAddTask}>Add</button>
    </div>
  );
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default TaskInput;
