import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getTasks = () => api.get('/todos');
export const addTask = (task: { title: string; description: string }) => api.post('/todos', task);
export const updateTask = (id: number, task: { title: string; description: string; completed: boolean }) => api.put(`/todos/${id}`, task);
export const deleteTask = (id: number) => api.delete(`/todos/${id}`);