import React, { useEffect } from "react";
import Tasks from "./Tasks";
import Drag from "./Drag";
import io from "socket.io-client";

export default function PriorityBoard({ type }) {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("tasks", (data) => {
      console.log("Tasks received:", data);
      setTasks((prev) => [...prev, ...data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="priority-board">
      {tasks.map((task) => (
        <Tasks key={task.id} type={type} task={task} />
        
      ))}
      
    </div>
  );
}
