import PropTypes from 'prop-types';
import Task from '../components/Task';

function TaskList({ tasks, toggleComplete, editTask }) {
  return (
    <div className='tasks'>
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          editTask={(newText) => editTask(index, newText)}
        />
      ))}
    </ul>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskList;
