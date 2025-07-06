import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../contexts/ClientContext'
import Tasks from './Tasks'

export default function PriorityBoard({ type }) {
  const [tasks, setTasks] = useState([])
  const { socket } = useContext(AppContext)

useEffect(() => {
  if (!socket) return;

  console.log("🔌 Socket conectado?", socket.connected);

  const handleTasks = (data) => {
    console.log('📥 Tasks recebidas:', data);
    setTasks(prev => {
  const newTasks = data.filter(task => !prev.some(t => t.id === task.id));
  return [...prev, ...newTasks];
});
  };

  socket.on("tasksD", handleTasks);

    socket.on("taskDeleted", (removedTaskId) => {
    console.log(`🗑️ Task ${removedTaskId.id} foi deletada com sucesso`);
    setTasks(prev => prev.filter(task => task.id !== removedTaskId.id));
  });

  socket.emit("requestTasks", () => {
    console.log('📤 Requisitando tasks do servidor');
  });

  return () => {
    socket.off("tasksD", handleTasks); 
  };
}, [socket]);

  return (
    <div className="priority-board">
      {tasks.filter(task => task.priority === "baixa").map((task) => (
        <Tasks key={task.id} type={type} task={task} />
      ))}
    </div>
  )
}
