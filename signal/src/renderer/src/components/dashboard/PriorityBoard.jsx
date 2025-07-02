import React from "react";
import Tasks from "./Tasks";
import Drag from "./Drag";

export default function PriorityBoard({ type }) {
  const [tasks, setTasks] = React.useState([]); // <- estado para armazenar as tasks

  React.useEffect(() => {
    const fetchedTasks = [
      {
        id: 1,
        title: "Task 1",
        description: "Description for Task 1",
        status: "in-progress",
        user: "Pedro",
        client: "Estrela Azul",
        data_atual: "2023-06-23T10:00:00Z"
      },
      {
        id: 2,
        title: "Task 2",
        description: "Description for Task 2",
        status: "completed",
        user: "Pedro",
        client: "Estrela Azul",
        data_atual: "2023-06-23T10:00:00Z"
      },
      {
        id: 3,
        title: "Task 3",
        description: "Description for Task 3",
        status: "not-started",
        user: "Pedro",
        client: "Estrela Azul",
        data_atual: "2023-06-23T10:00:00Z"
      }
    ];

    setTasks(fetchedTasks); // salva no estado
  }, []);

  return (
    <div className="priority-board">
      {tasks.map((task) => (
        <Tasks key={task.id} type={type} task={task} />
        
      ))}
      
    </div>
  );
}
