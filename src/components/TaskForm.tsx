import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask, updateTask } from '../api/Api.tsx';

interface TaskFormProps {
  task?: { id: number; title: string; description: string; completed: boolean };
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      updateTask(task.id, { title, description, completed: task.completed }).then(() => navigate('/'));
    } else {
      addTask({ title, description }).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Descrição</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TaskForm;