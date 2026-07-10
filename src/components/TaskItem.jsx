import PropTypes from 'prop-types';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => onToggle(task.id)}
        style={{ cursor: 'pointer' }}
      >
        {task.text}
      </span>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;