import { useState } from 'react';
import TaskItem from './components/TaskItem';
import './App.css';
//usando libreria proptypes
function App() {
  // Estado: lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Configurar Vite', completed: false },
    { id: 3, text: 'Hacer ejercicio', completed: false },
  ]);

  // Estado: valor del input
  const [inputValue, setInputValue] = useState('');

  // Agregar tarea
  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue(''); // Limpiar input
  };

  // Toggle completado
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Contador de tareas pendientes
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <h1>📋 Notas / Tareas</h1>

      <div className="add-task">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Crear nota</button>
      </div>

      <p className="counter">Pendientes: {pendingCount}</p>

      {/* Lista dinámica con .map() y key */}
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}          // <-- IMPORTANTE la key
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>

      {/* Mensaje cuando no hay tareas */}
      {tasks.length === 0 && <p className="empty">No hay tareas. ¡Agrega una!</p>}
    </div>
  );
}

export default App;