import React from 'react';
import TaskForm from './TaskForm'; 

const TaskDetails: React.FC<{ task: { id: number; title: string; description: string; completed: boolean } }> = ({ task }) => {
  return (
    <div>
      <h1>Editar Tarefa</h1>
      <TaskForm task={task} />
    </div>
  );
};

export default TaskDetails;