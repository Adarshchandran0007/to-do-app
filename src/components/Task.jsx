import  { useRef } from 'react';
import PropTypes from 'prop-types';

function Task({ task, toggleComplete, editTask }) {
  const singleClickTimer = useRef(null);

  const handleClick = (event) => {
    if (event.detail === 1) {
      singleClickTimer.current = setTimeout(() => {
        const newText = prompt('Edit the task', task.text);
        if (newText !== null && newText !== '') {
          editTask(newText);
        }
      }, 300); // 300 ms delay 
    } else if (event.detail === 2) {
      clearTimeout(singleClickTimer.current);
      toggleComplete();
    }
  };

  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        cursor: 'pointer',
        userSelect: 'none'

      }}
    >
      {task.text}
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
