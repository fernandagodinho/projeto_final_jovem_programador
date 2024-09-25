import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTasks } from '../api/Api.tsx';
import TaskDetails from '../components/TaskDetails';

const EditTaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTasks().then(response => {
      const task = response.data.find((t: { id: number }) => t.id === parseInt(id || '0'));
      setTask(task);
    });
  }, [id]);

  return task ? <TaskDetails task={task} /> : <p>Carregando...</p>;
};

export default EditTaskPage;