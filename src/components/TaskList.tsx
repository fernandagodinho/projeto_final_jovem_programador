import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../api/Api.tsx'; 
import styles from './TaskList.module.css';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(response => setTasks(response.data));
  }, []);

  const handleDelete = (id: number) => {
    deleteTask(id).then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  return (
    <div className={styles.taskList}>
      <h1>Lista de Tarefas</h1>
      <Link to="/add">Adicionar Tarefa</Link>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={styles.taskItem}>
            <h2 className={styles.taskTitle}>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Concluída' : 'Pendente'}</p>
            <Link to={`/edit/${task.id}`}>Editar</Link>
            <button onClick={() => handleDelete(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;