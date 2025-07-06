import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../contexts/ClientContext'

export default function TaskCreator() {
  const [title, setTitle] = useState('')
  const [client, setClient] = useState('')
  const [end_date, setEndDate] = useState(null)
  const [priority, setPriority] = useState('media')
  const [description, setDescription] = useState('')
  const { socket } = useContext(AppContext)

  const createTask = () => {
    if (socket) {
      console.log("Socket está ativo?", socket.connected);
      console.log('Criando tarefa com os seguintes dados:', { title, client, end_date, priority, description });
      socket.emit('createTask', { title, client, end_date, priority, description })
      console.log("Socket está ativo?", socket.connected);

      console.log('Task enviada para o servidor')
    }
  }

  return (
    <div
      className="task-creator"
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        backgroundColor: '#354B53',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)'
      }}
    >
      <h1
        style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bolder',
          textAlign: 'center',
          fontFamily: 'Poppins-regular'
        }}
      >
        Criar Tarefa
      </h1>
      <div style={{ width: '100%', height: 2, backgroundColor: 'white', marginBottom: 10 }} />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Título da tarefa"
        className="input"
      />
      <input
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="input"
        type="text"
        placeholder="Cliente"
      />
      <input
        value={end_date}
        onChange={(e) =>{console.log(e.target.value); setEndDate(e.target.value)}}
        className="input"
        type="date"
        placeholder="Data de entrega"
      />
      <div
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}
      >
        <label htmlFor="prioridade">
          <input
            checked={priority === 'alta'}
            onChange={(e) => setPriority(e.target.value)}
            className="radios"
            type="radio"
            name="prioridade"
            value="alta"
          />
          Alta
        </label>
        <label htmlFor="prioridade-media">
          <input
            checked={priority === 'media'}
            onChange={(e) => setPriority(e.target.value)}
            className="radios"
            type="radio"
            name="prioridade"
            value="media"
          />
          Média
        </label>
        <label htmlFor="prioridade-baixa">
          <input
            checked={priority === 'baixa'}
            onChange={(e) => setPriority(e.target.value)}
            className="radios"
            type="radio"
            name="prioridade"
            value="baixa"
          />
          Baixa
        </label>
      </div>

      <textarea
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          resize: 'none',
          height: '100px',
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px',
          outline: 'none',
          backgroundColor: 'rgba(72, 72, 72, 0.8)',
          border: 'none',
          color: 'white'
        }}
      />

      <button
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: 'rgba(34, 82, 71, 0.8)',
          border: 'none',
          color: 'white'
        }}
        onClick={createTask}
      >
        Criar
      </button>
    </div>
  )
}
