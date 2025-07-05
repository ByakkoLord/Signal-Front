import React, { useEffect, useState } from 'react'
import Tasks from './Tasks'
import io from 'socket.io-client'

export default function PriorityBoard({ type }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const socket = io('http://localhost:3000')

    socket.on('tasks', (data) => {
      console.log('Tasks received:', data)
      setTasks(data) // Atualiza o estado com os dados recebidos
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    console.log('Tasks updated:', tasks) // Vai mostrar sempre que as tasks mudarem
  }, [tasks])

  return (
    <div className="priority-board">
      {tasks.map((task) => (
        <Tasks key={task.id} type={type} task={task} />
      ))}
    </div>
  )
}
